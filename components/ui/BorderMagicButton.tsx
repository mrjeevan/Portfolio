"use-client";
import React from "react";

type Props = {
  title: string;
  icon?: React.ReactNode;
  position?: "LEFT" | "RIGHT";
  handleClick?: () => void;
  otherClasses?: string;
};

const BorderMagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: Props) => {
  return (
    <button
      className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10 "
      onClick={handleClick}
      //   onClick={() => {
      //     handleClick && handleClick();
      //   }}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7  text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses} `}
      >
        {position === "LEFT" && icon}
        {title}
        {position === "RIGHT" && icon}
      </span>
    </button>
  );
};

export default BorderMagicButton;
