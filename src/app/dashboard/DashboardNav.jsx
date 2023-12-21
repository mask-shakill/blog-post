import React from "react";
import Link from "next/link";
const DashboardNav = () => {
  return (
    <div>
      <ul className="flex items-center justify-center gap-x-10 bg-slate-400 p-2">
        <Link className="text-slate-900 hover:text-yellow-500 font-semibold" href="/dashboard/add-post">
          Add Post
        </Link>
        <Link className="text-slate-900 hover:text-yellow-500 font-semibold" href="/dashboard/all-post">
          All post
        </Link>
      </ul>
    </div>
  );
};

export default DashboardNav;
