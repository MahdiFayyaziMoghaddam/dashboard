"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface Notif {
  id: string;
  imgSrc: string;
  title: string;
  desc: string;
}

interface INotifContext {
  notifs: Notif[];
  setNotifs: Dispatch<SetStateAction<Notif[]>>;
}

const NotifContext = createContext<INotifContext | null>(null);

export const NotifContextProvider = ({ children }: { children: ReactNode }) => {
  const [notifs, setNotifs] = useState<Notif[]>([
    {
      id: "1",
      title: "Error!",
      desc: "Something went wrong!",
      imgSrc: "/svg/notif.svg",
    },
  ]);
  return (
    <NotifContext.Provider value={{ notifs, setNotifs }}>
      {children}
    </NotifContext.Provider>
  );
};

export const useNotifContext = () => {
  return useContext(NotifContext) as INotifContext;
};
