import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const ProductDetails = () => {

    const { _id, name, brand, type, price, description, image } = useLoaderData();

    const cartItem = {name, brand, type, price, image, description};

    const handleAddToCart = () =>{
        fetch('http://localhost:5000/carts', {
            method: "POST",
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify(cartItem),
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                swal("Wow!", "Product add to Cart successfully", "success")
            }
        });       
    }

  return (
    <div className=" max-w-7xl mx-auto">
      <div className="px-6">
        <div className="relative">
          <div className="mb-6">
            <div className="flex justify-center py-8">
              <h2 className="card-title">
                {name}
                <p className="badge bg-blue-600 p-3 text-white">{brand}</p>
              </h2>
            </div>
            <img
              className="hero h-[50vh] w-[50vh] mx-auto rounded-md pb-4"
              src={image}
              alt=""
            />
            <p className="text-center md:w-2/3 mx-auto">{description}</p>
          </div>
          <div className="md:w-2/3 mx-auto text-center border mb-8">
            <div className="md:w-2/3 pt-2 pl-12 ">
              <p>
                Type: <span className="text-lg font-semibold">{type}</span>
              </p>
              <p className="pb-5">
                Price: <span className="text-lg font-semibold">${price}</span> 
              </p>
            </div>
              <button onClick={() =>handleAddToCart(_id)} className="btn btn-block bg-blue-500 text-white">
                Add to Cart
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
