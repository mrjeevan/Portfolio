"server only";
import { NotionToMarkdown } from "notion-to-md";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DB_ID!;
const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getPublishedBlogs() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Status",
        select: { equals: "Published" },
      },
      sorts: [
        {
          property: "PublishedDate",
          direction: "descending",
        },
      ],
    });

    return response.results.map((page: any) => {
      const properties: any = page.properties;
      // console.log("page", page);
      return {
        id: page.id,
        title: properties.Page.title[0]?.plain_text || "Untitled",
        slug: properties.Slug.rich_text[0]?.plain_text || "",
        canonical: properties.Canonical.url || "",
        readTime: page.properties.ReadTime.number,
        abstract: properties.Abstract.rich_text[0]?.plain_text || "",
        publishedDate: properties.PublishedDate.date?.start || "",
        motive: properties.Motive.rich_text[0]?.plain_text || "",
        tags: properties.Tags.multi_select.map(
          (tag: { name: string }) => tag.name
        ),
        coverImage: page?.cover?.external?.url || null,
      };
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export async function getBlogAsMarkdown(slug: string) {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DB_ID!,
    filter: { property: "Slug", rich_text: { equals: slug } },
  });

  if (response.results.length === 0) return null;

  const page = response.results[0];
  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const markdown = n2m.toMarkdownString(mdBlocks);
  // console.log("mdBlocks", JSON.stringify(mdBlocks));
  // console.log("markdown", markdown);

  return { page, markdown };
}
