import { Link } from "react-router-dom";

const BrandCard = ({ product }) => {
  const { image, brand } = product;

  return (
    <Link to={`/products/${brand}`}>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-80" src={image} alt="Brand" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
        </div>
      </div>
    </Link>
  );
};

export default BrandCard;
