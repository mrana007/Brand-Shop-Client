import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const { name, brand, type, price, description, image } = useLoaderData();
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
            <div className="md:w-2/3 pt-2 pl-2 ">
              <p>
                Type: <span className="text-lg font-semibold">{type}</span>
              </p>
              <p className="pb-5">
                Price: <span className="text-lg font-semibold">${price}</span> 
              </p>
            </div>
            <Link to={'/cart'}>
              <button className="btn btn-block bg-blue-500 text-white">
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
