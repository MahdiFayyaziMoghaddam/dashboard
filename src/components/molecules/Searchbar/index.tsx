import Search from "@/components/atoms/svg/Search";
import React from "react";

export default function Searchbar() {
  return (
    <div className="flex gap-[1rem] items-center bg-main-white/6 rounded-[1.9rem] overflow-hidden py-[0.9rem] px-[1.5rem] border-1 border-main-white/10">
      <Search primaryColor="var(--color-main-white)" />
      <input
        type="text"
        className="w-[38rem] text-[1.4rem] text-main-white/80"
        placeholder="Search"
      />
    </div>
  );
}
