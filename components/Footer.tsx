import React from "react";
import BorderMagicButton from "./ui/BorderMagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "./data/data";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full pt-20 pb-10 relative " id="contact">
      <div className="w-full overflow-hidden absolute top-0 bottom-0 ">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="heading lg:max-w-[45vw] ">
          Ready to <span className="text-purple">connect</span> and{" "}
          <span className="text-purple">collaborate</span> on{" "}
          <span className="text-purple">innovative</span> projects.
        </h2>
        <p className="text-white-200 md:mt-10 my-5 text-center ">
          Get in touch, and we&apos;ll make great things happen.
        </p>
        <a href="mailto:mrjeevan2000@gmail.com">
          <BorderMagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="RIGHT"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center ">
        <p className="md:text-base md:font-normal font-light">
          Copyright © 2024 Jeevan
        </p>
        <div className="flex items-center md:gap-3  gap-6 mt-5 md:mt-0">
          {socialMedia.map((item) => (
            <div
              key={item.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter background-blur-lg saturate-200 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a target="_blank" href={item.link}>
                <img src={item.img} alt="social media" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
