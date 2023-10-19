import { useLoaderData } from "react-router-dom";
import ItemCart from "./ItemCart";


const MyCart = () => {
    const allCartItem = useLoaderData()
    const handleDelete = (id) =>{
        console.log(id);

    }
    return (
        <div className="max-w-7xl mx-auto my-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9 p-4 md:px-20">
            {
                allCartItem.map(cart => <ItemCart key={cart._id} cart={cart} handleDelete ={handleDelete} ></ItemCart>)
            }
            </div>
        </div>
    );
};

export default MyCart;