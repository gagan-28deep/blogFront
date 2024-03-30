import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePosts from "../../hooks/usePosts";
import { useSelector } from "react-redux";
import { Loader } from "..";
const SinglePost = () => {
  const { handleGetPostById } = usePosts();
  const id = useParams();
  useEffect(() => {
    handleGetPostById(id);
  }, [id]);
  const post = useSelector((state) => state?.post?.singlePostData);
  const isLoading = useSelector((state) => state?.post?.singlePostLoading);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="container mx-auto">
            <img
              src={post?.postImage}
              alt="post"
              className="w-full h-1/2 object-cover"
            />
            <div className="float-right">
              {/* {account.username === post.username && (
              <>
                <a href={`/update/${post._id}`}>
                  <button className="edit-icon bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Edit
                  </button>
                </a>
                <button
                  onClick={() => deleteBlog()}
                  className="delete-icon bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </>
            )} */}
            </div>
            <h1 className="text-3xl font-bold text-center mt-8">
              {post?.title}
            </h1>

            <div className="author flex items-center justify-between mt-4">
              <a
                href={`/?username=${post?.username}`}
                className="text-gray-700 hover:underline"
              >
                <p>
                  Author:{" "}
                  <span className="font-semibold">{post?.owner[0]?.name}</span>
                </p>
              </a>
              <p className="text-gray-500">
                {new Date(post?.createdAt).toDateString()}
              </p>
            </div>

            <p className="mt-4">{post?.description}</p>
            {/* <Comments post={post} /> */}
          </div>
        </>
      )}
    </div>
  );
};

export default SinglePost;
