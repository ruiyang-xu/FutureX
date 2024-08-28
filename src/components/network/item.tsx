interface ItemProps {
  flex: "left" | "right";
  data: NetWordListItem;
}
const Item = (props: ItemProps) => {
  let data = props.data;
  return (
    <div
      className={[
        "lg:flex",
        "lg:justify-left",
        "mt-[5.625rem]",
        props.flex === "left" ? "lg:flew-row" : "lg:flew-row-reverse",
      ].join(" ")}
    >
      <div className="lg:w-[36.5625rem] mr-[5.625rem] w-[100%]">
        <div className="text-1xl font-proximanova">{data.title}</div>
        <p className="text-base font-proximanova-l font-light text-[#666] mt-[1.875rem] md:mb-8">
          {data.content}
        </p>
      </div>
      <div className="lg:w-[36.5625rem] h-[12.75rem] w-[100%] lg:mt-0 mt-4 overflow-hidden">
        <img src={data.img} />
      </div>
    </div>
  );
};

export default Item;
