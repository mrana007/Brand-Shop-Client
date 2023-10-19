import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const {name, brand} =useLoaderData();
    return (
        <div>
            <h2>Product Details of: {name}</h2>
            <h2>Product Details of: {brand}</h2>
        </div>
    );
};

export default ProductDetails;