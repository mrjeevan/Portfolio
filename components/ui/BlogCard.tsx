import Image from "next/image";
import Link from "next/link";

interface IBlogData {
  id: string;
  title: string;
  slug: string;
  canonical: string;
  abstract: string;
  publishedDate: string;
  motive: string;
  tags: string[];
  coverImage: string;
  readTime: string;
}

const BlogCard = ({ data }: { data: IBlogData }) => {
  return (
    <Link href={`/blog/${data.slug}`} className="group">
      <div className="rounded-2xl overflow-hidden shadow-md bg-white transition-all duration-300 hover:shadow-xl">
        {/* Cover Image */}
        <Image
          src={`${
            data.coverImage ||
            "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }`}
          alt={data.title}
          width={500}
          height={300}
          className="w-full  h-48 object-cover transition-transform duration-300 scale-105 group-hover:scale-110"
        />

        {/* Content */}
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600">
            {data.title}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {data.publishedDate} • {data.readTime} min read
          </p>

          <p className="text-gray-600 text-sm mt-2 line-clamp-2">
            {data.abstract}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap mt-3 gap-2">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
