const Subscribe = () => {
  return (
    <div className="mt-20 p-5 md:p-0">
      <div className="max-w-4xl mx-auto pb-12">
      <h2 className="text-3xl font-extrabold text-center">
        Get in Touch
      </h2>
      <p className="p-4 lg:p-0">
      Your feedback and inquiries matter to us! At Gadget<span className="text-blue-500 text-xl font-bold">Grove</span>, we are here to assist you and ensure you have the best experience. Do not hesitate to get in touch if you have questions, comments, or need assistance. We value your input!
      </p>
      </div>
      <div className="md:flex md:gap-26 justify-between items-center bg-blue-200 p-8 md:py-20">
        <div className="md:w-1/2 pb-4">
          <h2 className="text-4xl font-bold pb-4">
            Contact Us for those interested
          </h2>
          <p className="">
            Thank you for your interest in Gadget<span className="text-blue-700 text-2xl font-bold">Grove</span>! We are thrilled to learn
            that <br /> you would like to get in touch with us Whether you have
            questions, <br /> feedback, partnership proposals, or any other
            inquiries, we are here to assist you.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
