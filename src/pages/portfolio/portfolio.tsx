import { navList } from "./data";
const Portfolio = () => {
  return (
    <section className="min-h-lvh px-12">
      <div className="py-[9.375rem] text-5xl font-proximanova">
        Selected Companies
      </div>
      <div className="grid grid-cols-4 text-center bg-blueBg h-[5.125rem]  leading-[5.125rem] font-georgia text-xl">
        <div className="font-mediumgeorgiai">Select by Fund</div>
        {navList.map((item) => (
          <div key={item.value} className="text-blueLigh my-4 cursor-pointer relative bg-blue mx-4">
            {item.name}
            <div className="absolute top-50% left-0 -translate-y-50% w-[1px] h-[80%] bg-blueLigh"></div>
          </div>
        ))}

        <div></div>
      </div>
    </section>
  );
};

export default Portfolio;
