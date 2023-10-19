import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, brand, image, type, price } = product;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-96" src={image} alt="Brand" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge bg-blue-600 w-20 p-3 text-white">{brand}</div>
        </h2>
        <h2>
          <span className="text-xl font-semibold">Type:</span> {type}
        </h2>
        <p>
          <span className="text-xl font-semibold">Price:</span> $ {price}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/product/${_id}`}>
            <button className="btn bg-blue-400 text-white">Details</button>
          </Link>
          <Link to={`/update/${_id}`}>
            <button className="btn bg-blue-400 text-white">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
