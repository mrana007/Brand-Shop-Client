const AddProduct = () => {

    const handleAddProduct = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const image = form.image.value;
        const description = form.description.value;
        const newProduct = {name, brand, type, price, image, description};
        console.log(newProduct);
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
                type="text" name="name" placeholder="Enter name" className="input input-bordered w-full"/>
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="brand" placeholder="Enter brand name" className="input input-bordered w-full"/>
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
                type="text" name="type" placeholder="Enter type" className="input input-bordered w-full"/>
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="price" placeholder="Enter price" className="input input-bordered w-full"/>
            </label>
          </div>
        </div>
        {/* form image and description row */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 md:mr-4">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="image" placeholder="Enter image URL" className="input input-bordered w-full"/>
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text" name="description" placeholder="Enter description" className="input input-bordered w-full"/>
            </label>
          </div>
        </div>
        <input type="submit" value="Add Product" className="btn btn-block" />
      </form>
    </div>
   </div>
  );
};

export default AddProduct;
