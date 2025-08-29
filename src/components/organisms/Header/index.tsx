"use client";
import Image from "@/components/atoms/Image";
import Notification from "@/components/molecules/Notification";
import Searchbar from "@/components/molecules/Searchbar";
import { Language, User } from "@/components/molecules/Select";
import { useSidebarContext } from "@/context/Sidebar";
import React from "react";

export default function Header() {
  const { setIsOpenSidebar } = useSidebarContext();
  return (
    <header className="flex justify-between items-center gap-[3rem] absolute top-0 left-0 right-0 h-[7rem] bg-main-box px-[3rem]">
      <div className="flex items-center gap-[2.4rem]">
        <button className="xl:hidden" onClick={() => setIsOpenSidebar(true)}>
          <Image
            src="/svg/hamburger-menu.svg"
            alt="menu"
            className="size-[2.3rem]"
          />
        </button>
        <Searchbar />
      </div>

      <div className="flex items-center gap-[2.6rem]">
        <Notification />
        <Language
          items={[
            { label: "English", value: "en", flagSrc: "/svg/english-flag.svg" },
            { label: "French", value: "fr", flagSrc: "/svg/french-flag.svg" },
            { label: "Spanish", value: "es", flagSrc: "/svg/spanish-flag.svg" },
          ]}
        />
        <User imgSrc="/image/profile.jpg" name="Mahdi" role="Admin" />
      </div>
    </header>
  );
}
