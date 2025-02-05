"use client";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useEffect, useState } from "react";
import animationData from "@/components/data/confetti.json";
import BorderMagicButton from "./BorderMagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  title,
  titleClassName,
  description,
  className,
  img,
  imgClassName,
  spareImg,
}: {
  id: number;
  title?: string | React.ReactNode;
  titleClassName?: string;
  className?: string;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  const [emailCopied, setEmailCopied] = useState(false);
  useEffect(() => {
    let handler = setTimeout(() => {
      if (emailCopied) {
        setEmailCopied(false);
      }
    }, 5000);
    return () => {
      clearTimeout(handler);
    };
  }, [emailCopied]);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("mrjeevan2000@gmail.com");
    setEmailCopied(true);
  };
  return (
    <div
      className={cn(
        `row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 lg:col-span-3 md:col-span-6 md:row-span-4 `,
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(to right, #0e0c39, #191641)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center "}  h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full "
            />
          )}
        </div>

        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans  font-extralight md:max-w-50 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-[99]">
            {description}
          </div>
          <div className="font-sans text-lg lg:text-3xl w-full font-bold z-50 ">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 ">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-5">
                {["React.js", "Next.js", "TypeScript"].map((ele, index) => {
                  return (
                    <span
                      key={index}
                      className="py-2 px-3 text-xs opacity-10 md:opacity-50 lg:opacity-80 rounded-lg text-center bg-[#10132e]"
                    >
                      {ele}
                    </span>
                  );
                })}
                <span className="py-2  px-3 text-xs  opacity-50 lg:opacity-80 rounded-lg text-center bg-white-100">
                  {" "}
                </span>
              </div>
              <div className="flex flex-col gap-3 lg:gap-5">
                <span className="py-2 px-3 text-xs opacity-50 lg:opacity-80 rounded-lg text-center bg-white-100">
                  {" "}
                </span>
                {["MongoDB", "Material-UI", "Tailwind"].map((ele, index) => {
                  return (
                    <span
                      key={index}
                      className="py-2 px-3 text-xs opacity-20 md:opacity-50 lg:opacity-80 rounded-lg text-center bg-[#10132e]"
                    >
                      {ele}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  emailCopied ? "block" : "block"
                }`}
              >
                {emailCopied && (
                  <Lottie
                    options={{
                      loop: 0,
                      autoplay: emailCopied,
                      animationData: animationData,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                      },
                    }}
                  />
                )}
              </div>

              <BorderMagicButton
                title={emailCopied ? "Email copied" : "Copy my Email"}
                icon={<IoCopyOutline />}
                position="LEFT"
                otherClasses="!bg-[#161a31]"
                handleClick={handleEmailCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
