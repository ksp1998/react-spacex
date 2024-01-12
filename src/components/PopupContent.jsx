const PopupContent = ({ children, title, close }) => {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full max-h-full duration-300">
      <div className="absolute top-0 right-0 left-0 w-full h-full bg-black opacity-90"></div>
      <div className="relative m-4 w-full max-w-[min(100%,800px)] overflow-auto">
        <div className="relative bg-gray-700 text-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 md:p-5 border-b">
            <h3 className="text-xl font-semibold">{title}</h3>
            <button
              type="button"
              className=" hover:bg-gray-200 hover:text-gray-950 duration-300 rounded-lg w-8 h-8 inline-flex justify-center items-center"
              onClick={close}
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 14 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PopupContent;
