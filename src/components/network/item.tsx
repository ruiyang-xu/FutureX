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
        "lg:gap-[5.625rem]",
        "items-center",
        "mt-[5.625rem]",
        "w-full",
        "basis-0",
        props.flex === "left" ? "lg:flew-row" : "lg:flex-row-reverse",
      ].join(" ")}
    >
      <div
        className={[
          "lg:flex-1",
        ].join(" ")}
      >
        <div className="text-1xl font-proximanova">
          {data.title}
        </div>
        <p className="text-base font-proximanova-l font-light mt-[1.875rem] md:mb-8">
          {data.content}
        </p>
      </div>
      <div
        className={[
          "h-[12.75rem]",
          "lg:mt-0",
          "mt-4",
          "lg:flex-1",
          "overflow-hidden",
          "w-full",
          "basis-0",
        ].join(" ")}
        
      >
        <img src={data.img} className="h-[12.75rem] object-cover" />
      </div>
    </div>
  );
};

export default Item;
