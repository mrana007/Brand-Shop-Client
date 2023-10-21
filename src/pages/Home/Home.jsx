import {  useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import BrandCard from "../../components/BrandCard/BrandCard";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import Subscribe from "../../components/Subscribe/Subscribe";


const Home = () => {

    const brands = useLoaderData();
    return (
    
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto my-12 md:my-20">
                <div className="py-8 md:py-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-extrabold text-center ">Our Authorized Brand</h2>
                <p className="p-4 lg:p-0">Get ready to embark on a thrilling journey through the world of innovation and excellence at Gadget<span className="text-blue-500 text-xl font-bold">Grove</span>! We are absolutely delighted to introduce you to our authorized brands. It is time to elevate your lifestyle, one product at a time! From state-of-the-art tech gadgets to lifestyle essentials, our authorized brands bring you nothing but the best.</p>
                </div>
           
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 p-4 lg:p-0">
                    {
                        brands.map(brand => <BrandCard 
                        key={brand._id}
                        product={brand}
                        ></BrandCard>)
                    }
                </div>
            </div>
            <PopularProducts></PopularProducts>
            <Subscribe />
        </div>
    );
};

export default Home;