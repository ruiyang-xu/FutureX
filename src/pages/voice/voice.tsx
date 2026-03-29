import { useEffect, useState } from "react";
import { navList, newList } from "./data";
import ListItem from "@/components/voice/listItem";
import { Link } from "react-router-dom";
const Voice = () => {
  const [select, setSelect] = useState<string>("all");
  const [list, setList] = useState<NewList[]>(newList);
  const changeFun = (item: VoiceNav) => {
    setSelect(item.value);
    let list: NewList[] = [];
    if (item.value === "all") {
      list = newList;
    } else {
      list = newList.filter((ele) => ele.type === item.value);
    }
    setList(list);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="main overflow-x-hidden">
      <div className="pt-[9.375rem] pb-[3.75rem] h2 w-[100%]">Our Perspectives</div>
      <div className="flex flex-wrap w-[100%] items-baseline gap-y-2">
        <div className="text-sm uppercase mr-6 font-proximanova-b small_cap tracking-widest text-black">
          Filter
        </div>
        {navList.map((item) => {
          return (
            <div
              className={[
                "text-sm",
                "uppercase",
                "mr-6",
                "cursor-pointer",
                "small_cap",
                "font-proximanova",
                "tracking-wider",
                "pb-1",
                "transition-colors",
                "duration-200",
                select === item.value ? "text-blue border-b-2 border-blue" : "text-[#888] hover:text-[#444]",
              ].join(" ")}
              key={item.value}
              onClick={() => {
                changeFun(item);
              }}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="py-[3.75rem]">
        {list.map((item) => (
          <Link to={`/detail/${item.id}`}>
            <ListItem data={item}></ListItem>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Voice;
