import React from "react";
import { workExperience } from "./data/data";
import { Button } from "@/components/ui/MovingBorder";
import { Timeline } from "./ui/Timeline";
type Props = {};

interface ITimelineEntry {
  title: string;
  content: React.ReactNode;
}
interface IWorkExperience {
  id: number;
  title: string;
  desc: string;
  date: string;
  company: string;
  className: string;
  thumbnail: string;
}

const Experience = (props: Props) => {
  return (
    <div className="py-20" id="experience">
      <h1 className="heading">
        My <span className="text-purple"> Work experience</span>
      </h1>
      <Timeline data={TimeLineData(workExperience)} />
    </div>
  );
};

export default Experience;

const TimeLineData = (workExperience: IWorkExperience[]): ITimelineEntry[] => {
  return workExperience.map(
    ({ title, desc, className, thumbnail, company, date }, index) => {
      return {
        title: `${date}`,
        content: (
          <Button
            key={index}
            className="flex-1 text-white border-neutral-200 dark:border-slate-800 cursor-default"
            duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={thumbnail}
                alt={desc}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {title}
                </h1>
                {/* <p className="text-start">{date}</p> */}
                <p className="text-start">{company}</p>
                <p className="text-start text-white-100 mt-3 font-semibold ">
                  {desc}
                </p>
              </div>
            </div>
          </Button>
        ),
      };
    }
  );
};
