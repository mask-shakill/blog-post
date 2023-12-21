"use client";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
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
        {/* {posts.map((p) => (
          <div key={p.id} class={` ${dynamicCss["id" + p.id]} bg-gray-200 p-4`}>
            Column 1
          </div>
        ))} */}
        <div
          class={`flex flex-col items-start justify-center border p-1 rounded-sm col-span-2 lg:col-span-1 `}
        >
          <img
            className="w-full"
            src="https://img.freepik.com/free-photo/sunrise-deogyusan-mountains-covered-with-snow-winter-south-korea_335224-462.jpg?size=626&ext=jpg&ga=GA1.1.945868740.1697346172&semt=ais"
            alt=""
          />
          <h1 className=" text-md font-semibold mt-2 mb-1">Golden Snow Land</h1>
          <h1 className="font-semibold mb-1">12/12/23</h1>
          <p className="text-justify text-sm">
            this is the golden snow land near finland is awesome.
          </p>

          <button className="mt-2 text-orange-400">Read More</button>
        </div>
        <div
          class={`flex flex-col items-start justify-center border p-1 rounded-sm `}
        >
          <img
            className="w-full"
            src="https://img.freepik.com/free-photo/sunrise-deogyusan-mountains-covered-with-snow-winter-south-korea_335224-462.jpg?size=626&ext=jpg&ga=GA1.1.945868740.1697346172&semt=ais"
            alt=""
          />
          <h1 className=" text-md font-semibold mt-2 mb-1">Golden Snow Land</h1>
          <h1 className="font-semibold mb-1">12/12/23</h1>
          <p className="text-justify text-sm">
            this is the golden snow land near finland is awesome.
          </p>

          <button className="mt-2 text-orange-400">Read More</button>
        </div>
        <div
          class={`flex flex-col items-start justify-center border p-1 rounded-sm `}
        >
          <img
            className="w-full"
            src="https://img.freepik.com/free-photo/sunrise-deogyusan-mountains-covered-with-snow-winter-south-korea_335224-462.jpg?size=626&ext=jpg&ga=GA1.1.945868740.1697346172&semt=ais"
            alt=""
          />
          <h1 className=" text-md font-semibold mt-2 mb-1">Golden Snow Land</h1>
          <h1 className="font-semibold mb-1">12/12/23</h1>
          <p className="text-justify text-sm">
            this is the golden snow land near finland is awesome.
          </p>

          <button className="mt-2 text-orange-400">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
