const Banner = () => {
  return (
    <div
      className="hero h-[80vh]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/HG7qt8T/black-friday-sales-elements-assortment-with-copy-space.jpg",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-left w-3/4 px-5">
        <div className="text-neutral-content">
          <h1 className="mb-4 text-5xl font-extrabold">
            Incredible Prices <br /> on All Your <br /> Favorite Items
          </h1>
          <p className="mb-4">Get more for less on selected brands</p>
          <button className="btn rounded-full w-52 bg-blue-200">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
