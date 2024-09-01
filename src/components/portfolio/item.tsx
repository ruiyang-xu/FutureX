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
    <div className="py-6 border-t-[1px] border-blueHover px-[1.875rem]">
      <div className="flex items-center justify-between">
        <div className=" w-[15rem] h-[6rem]">
          <img src={data.logo} />
        </div>
        <div className="w-[6.75rem]">
          <div>
            <div className="text-2xl font-medium font-proximanova">
              {data.partner}
            </div>
            <div className="text-base font-proximanova-l">{data.year}</div>
          </div>
        </div>
        {!isMobile && (
          <div className="w-[22.5rem]">
            <div className="text-base w-[25.5rem] font-extralight">
              {data.blurb}
            </div>
          </div>
        )}
        <div
          className="w-[2.8125rem] h-[2.8125rem] cursor-pointer"
          onClick={() => {
            clickBtn(!isShow);
          }}
        >
          <img src={img} ref={imgRef}></img>
        </div>
      </div>
      <div className={["ml-8", "height-hidden"].join(" ")} ref={showBoxRef}>
        <div className="mt-[1.875rem] pb-[3.75rem]">
          <div className="text-h3color">
            <span className="uppercase inline-block w-[10rem] lg:w-[8rem]">
              Founder
            </span>
            <span className="text-[#666]">{data.dataDetail.founder}</span>
          </div>
          <div className="text-h3color">
            <span className="uppercase inline-block w-[10rem] lg:w-[8rem]">
              Milestone
            </span>
            <span className="text-[#666]">{data.dataDetail.milestone}</span>
          </div>
          <div className="text-h3color">
            <span className="uppercase inline-block w-[10rem] lg:w-[8rem]">
              Website
            </span>
            <a href={data.dataDetail.url} className=" underline">
              <span className="text-[#666]">{data.dataDetail.website}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
