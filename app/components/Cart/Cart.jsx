import React from "react";
const Cart = () => {
  return (
    <>
      <div className="flex bg-primary justify-center items-center gap-2 text-2xl p-4 font-sans text-white ">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          className="fill-white"
        >
          <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
        </svg>{" "}
        <span> MY CART</span>
      </div>
      <div className="flex flex-row bg-white px-20 gap-4 min-h-screen py-8   ">
        <div className="left w-[70%] flex  p-20 flex-col gap-20">
          <div className="item flex flex-row gap-10 h-[200px]  bg-gray ">
            <div className="w-[200px] h=[200px]">
              <img
                src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1550162485-51zKzMIwVDL.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
                alt="asda"
                className=""
              />
            </div>

            <div className="right div flex flex-col justify-between w-[50%] p-2 ">
              <div className="flex flex-col gap-4 font-bold text-lg">
                <span>Name</span>
                <span>$12.00</span>
              </div>

              <div className=" flex justify-between p-4">
                <div className="flex items-center gap-4">
                  <button className=" h-8 rounded items-center flex justify-center aspect-square bg-primary hover:border hover:border-primary hover:bg-transparent active:bg-purple-500">
                    -
                  </button>
                  <span>1</span>
                  <button className=" h-8 rounded items-center flex justify-center aspect-square    bg-primary hover:border hover:border-primary hover:bg-transparent active:bg-purple-500">
                    +
                  </button>
                </div>
                <button className=" h-8 rounded items-center flex justify-center aspect-square   bg-primary hover:border hover:border-primary hover:bg-transparent active:bg-purple-500">
                  <svg
                    className="fill-black"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="right w-[30%] h-max bg-[#f4f4f4] flex p-4 text-black justify-center rounded-lg">
          <div className="bill flex flex-col gap-8 p-10 ">
            <div className="flex flex-row justify-center items-center gap-4 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-8   fill-green-400"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
              <p className="w-[100%]">
                Your order is eligible for FREE Delivery. Select this option at
                checkout.
              </p>
            </div>
            <span className="border "></span>
            <div className="px-4 flex flex-col gap-4">
              <div className="flex justify-between">
                <span className="text-sm">Subtotal( 2 items):</span>
                <span>$65.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Tax:</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Shipping:</span>
                <span>$0.00</span>
              </div>
            </div>
            <span className="border "></span>
            <div className="flex justify-between px-4 font-bold">
              <span>Total :</span>
              <span>$65</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
