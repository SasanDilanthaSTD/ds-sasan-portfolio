import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <a
      href={`${import.meta.env.BASE_URL}/CV/Sasan_Dilantha_SE.pdf`}
      download="Sasan_Dilantha_CV.pdf"
      className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
    >
      <span className="block md:hidden">Download</span>
      <span className="hidden md:block">Download My CV</span>
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </a>
  );
};

export default NavbarBtn;
