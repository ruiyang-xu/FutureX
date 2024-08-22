import addImg from "@/assets/img/portfolio/add.png";
import subImg from "@/assets/img/portfolio/sub.png";
import { useState } from "react";
interface Itemprops {
  data: PortItemData;
}
export default function Item(props: Itemprops) {
  let data = props.data;
  let [isShow, setIshow] = useState<boolean>(false);
  return (
    <div className=" py-6 border-t-[1px] border-blueHover items-center">
      <div className="flex">
        <div className=" w-[30%] flex justify-center">
          <div className="w-[15rem] h-[6rem]">
            <img src={data.logo} />
          </div>
        </div>
        <div className="w-[25%]">
          <div>
            <div className=" text-2xl font-medium">{data.partner}</div>
            <div className="text-base font-thin">{data.year}</div>
          </div>
        </div>
        <div className="flex w-[45%] justify-between items-center">
          <div className="text-base w-[25.5rem] font-extralight">
            {data.blurb}
          </div>
          <div
            className="w-[2.8125rem] h-[2.8125rem] mr-8 cursor-pointer"
            onClick={() => {
              setIshow(!isShow);
            }}
          >
            {isShow ? (
              <img src={subImg} className="rotate-center"></img>
            ) : (
              <img src={addImg} className="rotate-center-revese"></img>
            )}
          </div>
        </div>
      </div>
      <div
        className={[
          "ml-[7%]",
          "mt-4",
          isShow ? "height-show" : "height-hidden",
        ].join(" ")}
      >
        <div className="text-h3color">
          <span className="uppercase inline-block w-[7rem]">Founder</span>
          <span>{data.dataDetail.founder}</span>
        </div>
        <div className="text-h3color">
          <span className="uppercase inline-block w-[7rem]">Milestone</span>
          <span>{data.dataDetail.milestone}</span>
        </div>
        <div className="text-h3color">
          <span className="uppercase inline-block w-[7rem]">Website</span>
          <span>{data.dataDetail.website}</span>
        </div>
      </div>
    </div>
  );
}
