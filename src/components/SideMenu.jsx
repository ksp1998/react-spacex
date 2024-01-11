import { useState } from "react";

const menuItems = [
  { text: "Home", href: "#" },
  { text: "Falcon 9", href: "#" },
  { text: "Dragon", href: "#" },
  { text: "Starlink", href: "#" },
];

const SideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSidebar = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Menu open/close icons */}
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="scale-150 focus:outline-none z-30"
        >
          <svg
            className="h-6 w-6 duration-300"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              className="duration-300"
              d={`${
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
              }`}
            ></path>
          </svg>
        </button>
      </div>

      {/* Menu Slider */}
      <nav
        className={`fixed top-0 right-0 h-full w-[min(100%,450px)] bg-gray-600 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-[min(100%,450px)]"
        } transition-transform duration-300 ease-in-out z-20 overflow-hidden`}
      >
        {/* Memu Items */}
        <div className="h-full flex flex-col justify-center pt-24">
          {menuItems.map((item) => (
            <a
              key={item.text}
              href={item.href}
              className="w-full text-gray-950 text-center font-bold duration-300 p-5 text-5xl hover:scale-125 hover:text-white"
              onClick={toggleSidebar}
            >
              {item.text}
            </a>
          ))}
          {/* Spacer to align menu items */}
          <div className="py-24"></div>
        </div>
      </nav>
    </>
  );
};

export default SideMenu;
