import ItemCart from "./ItemCart";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const MyCart = () => {
    const [carts, setCarts] = useState([]);

    const {user, loading} = useContext(AuthContext);

    const userEmail = user.email;

    useEffect(() => {
        if (!loading) {
            fetch(`https://a10-gadgetgrove.vercel.app/carts/${userEmail}`)
                .then(res => res.json())
                .then(data => setCarts(data))
        }
    }, [user])

    return (
        <div className="max-w-7xl mx-auto my-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9 p-4 md:px-20">
            {
                carts?.map(cart => <ItemCart 
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