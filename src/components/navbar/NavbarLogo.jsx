const NavbarLogo = () => {
  return (
    <div>
      <h1 className="text-white  text-2xl sm:hidden md:block">
        {/* Sasan Dilantha */}
        <img
        src="../../public//a-icon.svg"
        alt="DS Logo"
        className="max-h-[80px] w-auto" />
      </h1>
      <h1 className="text-white font-special font-extrabold text-4xl md:hidden sm:block">
        <img
        src="../../public//a-icon.svg"
        alt="DS Logo"
        className="max-h-[50px] w-auto" />
      </h1>
    </div>
  );
};

export default NavbarLogo;
