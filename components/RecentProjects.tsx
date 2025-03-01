import React from "react";
import { projects } from "./data/data";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { PinContainer } from "./ui/Pin";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

type Props = {};

const RecentProjects = (props: Props) => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ des, iconLists, id, img, link, title }, index) => {
          return (
            <div
              key={index}
              className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] "
            >
              <PinContainer title={link} href={link}>
                <div
                  className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10 p "
                  style={{ perspective: "1000px" }}
                >
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d] ">
                    <img src="/bg.png" alt="background image" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0 scale-95"
                    style={{
                      transform: "rotateZ(16deg)",
                    }}
                  />
                </div>
                <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1 ">
                  {title}
                </h1>
                <p className="lg:text-lg lg:font-normal font-light text-sm line-clamp-3 text-gray-400 ">
                  {des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center ">
                    {iconLists.map((icon, index) => {
                      return (
                        <div
                          key={icon}
                          className="border-2 border-white/[0.2] rounded-full bg-slate-950 lg:w-10  lg:h-10  w-8 h-8 flex justify-center items-center "
                          style={{
                            transform: `translate(-${5 * index * 2}px)`,
                          }}
                        >
                          <img src={icon} alt={icon} className="p-2" />
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-center items-center ">
                    <Link
                      href={link}
                      target="_blank"
                      className="flex lg:text-xl md:text-xs text-sm text-purple "
                    >
                      Check Live Site
                    </Link>
                    <FaLocationArrow className="ms-3" color="#cbacf9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjects;
