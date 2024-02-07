import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <>
      <div className="bg-white">
        <div className=" grid grid-cols-2">
          {/* <!-- Image gallery --> */}
          <div className="lg:grid lg:max-w-2xl lg:grid-cols-1 lg:gap-x-3 lg:px-2">
          <div className="hidden py-2 ml-4 lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:gap-x-3 ">
              <div className="aspect-h-2 aspect-w-3 h-[400px] my-2 overflow-hidden ">
                <img
                  src={product.image}
                  alt="Model wearing plain gray basic tee."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 my-2 aspect-w-3 h-[400px] overflow-hidden ">
                <img
                  src={product.image}
                  alt="Model wearing plain gray basic tee."
                  className="h-full w-full object-cover object-center"
                />
              </div>
               <div className="aspect-h-2 my-2 aspect-w-3 h-[400px] overflow-hidden ">
                <img
                  src={product.image}
                  alt="Model wearing plain gray basic tee."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 my-2 aspect-w-3 h-[400px] overflow-hidden ">
                <img
                  src={product.image}
                  alt="Model wearing plain gray basic tee."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 my-2 aspect-w-3 h-[400px] overflow-hidden ">
                <img
                  src={product.image}
                  alt="Model wearing plain gray basic tee."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-2 my-2 aspect-w-3 h-[400px] overflow-hidden ">
                <img
                  src={product.image}
                  alt="Model wearing plain gray basic tee."
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          {/* <!-- Product info --> */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:max-w-xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-10">
            <div className="lg:col-span-1 lg:border-r lg:border-gray-200 lg:pr-8">
             
            </div>

            {/* <!-- Options --> */}
            <div className="mt-4 lg:row-span-1 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <h1 className="text-xl pb-2 font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
              <div className="flex py-2 items-center">
                <p className="text-xl  tracking-tight text-gray-900">
                 <span className="font-bold"> RS </span> ₹{product.new_price}
                </p>
                <p className="text-xl pl-3 tracking-tight line-through text-gray-900">
                  ₹{product.old_price}
                </p>
              </div>
              <p className="text-green-600 font-bold">inclusive of all taxes</p>

              {/* <!-- Reviews --> */}
              <div className="mt-3  ">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  {/* review star icon */}
                  <div className="flex items-center">
                    <p className="text-lg px-1 border-gray-600 rounded border-2">4.3</p>
                    {/* <!-- Active: "text-gray-900", Default: "text-gray-200" --> */}
                    <svg
                      className="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      className="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      className="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      className="text-gray-900 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <svg
                      className="text-gray-200 h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="sr-only">4 out of 5 stars</p>
                  <a href="#" className="ml-3 border-2 p- text-sm font-medium text-grey-500">
                    117 reviews
                  </a>
                </div>
              </div>

              
                <div className="mt-10">

                  <button onClick={()=>{addToCart(product.id)}}
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-slate-600 hover:bg-pink-500 px-8 py-3 text-base font-medium text-white "
                >
                  Add to bag
                </button>
                  {/* <fieldset className="mt-4">
                    <legend className="sr-only">Choose a size</legend>
                    <div className="grid grid-cols-6 gap-2 sm:grid-cols-3  lg:grid-cols-6">
 

                      <label className="group relative flex items-center justify-center rounded-md border py-2 px-2 text-sm font-medium uppercase hover:bg-pink-500 hover:text-white focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                        <input
                          type="radio"
                          name="size-choice"
                          value="S"
                          className="sr-only"
                          aria-labelledby="size-choice-1-label"
                        />
                        <span id="size-choice-1-label">S</span>
                    
                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>
                   
                      <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-pink-500 hover:text-white focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                        <input
                          type="radio"
                          name="size-choice"
                          value="M"
                          className="sr-only"
                          aria-labelledby="size-choice-2-label"
                        />
                        <span id="size-choice-2-label">M</span>
                    
                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>
                  
                      <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-pink-500 hover:text-white focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                        <input
                          type="radio"
                          name="size-choice"
                          value="L"
                          className="sr-only"
                          aria-labelledby="size-choice-3-label"
                        />
                        <span id="size-choice-3-label">L</span>
              
                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>
                     
                      <label className="group relative flex items-center  justify-center rounded-md border py-2 px-2 text-sm font-medium uppercase  hover:bg-pink-500 hover:text-white focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                        <input
                          type="radio"
                          name="size-choice"
                          value="XL"
                          className="sr-only"
                          aria-labelledby="size-choice-4-label"
                        />
                        <span id="size-choice-4-label">XL</span>
                    
                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>
                    
                      <label className="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase  hover:bg-pink-500 hover:text-white focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
                        <input
                          type="radio"
                          name="size-choice"
                          value="XXL"
                          className="sr-only"
                          aria-labelledby="size-choice-5-label"
                        />
                        <span id="size-choice-5-label">XXL</span>
               
                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      </label>
                    </div>
                  </fieldset> */}
                  <div className="mt-5 ml-4">
                <h3 className="text-base font-bold text-gray-900">Highlights</h3>
                <div className="">
                  <ul role="list" className="list-disc space-y-2 py-2 pl-4 text-base">
                    <li className="text-black">
                      <span className="black ">
                        Hand cut and sewn locally
                      </span>
                    </li>
                    <li className="black">
                      <span className="black">
                        Dyed with our proprietary colors
                      </span>
                    </li>
                    <li className="black">
                      <span className="black">
                        Pre-washed &amp; pre-shrunk
                      </span>
                    </li>
                    <li className="black">
                      <span className="black">Ultra-soft 100% cotton</span>
                    </li>
                  </ul>
                </div>
               
              </div>

                  <div className="p-2 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-2">
              <div className="mt-5">
                <h2 className="text-base font-bold text-gray-900">PRODUCT DETAIL</h2>

                <div className="my-1 space-y-6">
                  <p>
                  Black solid faux leather jacket, has a mock collar, two pockets, zip closure, long sleeves, straight hem, polyester lining
                  </p>
                </div>
                <h2 className="text-base mt-3 font-bold my-1 text-gray-900">Size & Fit</h2>
                <div className="my-1">
                  <p>
                  The model (height 6') is wearing a size M
                  </p>
                </div>
                <h2 className="text-base mt-3 font-bold  text-gray-900">Material & Care</h2>
                <div className="my-1 flex flex-col">
                  <p>
                 PU
                  </p>
                  <p>
                  Machine-wash
                  </p>
                </div>
                <h2 className="text-base mt-3 font-bold my-1 text-gray-900">Specifications</h2>
                <div className="my-1">
                  <p className=" text-xs py-1 text-gray-700">
                  Sleeve Length
                  </p>
                  <p>
                    Long Sleeves
                  </p>
                  <hr className="h-0.5  w-[23%] bg-gray-400 " />
                </div>
                <div className="my-1">
                  <p className="text-xs py-1 text-gray-700">
                  Collar
                  </p>
                  <p>
                    Mock Collar
                  </p>
                  <hr className="h-0.5 w-[23%] bg-gray-400" />
                </div>
                <div className="my-1">
                  <p className="text-xs py-1 text-gray-700">
                  Length
                  </p>
                  <p>
                    Regular
                  </p>
                  <hr className="h-0.5 w-[23%] bg-gray-400" />
                </div>
                <div className="my-1">
                  <p className="text-xs py-1 text-gray-700">
                 Lining Fabric
                  </p>
                  <p>
                    Polyester  
                  </p>
                  <hr className="h-0.5 w-[23%] bg-gray-400" />
                </div>
              </div>
            </div>
                </div>
            </div>      
          </div>
        </div>   
      </div>
    </>
  );
};

export default ProductDisplay;
