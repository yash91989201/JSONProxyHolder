import { useParams } from "react-router-dom";

import useFetch from "../utils/useFetch";

const Posts = () => {
  const { id } = useParams();
  const { data: postData, loading: postLoading } = useFetch(`/posts/${id}`, {});
  const { data: commentData, loading: commentLoading } = useFetch(
    `/posts/${id}/comments`,
    []
  );
  return (
    <div className="py-6">
      <div>
        {postLoading ? (
          <h5 className="py-4 text-2xl font-semibold">Loading Posts...</h5>
        ) : (
          <div className="px-8 py-4">
            <h3 className="text-2xl">{postData?.title}</h3>
            <p className="py-4">{postData?.body}</p>
          </div>
        )}
      </div>
      {commentLoading ? (
        <h5 className="py-4 text-xl">Loading Comments...</h5>
      ) : (
        <div className="p-4 max-w-3xl mx-auto ">
          <h4 className="py-4 text-2xl">Comments</h4>
          {commentData.map((comment) => (
            <div className="border border-blue-500  my-2 p-3 rounded-md ">
              <p className="text-xl ">{comment.name}</p>
              <p className="px-4 py-1 text-gray-500">{comment.email}</p>
              <p className="p-2 py-1 ">{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
