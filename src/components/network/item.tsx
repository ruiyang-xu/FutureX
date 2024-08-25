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
        "justify-left",
        "mt-[5.625rem]",
        props.flex === "left" ? "flew-row" : "flew-row-reverse",
      ].join(" ")}
    >
      <div className="w-[36.5625rem] mr-[5.625rem]">
        <div className="text-1xl font-proximanova">{data.title}</div>
        <p className="text-base font-proximanova font-light text-[#666] mt-[1.875rem] md:mb-8">
          {data.content}
        </p>
      </div>
      <div className="w-[36.5625rem] h-[12.75rem]">
        <img src={data.img} />
      </div>
    </div>
  );
};

export default Item;
