import icon from "@/assets/img/header/footer_icon.png";
const Footer = () => {
  return (
    <div className=" bg-blue">
      <div className="main py-12">
        <div className="w-[10.5rem] h-[1.875rem]">
          <img src={icon} alt="" />
        </div>
        <p className="text-sm text-white mt-10 font-georgia">
          Tel: (852) 31664550
        </p>
        <p className="text-sm text-white mt-6 font-georgia">
          Main Office: Suite 3915-17, Jardine House, 1 Connaught Place, Central,
          Hong Kong
        </p>
        <p className="text-sm text-white mt-12">
          © 2024 FutureX. All rights reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
