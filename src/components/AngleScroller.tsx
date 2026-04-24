import { Fragment } from "react";
import { elipse } from "../assets";

export const AngleScroller = () => {
  const scrollItems: string[] = [
    "CREATIVE DESIGN",
    "UI/UX",
    "MARKETING",
    "MOTION",
    "ANIMATION",
    "BRANDING",
  ];

  const List = ({ textColor }: { textColor: string }) => (
    <ul className={`flex items-center whitespace-nowrap shrink-0 ${textColor}`}>
      {scrollItems.map((item, index) => (
        <Fragment key={index}>
          <li className="font-roboto px-8 list-none">{item}</li>
          <img
            src={elipse}
            className="w-2.5 h-2.5 object-contain"
            alt=""
            aria-hidden="true"
          />
        </Fragment>
      ))}
    </ul>
  );

  return (
    <>
      {/*

    <div className="fixed -bottom-4 left-0 w-[110vw] h-18 bg-[#111] -rotate-8 origin-bottom-left overflow-hidden -z-50 -ml-[5vw] flex items-center">
      
      */}

      <div
        className="fixed bottom-118 -top-12  max-md:-top-24    left-[52%] -translate-x-[48%] w-[200vw] h-18 bg-white overflow-hidden z-0 max-sm:-z-30
      rotate-45 flex items-center"
      >
        <div className="flex animate-marquee ">
          <List textColor="text-black" />
          <List textColor="text-black" />
          <List textColor="text-black" />
          <List textColor="text-black" />
        </div>
      </div>
      <div className="fixed -bottom-4 left-0 w-[110vw] h-18 bg-[#111] -rotate-12 origin-bottom-left overflow-hidden z-0 -ml-[5vw] flex max-sm:-z-30 items-center">
        <div className="flex animate-marquee">
          <List textColor="text-white" />
          <List textColor="text-white" />
          <List textColor="text-white" />
          <List textColor="text-white" />
        </div>
      </div>
    </>
  );
};
