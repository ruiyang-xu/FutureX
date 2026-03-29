import { useParams } from "react-router-dom";
import { newList } from "./data";
import "./detail.css";
import { useEffect } from "react";
const Detail = () => {
  const param = useParams();
  const id: number = Number(param.id);
  let index = newList.findIndex((item) => item.id === id);
  let data = newList[index];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main">
      <div className=" mb-[5rem] mt-[9.375rem]  max-w-[42rem]">
        <div className="text-blue bg-blueBg px-4 py-[0.25rem] inline-block uppercase rounded-[0.25rem] small_cap text-sm tracking-wider">
          {data.type}
        </div>
        <div
          className="text-3xl font-georgia-b my-[2rem] text-black"
          dangerouslySetInnerHTML={{ __html: data.title }}
        ></div>
        <div className="text-sm font-proximanova text-[#888] tracking-wide uppercase">{data.date}</div>
        <div className="mt-[2.5rem] text-lg text-[#444] leading-relaxed">{data.desc}</div>
        <div
          dangerouslySetInnerHTML={{ __html: data.detail }}
          className="art_detail"
        ></div>
      </div>
    </div>
  );
};

export default Detail;
