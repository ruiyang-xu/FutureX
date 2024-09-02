import PhotoItem from "@/components/network/photoItem";
import { popleData, logoList, cultivating, business } from "./data";
import Item from "@/components/network/item";
import { useIsMoile } from "@/hooks";

const NetWord = () => {
  const isMobile = useIsMoile();
  return (
    <div className="mxa-w-[100vw] overflow-x-visible">
      <section className="px-14 main">
        <div className="h2 mt-[9.375rem]">X-Network</div>
        <p className="p1 mt-[5.625rem] w-[100%] font-thin">
          At FutureX, we believe in the
          <span className="font-proximanova-b">
            &nbsp;power of people, collaborative growth
          </span>
          , and
          <span className="font-proximanova-b">
            &nbsp;holistic well-being
          </span>
          . Discover how we create impactful experiences for our founders and
          investors.
        </p>
        <div className="section_title mt-[7.5rem]">
          We Build Legacies from People
        </div>
        <p className="p1 my-[3.75rem]  w-[100%]">
          In X-Network, dynamic and evolving roles fuel innovation and growth.
          Our strength lies in the fluidity of our network, where founders,
          investors, and advisors seamlessly transition and support one another,
          driving mutual success and lasting impact.
        </p>
      </section>
      <section className="bg-gradient-to-b from-[#fff] via-[#E4F3FF] to-[#A8CEF2]">
        <div className="main">
          {/* 照片墙 */}
          <div className="lg:flex lg:justify-between ">
            {!isMobile && <div></div>}
            <div className="flex gap-[20px]">
              {popleData.map((item, index) => {
                return (
                  <div
                    className={
                      index === 0 || index === 2 ? "mt-[6.5625rem]" : ""
                    }
                  >
                    {item.map((ele) => {
                      return <PhotoItem data={ele}></PhotoItem>;
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="section_title mt-[7.5rem]">
            Global Reach, Local Impact
          </div>
          <p className="p1 my-[3.75rem] lg:w-[78.75rem] w-[100%]">
            We amplify our reach and influence across the world's most active
            startup ecosystems through strategic global partnerships, opening
            doors to the best minds and resources worldwide.
          </p>
          {/* logo列表 */}
          <div className="flex justify-between">
            <div></div>
            <div className="lg:w-[56.25rem] flex flex-wrap gap-[1.875rem] w-[100%] justify-center">
              {logoList.map((item, index) => (
                <div className="w-[12.5rem] h-[5rem]">
                  <img src={logoList[index]} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="section_title mt-[7.5rem]">
            Cultivating Knowledge and Connections
          </div>
          <div>
            {cultivating.map((item) => {
              return <Item data={item} key={item.id} flex="left"></Item>;
            })}
          </div>
          <div className="section_title mt-[7.5rem]">
            Wellness Beyond Business
          </div>
          <div className="pb-[7.5rem]">
            {business.map((item) => {
              return <Item data={item} key={item.id} flex="right"></Item>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetWord;
