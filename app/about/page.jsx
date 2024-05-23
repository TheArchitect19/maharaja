
import "swiper/css";
import "swiper/css/effect-coverflow";
import "../pages/swiperStyle.css";
import "swiper/css/pagination";
import { useSidebar } from "../contexts/index.js";
import { baseURL } from '../config';
import axios from "axios"

import AboutPage from './AboutPage'


const aboutSsr = async () => {
  
    try {
      const response = await axios.get(`${baseURL}about`);
      const testimonialData = await axios.get(`${baseURL}testimonial/`)
      const data = response.data;
      const testimonial = testimonialData.data;
      return {data,testimonial}
    } catch (error) {
      console.error("Error fetching data:", error);
      return {}
    }
  };

export default async function Page() {
    const aboutData = await aboutSsr();

    return (
        <AboutPage aboutData={aboutData} />
    )
}