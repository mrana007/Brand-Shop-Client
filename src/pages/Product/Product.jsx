

const Product = ({product}) => {

    const {name, brand, image, type, price } = product;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure><img className="h-[70vh] w-full" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge bg-blue-600 w-20 p-3 text-white">{brand}</div>
    </h2>
    <h2><span className="text-xl font-semibold">Type:</span> {type}</h2>
    <p><span className="text-xl font-semibold">Price:</span> $ {price}</p>
    <div className="card-actions justify-end">
      <button className="badge badge-outline">Details</button> 
      <button className="badge badge-outline">Update</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;