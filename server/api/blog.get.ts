import { promises as fs } from 'node:fs'
import { join } from 'node:path'
import matter from 'gray-matter'

export default defineEventHandler(async (event) => {
  const contentPath = join(process.cwd(), 'content/blog')
  
  try {
    const files = await fs.readdir(contentPath)
    const mdFiles = files.filter(f => f.endsWith('.md'))
    
    const posts = await Promise.all(
      mdFiles.map(async (file) => {
        const filePath = join(contentPath, file)
        const fileContent = await fs.readFile(filePath, 'utf-8')
        const { data } = matter(fileContent)
        const slug = file.replace('.md', '')
        
        return {
          _id: slug,
          _path: `/blog/${slug}`,
          title: data.title,
          description: data.description,
          publishedAt: data.publishedAt,
          updatedAt: data.updatedAt,
          tags: data.tags
        }
      })
    )
    
    // Sort by publishedAt DESC
    posts.sort((a, b) => {
      const dateA = new Date(a.publishedAt)
      const dateB = new Date(b.publishedAt)
      return dateB.getTime() - dateA.getTime()
    })
    
    return posts
  } catch (error) {
    console.error('Error reading blog posts:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to load blog posts'
    })
  }
})
