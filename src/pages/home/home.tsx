import p1Img from "@/assets/img/home/p1.png";
import p2Img from "@/assets/img/home/p2.png";
import p3Img from "@/assets/img/home/p3.png";
import flyWheel from "@/assets/img/home/flywheel.png";
import { useIsMoile } from "@/hooks";
export default function Home() {
  const isMobile = useIsMoile();
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <section className="px-12">
        <div className="text-5xl text-blue font-georgia-b w-[100%] lg:w-3/4 mt-[8rem] leading-normal  font-black">
          <span className="text-blueLigh">Founders We </span>Backed
          <span className="text-blueLigh">are</span> Backing
          <span className="text-blueLigh">Us</span>
        </div>
        <div className="w-[80%] text-blueLigh text-xl font-thin font-georgia leading-normal tracking-wide mt-[3.75rem]">
          By connecting 100+ top-tier tech founders of yesterday, today, and
          tomorrow, we're accelerating the future of technology globally.
        </div>
      </section>
      <section className="lg:mt-[8rem] mt-[13.125rem] px-12">
        <div className="section_title">Who We Are</div>
        <div className="lg:grid lg:grid-cols-2  items-center mt-[5.625rem]">
          <div className="text-2xl font-proximanova font-thin">
            FutureX Capital invests in visionary founders building
            transformative AI technologies across all stages. With $1B+ AUM and
            deep roots in the US and China tech ecosystems, we're positioned at
            the forefront of the next wave of innovation.
          </div>
          <div className="lg:grid lg:grid-rows-2 lg:grid-flow-col lg:gap-4 lg:mt-[0.6rem] mt-[2.6rem] lg:justify-around flex justify-between lg:w-[39.375rem]">
            <div>
              <p className="home_big">$3B+</p>
              <p className="home_big_small">
                Accumulated Investment Deployed by Our Team
              </p>
            </div>
            <div>
              <p className="home_big lg:mt-24">Top5%</p>
              <p className="home_big_small">DPI Globally*</p>
            </div>
            <div className="lg:row-span-2 lg:flex lg:items-center">
              <div>
                <p className="home_big">20</p>
                <p className="home_big_small">Years of Deep Netwo rk</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:mt-[8rem] bg-blueBg py-[4.625rem] px-12 mt-[8rem]">
        <div className="lg:grid lg:grid-cols-2">
          {!isMobile && (
            <div className="relative">
              <div className="relative w-[60%] h-[15rem] overflow-hidden">
                <img src={p1Img} className="w-100 object-fill " />
              </div>
              <div className="relative w-[60%] -top-8 left-[16rem] z-10 h-[15rem] overflow-hidden">
                <img src={p2Img} className="w-100 object-fill " />
              </div>
              <div className="relative w-[60%] -top-24 h-[15rem] overflow-hidden">
                <img src={p3Img} className="w-100 object-none " />
              </div>
            </div>
          )}
          <div>
            <p className="section_title">X-Network</p>
            <p className="text-blue font-extralight text-base">
              Unparalleled Ecosystem of World-Class Founders
            </p>
            <p className="mt-10 w-[32rem] text-2xl font-light">
              We've cultivated a self-reinforcing ecosystem where success breeds
              success. More than 50% of our AUM comes from tech pioneers we once
              supported – a testament to the trust we've built and the value we
              deliver.
            </p>
            <button className="w-[11.25rem] h-[3.75rem] text-blue border-[2px] border- border-blue rounded-[1.875rem] mt-24 font-normal text-xl">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section className="lg:mt-[12rem] mt-[8rem] px-12 mb-[12rem]">
        <div className="lg:grid lg:grid-cols-2">
          <div>
            <div className="section_title">Our Flywheel</div>
            <div className="mt-16 lg:w-3/4 text-2xl font-light">
              Trust shapes our fluid ecosystem, where advisors, founders, and
              investors seamlessly evolve and interchange roles. This dynamic
              flow of AI expertise continuously enhances our insights and
              strategies.
            </div>
          </div>
          <div className="w-4/5 text-center mx-auto pt-16 lg:pt-0">
            <img src={flyWheel} />
          </div>
        </div>
      </section>
    </div>
  );
}
