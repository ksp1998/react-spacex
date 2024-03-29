import { Logo, SideMenu } from ".";

const Header = () => {
  return (
    <header className="w-full p-4 sm:px-8 flex gap-8 justify-between items-center z-20 duration-300">
      {/* Logo and Title on the left */}
      <div className="flex items-center z-30">
        <a href="#" className="">
          <Logo />
        </a>
      </div>
      <SideMenu />
    </header>
  );
};

export default Header;
