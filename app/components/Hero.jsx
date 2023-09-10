import React from "react";
import Carousel from "./Carousel";
import Arrivals from "./Arrivals";

function Hero() {
  const images = [
    "https://res.cloudinary.com/dxguqzge7/image/upload/v1682838911/Electronics_lrjvlg.jpg",
    "https://res.cloudinary.com/dxguqzge7/image/upload/v1682838911/Cloth-banner_ylavk9.jpg",
    "https://res.cloudinary.com/dxguqzge7/image/upload/v1682838912/Cloths_kpwmp2.jpg",
  ];

  return (
    <div className="relative px-10 ">
      {/* <Carousel images={images} /> */}
      {/* <div className="absolute top-80 left-80 m-auto bg-primary">
        <span>Welcome</span>
        <p>Enjoy Shopping</p>
        <button>shop now</button>
      </div> */}
      {/* <Arrivals products={products}/> */}
    </div>
  );
}

export default Hero;
