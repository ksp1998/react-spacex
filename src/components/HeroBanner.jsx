const HeroBanner = () => {
  return (
    <section className="relative min-h-[calc(100vh-4.32rem)] flex flex-col justify-center lg:justify-start items-center gap-16 p-5 md:p-8 lg:flex-row">
      <div className="lg:my-0 text-center lg:w-1/2 lg:text-start">
        <h1 className="mb-8 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl">
          SpaceX Rocket Program
        </h1>
        <p className="mb-16 font-light text-gray-300 md:text-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          perferendis nulla quisquam at maiores dicta cum in soluta, laborum
          voluptates ipsa earum eum facilis nam temporibus quam, reiciendis
          placeat quidem!
        </p>
        <a
          href="#"
          className="w-max inline-flex items-center bg-black justify-center px-5 py-3 font-medium text-center border border-gray-300 rounded-lg hover:scale-95 duration-300"
        >
          Watch Video
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      {/* <div className="lg:w-1/2 flex justify-center items-center">
        <img
          className="max-w-[min(100%,300px)] lg:max-w-[80%] duration-300"
          src="/images/rocket.webp"
          alt="mockup"
        />
      </div> */}
    </section>
  );
};

export default HeroBanner;
