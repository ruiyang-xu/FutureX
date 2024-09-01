interface ListItemProps {
  data: NewList;
}
const listItem = (props: ListItemProps) => {
  let data = props.data;
  return (
    <div className="max-w-[90rem] py-[3.75rem] border-t-[1px] border-blueHover lg:flex  justify-between items-center cursor-pointer gap-[3.75rem]">
      <div className="w-[80%]">
        <div className="uppercase text-blue text-base  small_cap proximanova">
          {data.type}
        </div>
        <div className="text-2xl my-[1.875rem] font-proximanova-m ">{data.title}</div>
        <div className="text-sm  text-[#666666]">{data.desc}</div>
      </div>
      <div className="w-[7.5rem] h-[7.5rem] bg-blueBg">
        <img src={data.img} className="h-[7.5rem]" alt="" />
      </div>
    </div>
  );
};

export default listItem;
