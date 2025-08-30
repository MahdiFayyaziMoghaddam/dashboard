import Image from "@/components/atoms/Image";
import FallingArrow from "@/components/atoms/svg/FallingArrow";
import RisingArrow from "@/components/atoms/svg/RisingArrow";
import React from "react";

interface DashboardBoxProps {
  title: string;
  value: string;
  imgSrc: string;
  percent: number;
  from: string;
}

export default function DashboardBox({
  from,
  imgSrc,
  percent,
  title,
  value,
}: DashboardBoxProps) {
  return (
    <div className="flex flex-col gap-[3rem] grow shrink-0 bg-main-box rounded-[1.4rem] p-[1.6rem] border-1 border-main-text/10">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-[1.6rem]">
          <p className="text-[1.6rem] text-main-text/70">{title}</p>
          <p
            className="text-[2.8rem] leading-[1] text-main-text font-semibold"
            style={{ letterSpacing: "1px" }}
          >
            {value}
          </p>
        </div>
        <Image
          className="size-[6rem] rounded-[2.3rem] overflow-hidden"
          src={imgSrc}
          alt="dashboard-box-img"
        />
      </div>
      <div className="flex items-center gap-[0.8rem]">
        {percent < 0 ? <FallingArrow /> : <RisingArrow />}
        <p className="font-medium" style={{ wordSpacing: "2px" }}>
          <span
            className={`mr-[0.5rem] ${
              percent < 0 ? "text-main-red" : "text-main-green"
            }`}
          >
            {percent < 0 ? percent * -1 : percent}%
          </span>
          {percent < 0 ? "Down" : "Up"} from {from}
        </p>
      </div>
    </div>
  );
}
