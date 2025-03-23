import BlogCard from "@/components/ui/BlogCard";
import { getPublishedBlogs } from "@/lib/notion";

export default async function BlogPage() {
  const blogs = await getPublishedBlogs();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      {blogs.length === 0 ? (
        <p>No published blogs yet.</p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} data={blog} />
          ))}
        </div>
      )}
    </div>
  );
}
