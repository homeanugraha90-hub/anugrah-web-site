import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogDetails = ( ) => {
  const { id } = useParams(); // URL se blog ka id milega
  const [blog, setBlog] = useState(null);
//   console.log("id..",id);

  useEffect(() => {
     console.log("id..", id);
    fetch(`http://localhost:5000/api/media/id/${id}`) // backend route se ek blog fetch karo
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!blog) return <p className="text-center">Loading...</p>;

  // Agar tumhare backend me content stringified JSON hai, to parse karna padega
  let blogContent = null;
  try {
    blogContent = JSON.parse(blog.content);            
  } catch (e) {
    blogContent = blog.content;
    console.log(e);
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 pt-20">
      <img
        src={`http://localhost:5000/upload/${blog.images[0]}`}
        alt={blogContent?.title || blog.title}
        className="w-full h-80 object-cover rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-6">
        {blogContent?.title || blog.title}
      </h1>
      <p className="text-gray-500 text-sm mt-2">
        {blogContent?.author || blog.author} •{" "}
        {blogContent?.date || new Date(blog.createdAt).toDateString()}
      </p>

      <div className="mt-6 text-lg leading-relaxed text-gray-800 whitespace-pre-line">
        {blogContent?.content || blog.content}
      </div>
    </div>
  );
};

export default BlogDetails;
