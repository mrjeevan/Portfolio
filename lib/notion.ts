"server only";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DB_ID!;

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
      // console.log("page", page.properties.ReadTime.number);
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
