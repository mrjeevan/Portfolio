import MarkdownRenderer from "@/components/custom/MarkDownRenderer";
import { getBlogAsMarkdown } from "@/lib/notion";
import Markdown from "react-markdown";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogAsMarkdown(params.slug);
  // const { page, markdown } = blog;
  if (!blog) return <p>Not Found</p>;
  const markdown = "# Hi, *Pluto*!";
  return (
    <div className="prose max-w-none mx-auto">
      {/* <h1>{page.properties.Title.title[0]?.text.content}</h1> */}
      {/* <Markdown>{blog.markdown.parent}</Markdown> */}
      <MarkdownRenderer content={blog.markdown.parent} />
    </div>
  );
}
export const revalidate = 60 * 60 * 24 * 2; // 172800 seconds (2 days)
