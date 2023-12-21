import React from "react";
import Link from "next/link";
const DashboardNav = () => {
  return (
    <div>
      <ul className="flex items-center justify-center gap-x-10 bg-slate-400 p-2">
        <Link className="text-blue-500" href="/add-post">
          Add Post
        </Link>
        <Link className="text-slate-900" href="/all-post">
          All post
        </Link>
      </ul>
    </div>
  );
};

export default DashboardNav;
