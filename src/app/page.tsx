"use client";
import Select from "@/components/atoms/Select";
import DashboardBox from "@/components/molecules/DashboardBox";
import DealsTable from "@/components/molecules/DealsTable";
import LineChart from "@/components/molecules/LineChart";

export default function Home() {
  const dashboardBoxes = [
    {
      title: "Total User",
      from: "yesterday",
      imgSrc: "/svg/total-user.svg",
      percent: +8.5,
      value: "40,689",
    },
    {
      title: "Total Order",
      from: "past week",
      imgSrc: "/svg/total-order.svg",
      percent: 1.3,
      value: "10293",
    },
    {
      title: "Total Sales",
      from: "yesterday",
      imgSrc: "/svg/total-sales.svg",
      percent: -4.3,
      value: "$89,000",
    },
    {
      title: "Total Pending",
      from: "yesterday",
      imgSrc: "/svg/total-pending.svg",
      percent: 1.8,
      value: "2040",
    },
  ];
  return (
    <>
      <h1 className="mb-[2.7rem]">Dashboard</h1>
      <div className="flex flex-wrap items-center justify-between gap-[3rem] mb-[3rem]">
        {dashboardBoxes.map((box, i) => (
          <DashboardBox key={i} {...box} />
        ))}
      </div>
      <div className="w-full bg-main-box rounded-[1.4rem] p-[3.2rem] border-1 border-main-text/10 mb-[2.8rem]">
        <div className="flex items-center justify-between">
          <h2 className="text-[2.4rem] font-semibold">Sales Details</h2>
          <Select items={[{ label: "October", value: "oct" }]} />
        </div>
        <LineChart />
      </div>
      <div className="w-full bg-main-box rounded-[1.4rem] p-[3.2rem] border-1 border-main-text/10 mb-[2.8rem]">
        <div className="flex items-center justify-between">
          <h2 className="text-[2.4rem] font-semibold">Deals Details</h2>
          <Select items={[{ label: "October", value: "oct" }]} />
        </div>
        <DealsTable className="mt-[3.2rem]" />
      </div>
    </>
  );
}
