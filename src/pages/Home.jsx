import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import usePosts from "../hooks/usePosts.js";
import { Link } from "react-router-dom";

const Home = () => {
  const { handleGetAllPosts } = usePosts();

  // 1st way
  // useEffect(()=>{
  //   const initial = async ()=>{
  //     const data = await  handleGetAllPosts()
  //     console.log("data" , data);
  //   }
  //   initial()
  // } , [])

  useEffect(() => {
    handleGetAllPosts();
  }, []);

  const posts = useSelector((state) => state?.post?.allPostsData);

  return (
    <div className="grid gap-60 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
      {posts?.map((post) => (
        <div key={post._id} className="border">
          <Link to={`/post/${post?._id}`}>
            <img
              src={post?.postImage}
              className="aspect-video w-full rounded-md"
              alt=""
            />
            <div className="min-h-min p-3">
              <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
                {post?.title}
              </p>
              <p className="mt-4 w-full text-sm leading-normal text-gray-600">
                {post.description}
              </p>
              <div className="mt-4 flex space-x-3 ">
                <img
                  className="h-full w-10 rounded-lg"
                  src={post?.owner[0]?.profileImage}
                  alt={post.author}
                />
                <div>
                  <p className="text-sm font-semibold leading-tight text-gray-900">
                    {post?.owner[0]?.name}
                  </p>
                  <p className="text-sm leading-tight text-gray-600">
                    {new Date(post?.createdAt).toDateString()}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
