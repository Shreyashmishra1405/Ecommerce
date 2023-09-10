"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState(null);
  const [items, setItems] = useState([]);
  const [open,setOpen]=useState(true)

  useEffect(() => {
    async function getdata() {
      const res = await fetch(
        `https://3551-27-4-149-117.ngrok-free.app/suggestions?q=${search}`
      );
      const data = await res.json();
      setItems(data);
    }
    getdata();
  }, [search]);
  return (
    <nav className="flex justify-around items-center  text-white py-4 text-lg bg-gradient-to-b from-[#0006] to-transparent">
      <span className="font-bold select-none cursor-pointer  ">Ecomm</span>
      <div className=" flex items-center flex-col relative  lg:w-[600px] ">
        <input
          type="text"
          className="text-sm px-4 py-2 w-full capitalize font-semibold cursor-text rounded outline-none  text-black"
          placeholder="Search Item"
          onChange={(e) => setSearch(e.target.value)}
        />
        {items.length !== 0 && search.length !== 0 && open  && (
          <div className="z-50 absolute top-full flex flex-col gap-2 border mt-1 text-ellipsis bg-white text-black max-h-[300px] px-1 w-full overflow-y-scroll no-scrollbar text-[1rem]">
            <Link href={`/search?q=${search}&start=0&num=10`}  onClick={()=>setOpen(false)}  >
              {" "}
              <div className="cursor-pointer hover:bg-slate-200 whitespace-nowrap overflow-hidden text-ellipsis capitalize ">
                {search}
                <span className="text-gray-400"> in all categories</span>
              </div>
            </Link>
            {items.map((item) => {
              return (
                <Link href={`/desc?id=${item.id}`} key={item.id} onClick={()=>setOpen(false)}>
                  <div className="cursor-pointer hover:bg-slate-200 whitespace-nowrap overflow-hidden text-ellipsis ">
                    {item.productName}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
      <div className="navicons flex items-center gap-8 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-primarylight cursor-pointer"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
        <Link href="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            className="fill-primarylight cursor-pointer"
            viewBox="0 0 576 512"
          >
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          className="fill-primarylight cursor-pointer"
          viewBox="0 0 448 512"
        >
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
