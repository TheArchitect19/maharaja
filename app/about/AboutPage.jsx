'use client'

import { LogoBar } from "../Components/LogoBar.jsx";
import { Carousel } from "../Components/Carousel.jsx";
import { useState, useEffect } from "react"
import "swiper/css";
import "swiper/css/effect-coverflow";
import "../pages/swiperStyle.css";
import "swiper/css/pagination";
import { useSidebar } from "../contexts/index.js";
import { baseURL } from '../config';
import axios from "axios"
import { Testimonials } from '../Components/Testimonials'
import Heading from "../Components/Heading.jsx";
import Link from 'next/link'

export default function Page(aboutData) {
    const { sidebarOpen } = useSidebar();

    
    const assets = aboutData.aboutData.data.about_us;
    const topProducts = aboutData.aboutData.data.top_products;
    const testimonial = aboutData.aboutData.testimonial;



    const handleContextMenu = (e) => {
        e.preventDefault(); // Prevent the default context menu from appearing
    };

    const handleDragStart = (e) => {
        e.preventDefault(); // Prevent dragging
    };

    return (
        <div className={`${sidebarOpen ? " blur-lg" : "block"} bg-white px-4 py-2 pb-8 md:px-6`}>
            <LogoBar />
            <p className="text-[0.70rem] lg:text-l text-black uppercase tracking-widest mt-2">Home {'>'} About</p>
            <div className="mt-6 md:mt-8 w-full h-full">
                <img onContextMenu={handleContextMenu} onDragStart={handleDragStart} src={assets?.banner} className='object-cover w-full h-full' alt='banner' />
            </div>

            <div className="w-full mt-4 min-h-[92vh] h-auto flex flex-col justify-center items-center md:mt-8 lg:mt-10 xl:mt-12">
                <div className="w-full md:w-1/2 self-end flex justify-center items-center">
                    <Heading heading="About Us" />
                </div>
                <div className="flex flex-col justify-center items-center lg:flex-row">
                    <div className=' w-[90%] p-2 flex items-center justify-center md:w-1/2 md:p-10 md:pr-6 lg:p-20  lg:pr-10'>
                        <img onContextMenu={handleContextMenu} onDragStart={handleDragStart} src={assets?.about_us_image} alt="about us" width={512} />
                    </div>
                    <div className=' w-full flex flex-col p-2  md:mr-4 justify-center items-center lg:w-1/2 md:p-8 lg:pr-4'>
                        <p className=' text-center text-pColor leading-2 text-sm tracking-wider md:text-md lg:leading-9 md:text-left' >
                            {assets?.about_us}
                        </p>
                    </div>
                </div>
            </div>

            <div className="m-2 mt-12 bg-gray-100 p-4 h-auto md:p-8 lg:p-12 md:m-4 lg:m-6">
                <div className="w-full flex justify-center items-center">
                    <Heading heading="Top products for you" />
                </div>

                <div className="w-full flex flex-col justify-center">
                    <Carousel data={topProducts} />
                    <div className="flex justify-center items-center mt-2">
                        <div className="flex w-full justify-between lg:w-4/5">
                            <Link href="/gallery" className="bg-white p-2 text-sm shadow-lg cursor-pointer text-black uppercase tracking-wider border-2 md:p-3 md:px-5 lg:p-4 lg:px-7 lg:text-md">
                                Lifestyle
                            </Link>
                            <Link href="/product"className="bg-white p-2 text-sm shadow-lg cursor-pointer text-black uppercase tracking-wider border-2 md:p-3 lg:p-4 lg:text-md">
                                View Products
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            <Testimonials data={testimonial}/>

        </div>
    )
}