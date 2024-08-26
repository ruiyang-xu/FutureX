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
    <section className="min-h-lvh px-12 mb-[7.5rem]">
      <div className="py-[9.375rem] h2">Our Perspectives</div>
      <div className="flex">
        <div className="text-2xl uppercase mr-8 font-bold small_cap">
          Filter
        </div>
        {navList.map((item) => {
          return (
            <div
              className={[
                "text-2xl",
                "uppercase",
                "mr-8",
                "text-[#666]",
                "cursor-pointer",
                "small_cap",
                select === item.value ? "text-blue underline" : "",
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
