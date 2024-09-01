import { useState } from "react";
import closeImg from "@/assets/img/netword/close.png";
import ItemBox from "./itemBox";

interface PhotoItem {
  data: NetWordPhotoData;
}
const PhotoItem = (props: PhotoItem) => {
  let data = props.data;
  let [isShow, setIsShow] = useState<boolean>(false);
  return (
    <div>
      <div
        className={["w-[13.125rem]", "relative", "mt-6", "cursor-pointer"].join(" ")}
        onClick={() => {
          setIsShow(true);
        }}
      >
        <div className="w-[13.125rem]">
          <img src={data.img} alt="" />
        </div>
        <div className=" absolute bottom-[6px] left-[0.75rem] z-30">
          <div className="text-base font-georgia-b text-white">{data.name}</div>
          <div className="w-[7.5rem] h-[1.875rem] mt-[6px]">
            <img src={data.logo} alt="" className="" />
          </div>
        </div>
      </div>
      {isShow && (
        <div
          className={[
            "fixed",
            "top-0",
            "left-0",
            "w-[100vw]",
            "h-[100vh] ",
            " bg-black",
            "bg-opacity-10",
            "z-30",
          ].join(" ")}
        ></div>
      )}
      {isShow && (
        <ItemBox
          data={data}
          isShow={isShow}
          close={() => {
            setIsShow(false);
          }}
        ></ItemBox>
      )}
    </div>
  );
};

export default PhotoItem;
