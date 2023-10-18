import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import BrandCard from "../../components/BrandCard/BrandCard";



const Home = () => {

    const products = useLoaderData();
    return (
    
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto my-20">
            <h2 className="text-3xl font-extrabold text-center pb-12">Our Flagship Brand</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 p-4 md:p-0">
                    {
                        products.map(product => <BrandCard 
                        key={product._id}
                        product={product}
                        ></BrandCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;