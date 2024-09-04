import { NavLink } from "react-router-dom";
import logoImg from "@/assets/img/header/logo.png";
import menuImg from "@/assets/img/header/menu.png";
import closeImg from "@/assets/img/header/close.png";
import { useIsMoile } from "@/hooks/index";
import { useEffect, useState } from "react";

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
  useEffect(() => {
    var html_ = document.getElementsByTagName("html")[0];
    if (window.innerWidth < 1080) {
      html_.style.fontSize = "10px";
    } else {
      html_.style.fontSize = "16px";
    }
  }, []);
  return (
    <div
      className={[
        "flex",
        "justify-between",
        "h-[7.5rem] ",
        "leading-[7.5rem] ",
        "items-center",
        "relative",
        "z-50",
        "main",
        isShow ? "bg-blueBg" : " ",
      ].join(" ")}
    >
      <div className="w-[15rem] h-[3.375rem]">
        <NavLink
          to="/home"
          onClick={() => {
            setIsShow(false);
          }}
        >
          <img src={logoImg} />
        </NavLink>
      </div>
      {!isMobile && (
        <div className="flex p-0" id="nav">
          {navList.map((item) => {
            return (
              <div className="text-2xl  font-proximanova pl-[1.875rem] cursor-pointer">
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
              className="w-[3.375rem] h-[28.125] cursor-pointer rotate-center "
              onClick={() => {
                setIsShow(true);
              }}
            >
              <img src={menuImg} />
            </div>
          )}
          {isShow && (
            <div
              className="w-[3.375rem] h-[28.125] cursor-pointer rotate-center-revese "
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
        <div className="absolute top-[7.5rem] w-[100vw] bg-blueBg right-0 width-show overflow-hidden">
          {navList.map((item, index) => {
            return (
              <NavLink to={item.path} key={item.path}>
                <div
                  className=" text-4xl text-blue flex items-stretch pl-4"
                  onClick={() => setIsShow(false)}
                >
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
