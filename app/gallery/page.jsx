
import { baseURL } from "../config.ts";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import { useWishList } from "../contexts/WishListContext.js";
import Heading from '../Components/Heading.jsx';
import GalleryPage from './GalleryPage'




const gallerySsr = async () => {
  
  try {
    const response = await axios.get(`${baseURL}gallery`);
    const data = response.data;
    return data
  } catch (error) {
    console.error("Error fetching data:", error);
    return {}
  }
};

export default async function Page() {
  
  const galleryData = await gallerySsr();
  

  return (
    <GalleryPage galleryData={galleryData} />
  );
}
