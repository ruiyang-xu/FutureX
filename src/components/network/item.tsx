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
        "lg:justify-center",
        "items-center",
        "mt-[5.625rem]",
        props.flex === "left" ? "lg:flew-row" : "lg:flex-row-reverse",
      ].join(" ")}
    >
      <div
        className={[
          "lg:w-[36.5625rem]",
          props.flex === "left" && "mr-[5.625rem]",
          "w-[100%]",
        ].join(" ")}
      >
        <div className="text-1xl font-proximanova w-[36.5625rem]">
          {data.title}
        </div>
        <p className="text-base font-proximanova-l font-light mt-[1.875rem] md:mb-8">
          {data.content}
        </p>
      </div>
      <div
        className={[
          "h-[12.75rem]",
          "w-[100%]",
          "lg:mt-0",
          "mt-4",
          "overflow-hidden",
        ].join(" ")}
      >
        <img src={data.img} className="h-[12.75rem] object-cover" />
      </div>
    </div>
  );
};

export default Item;
