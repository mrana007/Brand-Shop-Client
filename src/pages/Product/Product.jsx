import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, brand, image, type, price, rating } = product;

  return (
    <div className="card card-compact bg-base-100 rounded-none border">
      <figure>
        <img className="w-full h-48 p-1" src={image} alt='Brand' />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge bg-blue-600 w-20 p-3 text-white">{brand}</div>
        </h2>
        <p>Rating:<span className="text-xl"> {rating}</span></p>
        <h2>
        Type:<span className="text-xl font-semibold"> {type}</span>
        </h2>
        <p>
        Price:<span className="text-xl font-semibold">${price}</span>
        </p>
        <div className="card-actions justify-between">
          <Link to={`/update/${_id}`}>
            <button className="btn bg-green-600 text-white">Update</button>
          </Link>
          <Link to={`/product/${_id}`}>
            <button className="btn bg-blue-400 text-white">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
