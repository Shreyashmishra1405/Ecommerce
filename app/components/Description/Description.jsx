"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { useSearchParams } from "next/navigation";
function Description() {
  const searchParams = useSearchParams();
  const [qty, setQuty] = useState(1);
  const [data, setData] = useState(null);
  const id = searchParams.get("id");
  const handleinc = () => {
    return setQuty((prev) => prev + 1);
  };
  const handledec = () => {
    return setQuty((prev) => {
      if (prev > 1) {
        prev = prev - 1;
      }
      return prev;
    });
  };

  const getdata = async () => {
    const res = await fetch(
      `https://3551-27-4-149-117.ngrok-free.app/getbyid?id=${searchParams.get(
        "id"
      )}`
    );
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    (async function () {
      let result = await getdata();
      setData(result);
    })();
  }, [id]);

  return (
    <>
      {data && (
        <div className="description page bg-gray-900  text-white">
          <Navbar />
          <div className="parent flex flew-row justify-between  mt-5 px-20   ">
            <div className="left flex w-[60%] p-10 flex-col">
              <div className="w-full flex ">
                <img
                  className="object-contain aspect-auto rounded w-full max-h-[70vh]"
                  src={data.image}
                  alt=""
                />
              </div>
              <div className="flex  gap-10 mt-5 mb-5 text-lg ">
                <span className="cursor-pointer decoration-1  hover:underline hover:underline-offset-8">
                  Description
                </span>
                <span className="cursor-pointer decoration-1 hover:underline hover:underline-offset-8">
                  Size & Fit
                </span>
                <span className="cursor-pointer decoration-1 hover:underline hover:underline-offset-8">
                  Shipping & Return
                </span>
              </div>
              <p className="text-sm">{data.aboutProduct}</p>
              <div className="mt-5 flex flex-col justify-start gap-1">
                {/* <div className="flex items-center gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    className="fill-white"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 
                12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160
                 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                  <span>100% cot</span>
                </div>
                <div className="flex items-center gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    className="fill-white"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 
                12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160
                 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                  <span>Made in India</span>
                </div>
                <div className="flex items-center gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    className="fill-white"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 
                12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160
                 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                  <span>Breathable cotton pique</span>
                </div>
                <div className="flex items-center gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    className="fill-white"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 
                12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160
                 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                  <span>Rib Knit Crewneck</span>
                </div> */}
              </div>
            </div>
            <div className="right w-[40%] p-10 flex flex-col gap-8">
              <span className="text-primary">{data.category}</span>
              <p className="font-bold text-lg ">{data.productName}</p>
              <div className="price flex justify-between  ">
                <div className="flex gap-10">
                  {data.listPrice && <span>{data.listPrice}</span>}
                  <span>{data.sellingPrice}</span>
                </div>
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" className="fill-green-500" viewBox="0 0 512 512">
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>In stock</span>
              </div>
              <div className="color">
                <span>Color (color)</span>
                <div className="flex gap-4">
                  <button className="p-4 bg-white rounded-full  cursor-pointer"></button>
                  <button className="p-4 bg-primary rounded-full  cursor-pointer"></button>
                  <button className="p-4 bg-slate-800 rounded-full  cursor-pointer"></button>
                </div>
              </div>
              <div className="size ">
                <div className="flex justify-between">
                  <span>Size </span>
                  <a
                    href="https://www2.hm.com/en_in/customer-service/sizeguide/men.html"
                    className="text-primary  underline text-sm"
                  >
                    Size Guide
                  </a>
                </div>
                <div className="sizes grid grid-cols-4  gap-2 justify-between  ">
                  <div className="border p-1 flex justify-center uppercase cursor-pointer active:bg-primary hover:border-primary">
                    xs
                  </div>
                  <div className="border p-1 flex justify-center uppercase cursor-pointer clicked active:bg-primary hover:border-primary">
                    s
                  </div>
                  <div className="border p-1 flex justify-center uppercase cursor-pointer active:bg-primary hover:border-primary">
                    md
                  </div>
                  <div className="border p-1 flex justify-center uppercase cursor-pointer active:bg-primary hover:border-primary">
                    lg
                  </div>
                  <div className="border p-1 flex justify-center uppercase cursor-pointer active:bg-primary hover:border-primary">
                    xl
                  </div>
                  <div className="border p-1 flex justify-center uppercase cursor-pointer active:bg-primary hover:border-primary">
                    md
                  </div>
                  <div className="border p-1 flex justify-center uppercase cursor-pointer active:bg-primary hover:border-primary">
                    lg
                  </div>
                  <div className="border p-1 flex justify-center uppercase cursor-pointer active:bg-primary hover:border-primary">
                    2xl
                  </div>
                </div>
              </div>
              <div className="quantity flex justify-between">
                <span>Quantity</span>
                <div className="gap-4 flex items-center">
                  <button
                    className="bg-primary h-8 rounded items-center flex justify-center aspect-square hover:bg-purple-500"
                    onClick={handledec}
                  >
                    -
                  </button>
                  <span>{qty}</span>
                  <button
                    className="bg-primary h-8 rounded items-center flex justify-center aspect-square hover:bg-purple-500"
                    onClick={handleinc}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="add w-full flex flex-row  justify-center mt-2">
                <button className=" p-2  rounded  cursor-pointer bg-primary w-full  hover:bg-purple-500 active:scale-[0.98]">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Description;
