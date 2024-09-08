import { useState } from "react";
import { teamList } from "./data";
import Box from "@/components/team/box";
const Team = () => {
  const [showLess, setShowLess] = useState<boolean>(false);
  const [selectData, setSelectData] = useState<TeamItem>();
  const [showBox, setShowBox] = useState<boolean>(false);

  return (
    <section className="main">
      <div className="py-[9.375rem] h2">Our Team</div>
      <div className="lg:flex lg:justify-between gap-[3.75rem] mb-[7.5rem]">
        <div className="w-[100%] text-3xl text-[#8EB6DC] font-georgia-b ">
          A Vision Sparked, <br></br>A Team United
        </div>
        <div className="text-sm  w-[100%]">
          <div
            className={[
              "relative",
              "overflow-hidden",
              "text-xl",
              !showLess ? "h-[14.5rem]" : "",
            ].join(" ")}
          >
            <p className="">
              In August 2017, a Silicon Valley trip ignited a vision in Cynthia
              Zhang's mind: the AI revolution was coming, and with it,
              unprecedented opportunities. Driven by this insight, she left her
              established career to found FutureX Capital in 2018.
            </p>
            <p className="mt-8">
              Joined by Yvonne and William, FutureX Capital was born from a
              shared passion for technology and innovation. Our team has since
              grown to 15 dedicated members, all staying true to our mission for
              six years and counting.
            </p>
            <p className="mt-8">
              What keeps us together? It's our collective excitement for shaping
              the future, the thrill of working with visionary entrepreneurs,
              and the joy of continuous learning and growth.
            </p>
            <p className="mt-8">
              At FutureX, we're investors with a purpose. Managing billions in
              assets and nurturing numerous unicorns, we're dedicated to
              transforming technological promise into reality.
            </p>
            <p className="mt-8">
              Join us as we write the next chapter of innovation, one investment
              at a time.
            </p>
            {!showLess && (
              <div
                className="w-[100%] h-[100%] absolute top-0 left-0"
                style={{
                  background:
                    "linear-gradient(rgba(0,0,0,0),rgba(255,255,255,1))",
                }}
              ></div>
            )}
          </div>
          <div
            className="text-blueLigh text-xl mt-[3.75rem] underline"
            onClick={() => {
              setShowLess(!showLess);
            }}
          >
            {showLess ? "Show Less" : "Show More"}
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-wrap pb-[1.875rem]">
        {teamList.map((item, index) => {
          return (
            <div
              key={item.id}
              className="w-[17.5628rem] cursor-pointer mb-[5.625rem]"
              onClick={() => {
                setSelectData(item);
                setShowBox(true);
              }}
            >
              <div className="w-100% ">
                <img src={item.img} alt="" />
              </div>
              <div className="text-2xl text-center  font-georgia mt-[1.827rem]">
                {item.name}
              </div>
              <div className="text-sm uppercase text-center small_cap">
                {item.pos}
              </div>
            </div>
          );
        })}
      </div>
      {showBox && (
        <Box
          data={selectData}
          isShow={showBox}
          close={() => {
            setShowBox(false);
          }}
        ></Box>
      )}
      {showBox && (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-black opacity-30 z-10"></div>
      )}
    </section>
  );
};

export default Team;
