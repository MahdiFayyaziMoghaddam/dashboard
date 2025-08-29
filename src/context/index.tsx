"use client";

import { LanguageContextProvider } from "@/context/Language";
import { NotifContextProvider } from "@/context/Notification";
import { SidebarContextProvider } from "@/context/Sidebar";
import { ReactNode } from "react";

export const ContextProviders = ({ children }: { children: ReactNode }) => {
  return (
    <LanguageContextProvider>
      <SidebarContextProvider>
        <NotifContextProvider>{children}</NotifContextProvider>
      </SidebarContextProvider>
    </LanguageContextProvider>
  );
};
