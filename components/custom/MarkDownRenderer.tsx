import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // For tables, strikethrough, task lists
import rehypeRaw from "rehype-raw"; // Allows HTML inside markdown
import rehypeSanitize from "rehype-sanitize"; // Prevents XSS vulnerabilities

const MarkdownRenderer = ({ content }: { content: string }) => {
  return (
    <div className="prose max-w-none dark:prose-invert">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
