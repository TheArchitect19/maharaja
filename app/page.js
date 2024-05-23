import { HomePage } from './pages/HomePage.jsx';
import { ThemeProvider} from './contexts/index.js'
import './globals.css'
import axios from "axios";
import { baseURL } from './config';


const homeSsr = async () => {
  
  try {
    const response = await axios.get(`${baseURL}home`);
    const testimonialData = await axios.get(`${baseURL}testimonial/`)
    const data = response.data;
    const testimonial = testimonialData.data;
    return {data,testimonial}
  } catch (error) {
    console.error("Error fetching data:", error);
    return {}
  }
};


export default async function Home() {
  const homeData = await homeSsr();
  return (    
      
          <HomePage  data={homeData}/>
      
  )
}
