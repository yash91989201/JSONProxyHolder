import { Link } from "react-router-dom";
import useFetch from "../utils/useFetch";

const AllPosts = () => {
  const { data, loading } = useFetch("/posts", []);
  return (
    <div>
      {loading ? null : (
        <>
          <div>
            <h4 className="py-8  text-5xl text-center">All Posts</h4>
          </div>
          <div className="py-8 px-3 grid md:grid-cols-2 lg:grid-cols-3 grid-row gap-6  auto-rows-auto">
            {data.map((post, id) => (
              <Link key={id} to={`/post/${id + 1}`}>
                <div className="h-full border rounded-md overflow-hidden hover:shadow-sm hover:shadow-blue-500 cursor-pointer">
                  <p className="h-16 p-2 bg-blue-500 text-white">
                    {post.title}
                  </p>
                  <p className="p-3">{post.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllPosts;
