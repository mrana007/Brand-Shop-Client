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
            <div className="max-w-7xl mx-auto my-20">
            <h2 className="text-3xl font-extrabold text-center pt-20 md:pt-0 md:py-12">Our Authorized Brand</h2>
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