type TagProps = {
  label: string;
};

export function Tag({ label }: TagProps) {
  return <span className="badge font-mono">{label}</span>;
}
