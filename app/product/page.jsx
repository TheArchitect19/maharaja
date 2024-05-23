
import axios from "axios";
import { baseURL } from "../config";
import ProductPage from './ProductPage'



const productSsr = async () => {
  
  try {
    const response = await axios.get(`${baseURL}product`);
    const data = response.data;
    return data
  } catch (error) {
    console.error("Error fetching data:", error);
    return {}
  }
};


export default async function Page() {

  

  const productData = await productSsr();


  return (
    <ProductPage data={productData} />
  );
}