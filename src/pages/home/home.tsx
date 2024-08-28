import p1Img from "@/assets/img/home/p1.png";
import p2Img from "@/assets/img/home/p2.png";
import p3Img from "@/assets/img/home/p3.png";
import flyWheel from "@/assets/img/home/flywheel.png";
import { useIsMoile } from "@/hooks";
export default function Home() {
  const isMobile = useIsMoile();
  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      <section className="main se_bt">
        <div className="text-5xl text-blue font-georgia-b w-[100%] lg:w-3/4 mt-[8rem] leading-normal  font-black">
          <span className="text-blueLigh">Founders We </span> Backed
          <span className="text-blueLigh"> are </span> Backing
          <span className="text-blueLigh"> Us</span>
        </div>
        <div className="w-[80%] text-blueLigh text-xl font-georgia leading-[1.8rem] tracking-[0.1rem] mt-[6rem] letter">
          By connecting 100+ top-tier tech founders of yesterday, today, and
          tomorrow, we're accelerating the future of technology globally.
        </div>
      </section>
      <section className="main se_bt">
        <div className="section_title">Who We Are</div>
        <div className="lg:grid lg:grid-cols-2  lg:gap-[5.625rem] items-center mt-[3.625rem]">
          <div className="text-2xl leading-[2.625rem]">
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
      <section className=" bg-blueBg  se_bt pt-[5.625rem]">
        <div className="lg:grid lg:grid-cols-2 lg:gap-[5.625rem] main">
          {!isMobile && (
            <div className="relative">
              <div className="absolute w-[43%] h-[12.125rem] top-[2rem] overflow-hidden">
                <img src={p1Img} className="object-contain" />
              </div>
              <div className="absolute w-[43%] top-[6rem] left-[11rem] z-10 h-[15rem] overflow-hidden">
                <img src={p2Img} className="object-contain" />
              </div>
              <div className="absolute w-[43%] top-[16rem] h-[15rem] overflow-hidden">
                <img src={p3Img} className="object-contain" />
              </div>
            </div>
          )}
          <div>
            <p className="section_title">X-Network</p>
            <p className="text-blue font-extralight text-base se_mb_90">
              Unparalleled Ecosystem of World-Class Founders
            </p>
            <p className="text-2xl font-light se_mb_90">
              We've cultivated a self-reinforcing ecosystem where success breeds
              success. More than 50% of our AUM comes from tech pioneers we once
              supported – a testament to the trust we've built and the value we
              deliver.
            </p>
            <button className="w-[11.25rem] h-[3.75rem] text-blue border-[2px] border- border-blue rounded-[1.875rem]  font-normal text-xl bg-white se_mb_90">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section className="main se_bt">
        <div className="lg:grid lg:grid-cols-2 lg:gap-[5.625rem]">
          <div>
            <div className="section_title">Our Flywheel</div>
            <div className="mt-16 text-2xl font-light">
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
