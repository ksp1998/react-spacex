import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Popup from "reactjs-popup";
import { PopupContent } from "./";

const Card = ({ item, title, description, image, tag, popupContent }) => {
  return (
    <div className="group bg-gray-800 rounded-xl overflow-hidden min-w-full md:min-w-[calc(100%/2-16px)] w-full md:w-[calc(100%/2-16px)]">
      <div className="cursor-pointer">
        <div className="relative">
          <div className="overflow-hidden aspect-[5/3]">
            <LazyLoadImage
              wrapperClassName={`w-full bg-gray-900 aspect-[5/3] ${
                title ? "" : "animate-pulse"
              }`}
              className="rounded-lg group-hover:scale-110 duration-300 transition-[all!important] object-cover"
              src={image}
              alt=""
              placeholderSrc="/logo.svg"
              effect="blur"
            />
          </div>

          <div className="absolute top-2 left-2 end-2">
            <div className="w-max min-w-24 px-2 py-0.5 text-sm md:text-base bg-gray-950 rounded-md">
              {tag || <div className="min-h-6 animate-pulse"></div>}
            </div>
          </div>

          <div
            className="absolute left-0 top-0 bottom-0 end-0 flex flex-col gap-4 p-8 justify-end items-end"
            style={{
              background: "linear-gradient(#00000000,#000000AA, #000)",
            }}
          >
            <h3 className="w-full text-3xl lg:text-4xl font-bold text-end">
              {title || (
                <div className="min-h-10 bg-gray-800 rounded-lg animate-pulse"></div>
              )}
            </h3>
            <p className="w-full line-clamp-2 text-ellipsis text-base lg:text-lg text-end">
              {description}
              {typeof description === "undefined" && (
                <span className="block min-h-10 bg-gray-800 rounded-lg animate-pulse"></span>
              )}
            </p>
            {title && (
              <Popup
                trigger={
                  <button className="w-max text-sm inline-flex items-center justify-center pt-3 font-medium hover:translate-x-2 duration-300">
                    Learn More
                    <svg
                      className="w-5 h-5 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                    </svg>
                  </button>
                }
                modal
              >
                {(close) => (
                  <PopupContent close={close} title={title} item={item}>
                    {popupContent}
                  </PopupContent>
                )}
              </Popup>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
