"use client";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  let dynamicCss = {
    id1: "col-span-2",
    id4: "col-span-2",
  };
  return (
    <div>
      <h1 className="text-center mt-3 lg:mt-8 text-2xl">All Blogs</h1>
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 mx-6 mt-4">
       
       {
          posts.map(post=>{
            const {_id,title,date,content,url} = post;
            return(
              <div key={_id}
              class={`flex flex-col items-start justify-center border p-1 rounded-sm col-span-2 lg:col-span-1 `}
            >
              <img
                className="w-full"
                src={url}
                alt=""
              />
              <h1 className=" text-md font-semibold mt-2 mb-1">{title}</h1>
              <h1 className="font-semibold mb-1">{date}</h1>
              <p className="text-justify text-sm">
                {content}
              </p>
    
              <button className="mt-2 text-orange-400">Read More</button>
            </div>
            )
          })
       }
      </div>
    </div>
  );
};

export default Blogs;
