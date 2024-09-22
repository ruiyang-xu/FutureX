import { useState, useEffect } from "react";
import { fundData } from "./data";
import Item from "@/components/portfolio/item";
import { useIsMoile } from "@/hooks";

const Portfolio = () => {
  const isMobile = useIsMoile();
  const [sortedList, setSortedList] = useState<PortItemData[]>([]);

  useEffect(() => {
    const sorted = [...fundData].sort((a, b) => {
      // Sort by year in ascending order (earliest to latest)
      return Number(a.year) - Number(b.year);
    });
    setSortedList(sorted);
  }, []);

  return (
    <section className="main overflow-x-hidden se_bt">
      <div className="py-[9.375rem] h2">Selected Portfolio Companies</div>
      <div className="flex bg-blueBg mt-[3.75rem] border-y-[1px] border-blueHover font-proximanova-b px-[1.875rem] justify-between">
        <div className="text-base text-blue w-[15rem] py-4 text-center uppercase small_cap">
          Company
        </div>
        <div className="text-base text-blue w-[6.75rem] text-left py-4 uppercase small_cap font-bold">
          Partnered
        </div>
        {!isMobile && (
          <div className="text-base text-blue w-[22.5rem] text-left py-4 uppercase small_cap">
            Blurb
          </div>
        )}
        <div className="w-[2.8125rem]"></div>
      </div>
      {sortedList.map((item) => (
        <Item data={item} key={item.id} />
      ))}
    </section>
  );
};

export default Portfolio;