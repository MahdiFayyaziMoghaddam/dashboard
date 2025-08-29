"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ISidebarContext {
  isOpenSidebar: boolean;
  setIsOpenSidebar: Dispatch<SetStateAction<boolean>>;
}

const SidebarContext = createContext<ISidebarContext | null>(null);

export const SidebarContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  return (
    <SidebarContext.Provider value={{ isOpenSidebar, setIsOpenSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  return useContext(SidebarContext) as ISidebarContext;
};
