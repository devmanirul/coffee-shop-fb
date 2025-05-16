import logo1 from "../../../assets/images/more/logo1.png";
import headerBg from "../../../assets/images/more/15.jpg";

const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${headerBg})` }}
      className="flex flex-row items-center justify-center gap-4"
    >
      <div className="">
        <img src={logo1} alt="" className="w-[75px] h-[90px]" />
      </div>
      <div className="">
        <h1 className="font-rancho text-6xl font-normal text-white">
          Espresso Emporium
        </h1>
      </div>
    </div>
  );
};
export default Header;
