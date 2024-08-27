interface ListItemProps {
  data: NewList;
}
const listItem = (props: ListItemProps) => {
  let data = props.data;
  return (
    <div className="max-w-[85rem] py-[3.75rem] border-t-[1px] border-blueHover lg:flex lg:flex-row  justify-around items-center cursor-pointer">
      <div className="">
        <div className="uppercase text-blue text-base">{data.type}</div>
        <div className="text-2xl my-[1.275rem] max-w-[70rem]">{data.title}</div>
        <div className="text-sm max-w-[70rem]">{data.desc}</div>
      </div>
      <div className="lg:w-[7.5rem] lg:h-[7.5rem] bg-blueBg grow-0 mt-4 w-[100%] h-[4rem]">
        <img src={data.img} className="object-cover h-[100%]" alt="" />
      </div>
    </div>
  );
};

export default listItem;
