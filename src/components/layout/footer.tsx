import icon from "@/assets/img/header/footer_icon.png";
const Footer = () => {
  return (
    <div className="px-16 py-12 bg-blue">
      <div className="w-[168px] h-[30px]">
        <img src={icon} alt="" />
      </div>
      <p className="text-sm text-white mt-10 font-georgia">Tel: (852) 31664550</p>
      <p className="text-sm text-white mt-6 font-georgia">Main Office: Suite 3915-17, Jardine House, 1 Connaught Place, Central, Hong Kong</p>
      <p className="text-sm text-white mt-12">© 2024 FutureX. All rights reserved.</p>
    </div>
  );
};
export default Footer;
