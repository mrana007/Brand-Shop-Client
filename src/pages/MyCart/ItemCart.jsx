import { AiOutlineDelete } from "react-icons/ai";
import swal from "sweetalert";

const ItemCart = ({ cart, carts, setCarts }) => {

    const { _id, name, brand, image, type, price } = cart;
  
    const handleDelete = id =>{
        console.log(id);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {

                fetch(`http://localhost:5000/carts/${_id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data);
                    if(data.deletedCount > 0 ){
                        swal("Poof! Your product has been deleted!", {
                            icon: "success",
                          })
                          const remaining = carts.filter(ca => ca._id !==id)
                          setCarts(remaining);
                        }
                      });
                    }
                })             
    }
   
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
            <button onClick={() => handleDelete(_id)}> <AiOutlineDelete className="text-3xl font-extrabold text-red-600"></AiOutlineDelete> </button>
          
        </div>
      </div>
    </div>
    );
};

export default ItemCart;