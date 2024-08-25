import { useState } from "react";
import closeImg from "@/assets/img/netword/close.png";

interface PhotoItem {
  data: NetWordPhotoData;
}
const PhotoItem = (props: PhotoItem) => {
  let data = props.data;
  let [isShow, setIsShow] = useState<boolean>(false);
  return (
    <div>
      <div
        className={["w-25%", "relative", "mt-6", "cursor-pointer"].join(" ")}
        onClick={() => {
          setIsShow(true);
        }}
      >
        <div>
          <img src={data.img} alt="" />
        </div>
        <div className=" absolute bottom-4 left-6 z-30">
          <div className="text-base font-georgia-b text-white">{data.name}</div>
          <div className="w-[9.25rem]">
            <img src={data.logo} alt="" className="" />
          </div>
        </div>
        <div className=" absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-20"></div>
      </div>
      {isShow && (
        <div
          className={[
            "fixed",
            "top-0",
            "left-0",
            " w-[100vw]",
            "h-[100vh] ",
            " bg-black",
            "bg-opacity-10",
            "z-30",
            "animate__animated",
            isShow ? "animate__zoomIn " : "animate__zoomOut",
          ].join(" ")}
        >
          <div
            className={[
              " p-[5.625rem]",
              "bg-blueBg",
              "absolute",
              "top-[50%]",
              "left-[50%]",
              "-translate-x-[50%]",
              "-translate-y-[50%]",
              "lg:flex",
              "lg:w-[80%]",
              "overflow-y-auto",
              "max-h-[90vh]",
            ].join(" ")}
          >
            <div>
              <div className="w-[17.5rem] h-[18.75rem]">
                <img src={data.img} />
              </div>
              <div className="text-xl-32 w-[17.5rem] text-center font-georgia  mt-4">
                {data.name}
              </div>
              <div className="w-[9.375rem] h-[3.75rem] m-auto">
                <img src={data.logo2} alt="" />
              </div>
              <p className="text-sm text-center small_cap">{data.founder}</p>
            </div>
            <div className="ml-[5.625rem]">
              <div className="text-xl font-bold">{data.title}</div>
              {data.content.map((item) => {
                return (
                  <p key={item} className="text-sm mt-4">
                    {item}
                  </p>
                );
              })}
            </div>
            <div
              className=" absolute top-[3rem] right-[5rem] w-[2.8125rem] h-[2.8125rem] cursor-pointer"
              onClick={() => {
                setIsShow(false);
              }}
            >
              <img src={closeImg} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoItem;
