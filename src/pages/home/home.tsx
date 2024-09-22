import React, { useState, useEffect } from "react";
import p1Img from "@/assets/img/home/p1.png";
import p2Img from "@/assets/img/home/p2.png";
import p3Img from "@/assets/img/home/p3.png";
import image from "@/assets/img/home/image.png";
import flyWheel from "@/assets/img/home/flywheel.png";
import { useIsMoile } from "@/hooks";

interface LegalNoticeModalProps {
  onClose: () => void;
}

const LegalNoticeModal: React.FC<LegalNoticeModalProps> = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
    <div className="bg-white p-8 rounded-lg max-w-lg mx-auto relative" onClick={(e) => e.stopPropagation()}>
      <button 
        onClick={onClose} 
        className="absolute top-2 right-2 bg-blue-500 text-blue p-2 rounded text-sm md:text-base lg:text-lg z-50"
        style={{ zIndex: 1000 }}
      >
        &times;
      </button>
      {/* Render other modal content */}
      <div className="mt-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Legal Notice</h2>
        <p className="text-sm md:text-base lg:text-lg">
          FutureX Fund Management (Hong Kong) Limited is a subsidiary of FutureX Capital Limited, which has been licensed by the Securities and Futures Commission in Hong Kong to engage in Type 4 (Advising on Securities) and Type 9 (Asset Management) regulated activities.
        </p>
        <p className="text-sm md:text-base lg:text-lg">
          FutureX Fund Management (Hong Kong) Limited is regulated by the Securities and Futures Commission of Hong Kong to provide investment services to Professional Investors only. The term "professional investor" is as defined in the Securities and Futures Ordinance and its subsidiary legislation.
        </p>
        <p className="text-sm md:text-base lg:text-lg">
          By visiting this website, you agree to be bound by the content of this disclaimer which may be amended by us from time to time and displayed on this website. In case of discrepancies between the English and Chinese versions, the English version shall prevail. The contents of this website have not been reviewed by the Securities and Futures Commission or any regulatory authority in Hong Kong.
        </p>
        <p className="text-sm md:text-base lg:text-lg">
          The information on this website is provided for Hong Kong residents and for reference only. By viewing this website, you acknowledge that you have read and accepted the terms and conditions of accessing this website. If you do not agree to be bound by the terms of use, you should exit this website. Investment involves risks. Past performance is not indicative of future performance. The information provided herein is subject to change without further notice.
        </p>
      </div>
    </div>
  </div>
);

export default function Home() {
  const isMobile = useIsMoile();
  const [showLegalNotice, setShowLegalNotice] = useState(true);

  const handleCloseLegalNotice = () => {
    setShowLegalNotice(false);
  };

  return (
    <div className="max-w-[100vw] overflow-x-hidden">
      {showLegalNotice && <LegalNoticeModal onClose={handleCloseLegalNotice} />}
      <section className="main se_bt">
        <div className="text-5xl text-blue font-georgia-b w-[100%] lg:w-3/4 mt-[8rem] leading-[5.125rem]  font-black">
          <span className="text-blueLigh">Founders We </span> Backed
          <span className="text-blueLigh"> are </span> Backing
          <span className="text-blueLigh"> Us</span>
        </div>
        <div className="w-[80%] text-blueLigh text-xl font-normal leading-[1.8rem] tracking-[0.1rem] mt-[5.625rem] letter">
          By connecting 100+ top-tier tech founders of yesterday, today, and
          tomorrow, we're accelerating the future of technology globally.
        </div>
      </section>
      <section className="main se_bt">
        <div className="section_title">Who We Are</div>
        <div className="lg:grid lg:grid-cols-2  lg:gap-[5.625rem] items-center mt-[3.625rem]">
          <div className="text-2xl leading-[2.625rem]">
            FutureX Capital invests in visionary founders building
            transformative AI technologies across all stages. With $3B+ accumulated investment and
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
                <p className="home_big_small">Years of Deep Network</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-blueBg  se_bt pt-[5.625rem]">
        <div className="lg:flex  lg:items-center lg:gap-[5.625rem] main">
          {!isMobile && (
            <div className="relative w-[36.5625rem] h-[30rem]">
              <img src={image} className="" />
            </div>
          )}
          <div className="w-[36.5625rem]">
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
            <button className="w-[11.25rem] h-[3.75rem] text-blue border-[2px] border- border-blue rounded-[1.875rem] text-xl bg-white se_mb_90 font-proximanova-m">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section className="main se_bt">
        <div className="lg:flex lg:align-middle lg:gap-[5.625rem]">
          <div className="flex-1">
            <div className="section_title">Our Flywheel</div>
            <div className="mt-16 text-2xl font-light">
              Trust shapes our fluid ecosystem, where advisors, founders, and
              investors seamlessly evolve and interchange roles. This dynamic
              flow of AI expertise continuously enhances our insights and
              strategies.
            </div>
          </div>
          <div className="h-[23.9375rem] text-center mx-auto pt-16 lg:pt-0 flex-1">
            <img src={flyWheel} className="object-cover h-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
