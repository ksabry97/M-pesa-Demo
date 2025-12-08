import HeaderMain from "./HeaderMain";
import HeaderSubNav from "./HeaderSubNav";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 shadow-[0px_28px_104px_0px_rgba(0,17,238,0.06)] backdrop-blur-[31px]">
      <HeaderMain />
      <HeaderSubNav />
    </header>
  );
};

export default Header;
