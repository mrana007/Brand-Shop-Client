import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import Advertisement from "../../components/Advertisement/Advertisement";


const Products = () => {

    const products = useLoaderData();
    console.log(products);
    return (
        <div className="max-w-7xl mx-auto mb-12">
            <div className="max-w-5xl mx-auto">
                <Advertisement></Advertisement>
            </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-9 p-4 md:px-24">
                {
                    products.map((product)=> <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;