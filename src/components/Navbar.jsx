import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <ul className="bg-slate-100 text-slate-900 shadow-md border border-slate-500 p-4 flex items-center justify-between   lg:justify-around">
        <Link
          className="hover:text-orange-900 font-semibold text-black"
          href="/"
        >
          iBlog
        </Link>
        <div className="flex gap-x-5 lg:gap-x-24 items-center pe-3  ">
          <Link
            className="hover:text-orange-900 font-semibold text-black"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-orange-900 font-semibold text-black"
            href="/blogs"
          >
            Blogs
          </Link>
          <Link
            className="hover:text-orange-900 font-semibold text-black"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </div>
      </ul>
    </>
  );
};

export default Navbar;
