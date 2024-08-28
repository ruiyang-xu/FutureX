import addImg from "@/assets/img/portfolio/add.png";
import subImg from "@/assets/img/portfolio/sub.png";
import { useIsMoile } from "@/hooks";
import { MutableRefObject, useEffect, useRef, useState } from "react";
interface Itemprops {
  data: PortItemData;
}
export default function Item(props: Itemprops) {
  let data = props.data;
  let [isShow, setIshow] = useState<boolean>(true);
  let [img, setImg] = useState<string>(addImg);
  let imgRef = useRef<HTMLImageElement>() as MutableRefObject<HTMLImageElement>;
  let showBoxRef = useRef<HTMLDivElement>(
    null
  ) as MutableRefObject<HTMLDivElement>;
  const isMobile = useIsMoile();

  const clickBtn = (flag: boolean) => {
    const img = imgRef.current;
    const showBox = showBoxRef.current;
    if (!flag) {
      img.className = "rotate-center";
      showBox.className = showBox.className.replace("height-hidden", "");
      showBox.className += " height-show";
      setImg(subImg);
    } else {
      img.className = "rotate-center-revese";
      showBox.className = showBox.className.replace("height-show", "");
      showBox.className += "height-hidden";
      setImg(addImg);
    }
    setIshow(flag);
  };

  return (
    <div className="py-6 border-t-[1px] border-blueHover">
      <div className="flex items-center">
        <div className=" lg:w-[30%] w-[45%] flex justify-between">
          <div className="w-[15rem] h-[6rem] ml-8">
            <img src={data.logo} />
          </div>
        </div>
        <div className="lg:w-[25%] w-[45%]">
          <div>
            <div className="text-2xl font-medium font-proximanova">
              {data.partner}
            </div>
            <div className="text-base font-proximanova-l">{data.year}</div>
          </div>
        </div>
        {!isMobile && (
          <div className="w-[35%]">
            <div className="text-base w-[25.5rem] font-extralight">
              {data.blurb}
            </div>
          </div>
        )}
        <div className="w-[10%]">
          <div
            className="w-[2.8125rem] h-[2.8125rem] cursor-pointer"
            onClick={() => {
              clickBtn(!isShow);
            }}
          >
            <img src={img} ref={imgRef}></img>
          </div>
        </div>
      </div>
      <div
        className={["ml-8", "h-0", "height-hidden"].join(" ")}
        ref={showBoxRef}
      >
        <div className="text-h3color">
          <span className="uppercase inline-block w-[7rem]">Founder</span>
          <span className="text-[#666]">{data.dataDetail.founder}</span>
        </div>
        <div className="text-h3color">
          <span className="uppercase inline-block w-[7rem]">Milestone</span>
          <span className="text-[#666]">{data.dataDetail.milestone}</span>
        </div>
        <div className="text-h3color">
          <span className="uppercase inline-block w-[7rem]">Website</span>
          <span className="text-[#666]">{data.dataDetail.website}</span>
        </div>
      </div>
    </div>
  );
}
