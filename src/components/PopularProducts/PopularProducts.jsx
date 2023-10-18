import {
  AiOutlineShoppingCart,
  AiOutlinePlusCircle,
  AiOutlineHeart,
  AiOutlineReload,
} from "react-icons/ai";

const PopularProducts = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h2 className="text-3xl font-extrabold text-center pb-12">
        Popular Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 p-4 md:p-0 gap-5 md:gap-12">
        {/* first card */}
        <div className="card card-compact bg-base-100 border border-slate-600 rounded-none">
          <figure>
            <img
              src="https://i.ibb.co/g4v8XyF/apple-magic-mouse.jpg"
              alt="apple"
              className="h-80 w-full"
            />
          </figure>
          <div className="flex justify-between p-7">
            <AiOutlineShoppingCart className="text-3xl"></AiOutlineShoppingCart>
            <AiOutlinePlusCircle className="text-3xl"></AiOutlinePlusCircle>
            <AiOutlineHeart className="text-3xl"></AiOutlineHeart>
            <AiOutlineReload className="text-3xl"></AiOutlineReload>
          </div>
          <div className="rating rating-sm pl-6">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
            </div>
          <div className="card-body">
            <h2 className="card-title">Apple Magic Mouse</h2>
            <p>$ 40.99</p>
            <p>Get up to 10% off Today Only!</p>
          </div>
        </div>
        {/* second card */}
        <div className="card card-compact bg-base-100 border border-slate-600 rounded-none">
          <figure>
            <img
              src="https://i.ibb.co/G5M28bV/airpod.jpg"
              alt="apple"
              className="h-80 w-full"
            />
          </figure>
          <div className="flex justify-between p-7">
            <AiOutlineShoppingCart className="text-3xl"></AiOutlineShoppingCart>
            <AiOutlinePlusCircle className="text-3xl"></AiOutlinePlusCircle>
            <AiOutlineHeart className="text-3xl"></AiOutlineHeart>
            <AiOutlineReload className="text-3xl"></AiOutlineReload>
          </div>
          <div className="rating rating-sm pl-6">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
            </div>
          <div className="card-body">
            <h2 className="card-title">Apple Ipod</h2>
            <p>$ 15.99</p>
            <p>Get up to 7% off Today Only!</p>
          </div>
        </div>
        {/* third card */}
        <div className="card card-compact bg-base-100 border border-slate-600 rounded-none">
          <figure>
            <img
              src="https://i.ibb.co/DC1q5yS/galaxy-s23.jpg"
              alt="samsung"
              className="h-80 w-full"
            />
          </figure>
          <div className="flex justify-between p-7">
            <AiOutlineShoppingCart className="text-3xl"></AiOutlineShoppingCart>
            <AiOutlinePlusCircle className="text-3xl"></AiOutlinePlusCircle>
            <AiOutlineHeart className="text-3xl"></AiOutlineHeart>
            <AiOutlineReload className="text-3xl"></AiOutlineReload>
          </div>
          <div className="rating rating-sm pl-6">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
            </div>
          <div className="card-body">
            <h2 className="card-title">Samsung Galaxy S23</h2>
            <p>$ 210.99</p>
            <p>Get up to 10% off Today Only!</p>
            
          </div>
        </div>
        {/* fourth card */}
        <div className="card card-compact bg-base-100 border border-slate-600 rounded-none">
          <figure>
            <img
              src="https://i.ibb.co/m8pWsnQ/sony-camera.jpg"
              alt="Sony"
              className="h-80 w-full"
            />
          </figure>
          <div className="flex justify-between p-7">
            <AiOutlineShoppingCart className="text-3xl"></AiOutlineShoppingCart>
            <AiOutlinePlusCircle className="text-3xl"></AiOutlinePlusCircle>
            <AiOutlineHeart className="text-3xl"></AiOutlineHeart>
            <AiOutlineReload className="text-3xl"></AiOutlineReload>
          </div>
          <div className="rating rating-sm pl-6">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
            </div>
          <div className="card-body">
            <h2 className="card-title">Sony A7 IV</h2>
            <p>$ 140.99</p>
            <p>Get up to 12% off Today Only!</p>
          </div>
        </div>

        {/* fifth card */}
        <div className="card card-compact bg-base-100 border border-slate-600 rounded-none">
          <figure>
            <img
              src="https://i.ibb.co/d7rw11G/xiaomi-speaker.jpg"
              alt="xiaomi"
              className="h-80 w-full"
            />
          </figure>
          <div className="flex justify-between p-7">
            <AiOutlineShoppingCart className="text-3xl"></AiOutlineShoppingCart>
            <AiOutlinePlusCircle className="text-3xl"></AiOutlinePlusCircle>
            <AiOutlineHeart className="text-3xl"></AiOutlineHeart>
            <AiOutlineReload className="text-3xl"></AiOutlineReload>
          </div>
          <div className="rating rating-sm pl-6">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
            </div>
          <div className="card-body">
            <h2 className="card-title">Mi Pocket Speaker 2</h2>
            <p>$ 40.99</p>
            <p>Get up to 10% off Today Only!</p>
          </div>
        </div>
        {/* sixth card */}
        <div className="card card-compact bg-base-100 border border-slate-600 rounded-none">
          <figure>
            <img
              src="https://i.ibb.co/McjWnyP/google-pixel-8-blue-white.webp"
              alt="pixel"
              className="h-80 w-full"
            />
          </figure>
          <div className="flex justify-between p-7">
            <AiOutlineShoppingCart className="text-3xl"></AiOutlineShoppingCart>
            <AiOutlinePlusCircle className="text-3xl"></AiOutlinePlusCircle>
            <AiOutlineHeart className="text-3xl"></AiOutlineHeart>
            <AiOutlineReload className="text-3xl"></AiOutlineReload>
          </div>
          <div className="rating rating-sm pl-6">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-red-400"
              />
            </div>
          <div className="card-body">
            <h2 className="card-title">Pixel 8 Pro</h2>
            <p>$ 230.99</p>
            <p>Get up to 5% off Today Only!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
