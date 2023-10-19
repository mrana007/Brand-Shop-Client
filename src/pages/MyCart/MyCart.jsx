import { useLoaderData } from "react-router-dom";
import ItemCart from "./ItemCart";
import { useState } from "react";


const MyCart = () => {
    const allCartItem = useLoaderData();
    const [carts, setCarts] = useState(allCartItem);
    return (
        <div className="max-w-7xl mx-auto my-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9 p-4 md:px-20">
            {
                carts.map(cart => <ItemCart 
                    key={cart._id} 
                    cart={cart} 
                    carts ={carts}
                    setCarts= {setCarts}
                    ></ItemCart>)
            }
            </div>
        </div>
    );
};

export default MyCart;