import { NavLink } from "react-router-dom";
import logoImg from "@/assets/img/header/logo.png";
import menuImg from "@/assets/img/header/menu.png";
import closeImg from "@/assets/img/header/close.png";
import { useIsMoile } from "@/hooks/index";
import { useState } from "react";

const navList = [
  {
    path: "./home",
    name: "Home",
  },
  {
    path: "./portfolio",
    name: "Portfolio",
  },
  {
    path: "./network",
    name: "Network",
  },
  {
    path: "./team",
    name: "Team",
  },
  {
    path: "./voice",
    name: "Voice",
  },
];

const Layout: React.VFC = () => {
  const isMobile = useIsMoile();
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      className={[
        "flex",
        "justify-between",
        "px-16",
        "h-[120px] ",
        "leading-[120px] ",
        "items-center",
        "relative",
        isShow ? "bg-blueBg" : " ",
      ].join(" ")}
    >
      <div className="w-[15rem] h-14">
        <img src={logoImg} />
      </div>
      {!isMobile && (
        <div className="flex p-3" id="nav">
          {navList.map((item) => {
            return (
              <div className="text-2xl  font-proximanova pl-[30px] cursor-pointer">
                <NavLink to={item.path} key={item.path} className="relative">
                  {item.name}
                  <div className="h-[2px] bg-black select absolute -bottom-1 left-auto"></div>
                </NavLink>
              </div>
            );
          })}
        </div>
      )}
      {isMobile && (
        <div>
          {!isShow && (
            <div
              className="w-[54px] h-[45px] cursor-pointer rotate-center "
              onClick={() => {
                setIsShow(true);
              }}
            >
              <img src={menuImg} />
            </div>
          )}
          {isShow && (
            <div
              className="w-[54px] h-[45px] cursor-pointer rotate-center-revese "
              onClick={() => {
                setIsShow(false);
              }}
            >
              <img src={closeImg} />
            </div>
          )}
        </div>
      )}
      {isShow && isMobile && (
        <div className="absolute top-[120px] w-[100vw] bg-blueBg right-0 width-show">
          {navList.map((item, index) => {
            return (
              <NavLink to={item.path} key={item.path}>
                <div className=" text-4xl text-blue flex items-stretch pl-4">
                  <div className="text-xl pr-4 self-start ">
                    {"0" + (index + 1)}
                  </div>
                  <div>{item.name}</div>
                </div>
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Layout;
/*  */
