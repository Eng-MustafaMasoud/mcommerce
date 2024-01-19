"use client";

import Link from "next/link";
import { LinksList } from "@/utils/data";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Span } from "next/dist/trace";
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  return (
    <header className="w-full">
      <nav className="max-w-[1440px] max-auto flex justify-between items-center gap-2 2xl:px-4 p-6 border-b border-gray-200" >
        <div className="">
          <span className="text-xl font-bold">
            <Link href="/">Mcommerce</Link>
          </span>
        </div>
        <div className=" flex-1 flex border border-gray-300 max-w-[400px] rounded-md items-center pr-2">
          <input
            type="text"
            placeholder="search your products..."
            className=" w-full outline-none p-2 rounded-md items-center justify-center flex caret-gray-300 placeholder:text-gray-200 "
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
          {searchQuery?(<span onClick={()=>setSearchQuery("")} className="hover:cursor-pointer">x</span>):"search"}
        </div>
        <ul className=" gap-4 hidden md:inline-flex">
          {LinksList?.map((item) => (
            <li key={item.title} className="">
              <Link href={item.navigation} className={pathname===item.navigation?"underline text-gray-950 transition-all duration-100 ":
            "text-gray-400 hover:text-gray-950 hover:underline underline-offset-4 decoration-[1px]"}>{item?.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
