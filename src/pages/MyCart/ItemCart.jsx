

const ItemCart = ({cart, handleDelete }) => {

    const { _id, name, brand, image, type, price } = cart;
    return (

        <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-56" src={image} alt="Brand" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge bg-blue-600 w-20 p-3 text-white">{brand}</div>
        </h2>
        <h2>
            Type: <span className="text-xl font-semibold">{type}</span>
        </h2>
        <p>
            Price: <span className="text-xl font-semibold">${price}</span>
        </p>
        <div className="card-actions justify-end">
           {/* to={`/product/${_id}`}><Link */}
            <button onClick={() => handleDelete(_id)} className="btn bg-blue-400 text-white">X</button>
          {/* </Link> */}
          
        </div>
      </div>
    </div>

        // <div>
        //     <button onClick={() => handleDelete(_id)}>X</button>
        // </div>
    );
};

export default ItemCart;