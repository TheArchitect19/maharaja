"use client";

import React from "react";
import { LogoBar } from "../Components/LogoBar";
import { useWishList } from "../contexts/WishListContext";
import { useSidebar } from "../contexts/index.js";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./swiperStyle.css";
import { Testimonials } from "../Components/Testimonials";
import { Heading } from "../Components/Heading";
import Image from "next/image";

export const HomePage = (data) => {
  const { sidebarOpen } = useSidebar();
  const { wishListOpen } = useWishList();
  const assets = data?.data.data;
  const category = data?.data.data.category;
  const testimonial = data.data.testimonial;


  const handleContextMenu = (e) => {
    e.preventDefault(); 
  };

  const handleDragStart = (e) => {
    e.preventDefault(); 
  };

  return (
    <div
      className={`${
        sidebarOpen || wishListOpen ? " blur-lg" : "block"
      } bg-white px-4 py-2 pb-8  md:px-6`}
    >
      <LogoBar />
      <div className="mt-6 md:mt-8 min-h-[20vh] md:min-h-[40vh] lg:min-h-[60vh] w-full h-full">
        <Image
          src={assets?.produts?.banner}
          className="object-cover w-full h-full"
          onContextMenu={handleContextMenu}
          onDragStart={handleDragStart}
          width={100}
          height={100}          
        />
      </div>

      {/*WHO ARE WE  */}
      <div className="w-full mt-4 md:mt-8 flex justify-center">
        <div className=" w-full p-2 md:p-0 md:w-10/12 flex flex-col ">
          <Link href="/about">
            <Heading heading="Who are we"/>
          </Link>

          <div className="mt-2 w-[85%] m-auto h-[15vh] md:h-full md:w-full md:mt-4">
            <Image 
              src={assets?.produts?.who_are_we_image}
              className="object-cover w-full h-full"
              alt="whoAreWe"
              onContextMenu={handleContextMenu}
              onDragStart={handleDragStart}
              width={100}
              height={100}
            />
          </div>

          <div className="my-4 px-2 md:my-8 md:px-12">
            <p className=" text-center text-pColor tracking-wide leading-5 md:text-justify md:tracking-widest md:leading-10">
              {assets?.produts?.who_are_we}
            </p>
          </div>
        </div>
      </div>

      {/* Discover Comfort */}
      <div className="w-full bg-e3e3e3 p-4 mt-6 flex justify-center md:mt-12 md:p-8">
        <div className=" w-full p-4 flex flex-col md:w-10/12 md:p-0">
          <Heading heading="Discover Comfort"/>


          <div className=" my-4 px-0 sm:px-4 md:my-8 md:px-12">
            <p className=" text-center text-pColor tracking-wider leading-5 md:leading-10">
              {assets?.produts?.discover_comfort}
            </p>
          </div>

          <div className="flex  gap-4 w-full mt-4 justify-center items-center">
            <div className=" grid grid-cols-2 md:grid-cols-4 items-end justify-between flex-wrap gap-4 md:gap-3 md:w-4/5 md:justify-center">
              {category?.map((obj, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex justify-end items-center flex-col h-auto"
                  >
                    <Link
                      href={`/product/#${obj.category}`}
                      className="transition duration-150 ease-out hover:ease-in hover:cursor-pointer hover:scale-125 h-[60%] w-[60%] md:h-[60%] md:w-[50%]"
                    >
                      <Image 
                        src={obj?.image}
                        alt="heavyDuty"
                        onContextMenu={handleContextMenu}
                        onDragStart={handleDragStart}
                        width={100}
                        height={100}
                      />
                    </Link>
                    <p className="text-center w-full font-normal uppercase tracking-wider text-sm md:text-md">
                      {obj.category}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full flex justify-center items-center my-8 md:my-16 md:mb-8">
            <Link
              href="/product"
              className="flex justify-center items-center rounded-md md:rounded-2xl py-3 w-[90%] md:px-0 bg-gray-50 shadow-inner shadow-gray-600 md:w-1/3"
            >
              <button className="uppercase tracking-wider">
                View Products
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Voice of admiration */}
      <Testimonials data={testimonial}/>
    </div>
  );
};



