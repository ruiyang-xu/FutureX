import { useState } from "react";
import { navList, fundData } from "./data";
import Item from "@/components/portfolio/item";
const Portfolio = () => {
  let [index, setIndex] = useState<number>(1);
  let [list, setList] = useState<PortItemData[]>(
    fundData.filter((item) => item.type === 1)
  );
  const changeFun = (e: number) => {
    let list = fundData.filter((item) => item.type === e);
    setIndex(e);
    setList(list);
  };
  return (
    <section className="min-h-lvh px-12 max-w-[100vw] overflow-x-hidden">
      <div className="py-[9.375rem] h2">Selected Companies</div>
      <div className="flex justify-between align-middle text-center bg-blueBg  font-georgia text-xl">
        <div className="font-georgia w-[25%] mx-4 my-4 font-bold  py-2">
          Select by Fund
        </div>
        {navList.map((item) => (
          <div
            key={item.value}
            className={[
              "cursor-pointer",
              "relative",
              "box-border",
              "w-[25%]",
              "mx-4",
              "my-4",
              "py-2",
              index === item.value
                ? "bg-blueHover text-blue "
                : "text-blueLigh ",
            ].join(" ")}
            onClick={() => {
              changeFun(item.value);
            }}
          >
            {item.name}
            <div className="absolute top-50% -translate-y-[80%] -left-4 w-[1px] h-[3rem] bg-blueLigh opacity-60"></div>
          </div>
        ))}

        <div></div>
      </div>
      <div className="flex bg-blueBg mt-[3.75rem] border-y-[1px] border-blueHover">
        <div className="text-base text-blue w-[30%] py-4 text-center uppercase small_cap">
          Company
        </div>
        <div className="text-base  text-blue w-[25%] py-4 uppercase small_cap">
          Partnered
        </div>
        <div className="text-base text-blue w-[45%] py-4 uppercase small_cap">Blurb</div>
      </div>
      {list.map((item) => {
        return <Item data={item} key={item.id}></Item>;
      })}
    </section>
  );
};

export default Portfolio;
