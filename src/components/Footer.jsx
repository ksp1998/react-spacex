import Logo from "./Logo";

const menuItems = [
  { text: "Home", href: "#" },
  { text: "Falcon 9", href: "#" },
  { text: "Dragon", href: "#" },
  { text: "Starlink", href: "#" },
];

const Footer = () => {
  return (
    <footer className="rounded-lg shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Logo />
          </a>
          <ul className="flex justify-center flex-wrap items-center gap-2 mb-6 text-sm font-medium text-gray-100 sm:mb-0">
            {menuItems.map((item) => (
              <li key={item.text}>
                <a href={item.href} className="hover:underline me-4 md:me-6">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-6 border-gray-500 sm:mx-auto" />

        <span className="block text-sm text-gray-300 text-center">
          © {new Date().getFullYear()}{" "}
          <a href="#" className="hover:underline">
            SpaceX
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
