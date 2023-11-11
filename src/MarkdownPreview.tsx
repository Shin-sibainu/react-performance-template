import { Remarkable } from "remarkable";

const md = new Remarkable();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MarkdownPreview({ markdown }: any) {
  return (
    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: md.render(markdown) }}
    />
  );
}
