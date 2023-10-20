import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const UpdateProduct = () => {

    const update = useLoaderData();
    const {_id, name, brand, type, price, image, description, rating} = update;

    const handleUpdateProduct = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const image = form.image.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const updateProduct = {name, brand, type, price, image, description, rating};

        console.log(updateProduct);

        // send data to the server
        fetch(`https://a10-gadgetgrove.vercel.app/product/${_id}`, {
            method: "PUT",
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify(updateProduct),
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount >0){
                swal("Good job!", "Product updated successfully", "success")
            }
        });
    }

    return (
        <div className="max-w-7xl mx-auto justify-center bg-slate-200 my-20 p-4">
     <div className="  md:p-8">
      <h2 className="text-center text-4xl font-extrabold italic mb-6">Update Product</h2>
      <form onSubmit={handleUpdateProduct} className="space-y-6">
        {/* form name and brand row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 md:mr-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="name" defaultValue={name} placeholder="Enter name" className="input input-bordered w-full"/>
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="brand" defaultValue={brand} placeholder="Enter brand name" className="input input-bordered w-full"/>
            </label>
          </div>
        </div>
        {/* form type and price row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 md:mr-4">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="type" defaultValue={type} placeholder="Enter type" className="input input-bordered w-full"/>
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="price" defaultValue={price} placeholder="Enter price" className="input input-bordered w-full"/>
            </label>
          </div>
        </div>
        {/* form image and rating row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 md:mr-4">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="image" defaultValue={image} placeholder="Enter image URL" className="input input-bordered w-full"/>
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="rating" defaultValue={rating} placeholder="Enter description" className="input input-bordered w-full"/>
            </label>
          </div>
        </div>
        {/* description row */}
        <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="description" defaultValue={description} placeholder="Enter description" className="input input-bordered w-full"/>
            </label>
          </div>
        <input type="submit" value="Update Product" className="btn btn-block" />
      </form>
    </div>
   </div>
    );
};

export default UpdateProduct;