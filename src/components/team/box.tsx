import closeImg from "@/assets/img/netword/close.png";
interface BoxProps {
  data?: TeamItem;
  close: () => void;
  isShow: boolean;
}
const Box = (props: BoxProps) => {
  let data = props.data;
  let isShow = props.isShow;
  return (
    <div
      className={[
        "fixed",
        "w-[100vw]",
        "h-[100vh]",
        "top-0",
        "left-0",
        "z-20",
        "animate__animated",
        isShow ? "animate__zoomIn " : "animate__zoomOut",
      ].join(" ")}
    >
      <div
        className={[
          "bg-white",
          "px-[5.625rem]",
          "pb-[5.625rem]",
          "pt-[9.375rem]",
          "lg:flex",
          "fixed",
          "top-[50%]",
          "left-[50%]",
          "-translate-x-[50%]",
          "-translate-y-[50%]",
          "w-[80%]",
          "z-40",
          "sxl:w-[80rem]",
          "max-h-[41.25rem]",
          "overflow-y-scroll",
          "relative",
          "scrollcss"
        ].join(" ")}
      >
        <div className="">
          <div className="m-auto w-[17.5rem] h-[20.375rem]">
            <img src={data?.img} alt="" />
          </div>
          <div className="text-2xl text-center  font-georgia mt-[1.827rem]">
            {data?.name}
          </div>
          <div className="text-sm uppercase text-center small_cap">{data?.pos}</div>
        </div>
        <div className="text-base ml-[5.625rem] lg:mt-0 mt-10">
          {data?.content.map((item, index) => {
            return (
              <p className="mb-8" key={index}>
                {item}
              </p>
            );
          })}
        </div>
        <div
          className="absolute top-[2.8125rem] right-[5.625rem] w-[2.8125rem] h-[2.8125rem] cursor-pointer"
          onClick={() => {
            props.close();
          }}
        >
          <img src={closeImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Box;
