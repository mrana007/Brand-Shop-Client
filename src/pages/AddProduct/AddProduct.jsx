import swal from "sweetalert";

const AddProduct = () => {

    const handleAddProduct = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const image = form.image.value;
        const rating = form.rating.value;
        const description = form.description.value;
        
        const newProduct = {name, brand, type, price, image, description, rating};

        console.log(newProduct);

        // send data to the server
        fetch('https://a10-gadgetgrove.vercel.app/products', {
            method: "POST",
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify(newProduct),
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                swal("Good job!", "Product added successfully", "success")
            }
        });
    }

  return (
   <div className="max-w-7xl mx-auto justify-center bg-slate-200 my-20 p-4">
     <div className="  md:p-8">
      <h2 className="text-center text-4xl font-extrabold italic mb-6">Add new Product</h2>
      <form onSubmit={handleAddProduct} className="space-y-6">
        {/* form name and brand row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 md:mr-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="name" required placeholder="Enter name" className="input input-bordered w-full"/>
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="brand" required placeholder="Enter brand name" className="input input-bordered w-full"/>
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
                type="text" name="type" required placeholder="Enter type" className="input input-bordered w-full"/>
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="price" required placeholder="Enter price" className="input input-bordered w-full"/>
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
                type="text" name="image" required placeholder="Enter image URL" className="input input-bordered w-full"/>
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="rating" required placeholder="Enter rating" className="input input-bordered w-full"/>
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
                type="text" name="description" required placeholder="Enter description" className="input input-bordered w-full"/>
            </label>
          </div>
        <input type="submit" value="Add Product" className="btn btn-block" />
      </form>
    </div>
   </div>
  );
};

export default AddProduct;
