const BrandCard = ({product}) => {

    const {image, brand} = product;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-80"
          src={image}
          alt="Brand"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{brand}</h2>
      </div>
    </div>
  );
};

export default BrandCard;
