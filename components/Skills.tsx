import React from "react";
import { skills } from "./data/data";
import AceternityButton from "./custom/AceternityButton";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="py-20" id="skills">
      <h1 className="heading">
        Tech stack behind my <span className="text-purple"> skills</span>.
      </h1>
      <div className="mt-10 md:p-4 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 ">
        {skills.map(({ title }, index) => {
          return <AceternityButton key={index} text={title} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
