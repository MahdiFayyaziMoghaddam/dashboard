import Search from "@/components/atoms/svg/Search";
import React from "react";

export default function Searchbar() {
  return (
    <div className="flex gap-[1rem] items-center bg-main-light/6 rounded-[1.9rem] overflow-hidden py-[0.9rem] px-[1.5rem] border-1 border-main-light/10">
      <Search primaryColor="var(--color-main-light)" />
      <input
        type="text"
        className="w-[38rem] text-[1.4rem] text-main-light/80"
        placeholder="Search"
      />
    </div>
  );
}
