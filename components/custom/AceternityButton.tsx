import React from "react";

type Props = { text: string };

const AceternityButton = ({ text }: Props) => {
  return (
    <span
      className="inline-flex h-10 md:h-12 items-center justify-center rounded-3xl border border-[#ffffff0f]  bg-[length:200%_100%] px-6 text-white  shadow-sm text-sm md:text-md lg:text-lg font-bold sm:py-1 md:py-2 "
      style={{ boxShadow: "#6000b599 0px 0px 10px 0px" }}
    >
      {text}
    </span>
  );
};
export default AceternityButton;
