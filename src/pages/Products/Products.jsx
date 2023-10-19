import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {

    const products = useLoaderData();
    console.log(products);
    return (
        <div className="max-w-7xl mx-auto my-20">
            <h2>this is brand product</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-9 p-4 md:px-24">
                {
                    products.map((product)=> <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;