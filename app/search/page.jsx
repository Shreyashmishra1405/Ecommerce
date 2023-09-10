"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const search = () => {
  const searchParams = useSearchParams();
  const [data, setData] = useState(null);
  const q = searchParams.get("q");
  const start = searchParams.get("start");
  const num = searchParams.get("num");
  const getdata = async () => {
    const res = await fetch(
      `https://3551-27-4-149-117.ngrok-free.app/search?q=${q}&start=${start}&num=${num}`
    );
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    (async function () {
      let result = await getdata();
      setData(result);
    })();
  }, [q, start, num]);

  useEffect(() => {
    console.log(data);
  }, [data]);
  
  return (
    <div className=" flex flex-col bg-gray-900 text-white ">
      <Navbar />
      <span className="px-32">Results for "{q}"</span>
      <div className=" grid grid-cols-3 justify-center w-full grow gap-4 my-10">
        {data &&
          data.map((item) => {
            return (
              <Link href={`/desc?id=${item.id}`} key={item.id}>
                <div
                  key={item.id}
                  className=" gap-2 flex flex-col w-full  items-center "
                >
                  <img
                    src={item.image}
                    className=" h-[300px] w-1/2  justify-center rounded-md cursor-pointer  "
                    alt=""
                  />
                  <span className="w-[30ch] text-ellipsis whitespace-nowrap overflow-hidden cursor-pointer ">
                    {item.productName}
                  </span>
                  <span className="text-primary font-bold text-lg ">
                    {item.sellingPrice}
                  </span>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default search;
