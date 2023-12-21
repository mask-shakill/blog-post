import React from "react";

const AddPost = () => {
  return <div className="flex justify-center items-center mt-7">

     <form className="flex flex-col bg-slate-600 px-6 py-10 gap-y-4 text-white font-semibold rounded-xl">

       <label htmlFor="">Title</label>
       <input className="text-black p-1 w-full rounded-md" type="text" name="title" id="" />
       <label htmlFor="">Date</label>
       <input className="text-black p-1 w-full rounded-md" type="date" name="date" id="" />
       <label htmlFor="">Content</label>
       <input className="text-black p-1 w-full rounded-md" type="text" name="content" id="" />
       <label htmlFor="">Url</label>
       <input className="text-black p-1 w-full rounded-md" type="url" name="url" id="" />
       <button className="bg-blue-400 hover:bg-blue-600 p-2 rounded-xl" type="submit">Add Post</button>
     </form>

  </div>;
};

export default AddPost;
