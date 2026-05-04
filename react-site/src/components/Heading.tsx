import type { ReactNode } from 'react';

type HeadingProps = {
  children: ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return <h1 className="pt-8 pb-4 text-2xl font-bold">{children}</h1>;
}
