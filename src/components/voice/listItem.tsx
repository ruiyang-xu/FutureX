import { useIsMoile } from "@/hooks";

interface ListItemProps {
  data: NewList;
}
const ListItem = (props: ListItemProps) => {
  const isMobile = useIsMoile();
  let data = props.data;
  return (
    <div className="max-w-[90rem] py-[2.5rem] border-t-[1px] border-blueHover lg:flex  justify-between items-center cursor-pointer gap-[2.5rem] hover:bg-blueBg transition-colors duration-200 rounded-sm">
      <div className="w-[80%]">
        <div className="uppercase text-blue text-xs small_cap font-proximanova-m tracking-widest">
          {data.type}
        </div>
        <div className="text-xl my-[1rem] font-proximanova-m text-black leading-snug">
          {data.title}
        </div>
        <div className="text-sm text-[#555] leading-relaxed">{data.desc}</div>
      </div>
      {!isMobile && (
        <div className="lg:w-[7.5rem] h-[7.5rem] bg-blueBg">
          <img src={data.img} className="h-[7.5rem] object-cover" alt="" />
        </div>
      )}
    </div>
  );
};

export default ListItem;
