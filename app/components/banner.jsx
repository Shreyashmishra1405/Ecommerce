import Link from "next/link";
import React from "react";
function Banner() {
  return (
    <>
      <div className="flex justify-around bg-primary text-white py-2 font-[300]">
        <span>Support (91) 9135627286</span>
        <span>Free US shipping an all orders $100+ <Link className="underline underline-offset-2 decoration-1" href="/Learn">Learn More</Link></span>
        <div className="flex justify-between gap-3">
          <span>Shipping</span>
          <span>FAQ</span>
          <span>Contact</span>
        </div>
      </div>
    </>
  );
}
export default Banner;
