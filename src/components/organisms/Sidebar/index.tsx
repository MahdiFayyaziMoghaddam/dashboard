"use client";
import { useSidebarContext } from "@/context/Sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const { isOpenSidebar, setIsOpenSidebar } = useSidebarContext();

  useEffect(() => {
    const ctrl = new AbortController();
    window.addEventListener(
      "keydown",
      (e) => e.key === "Escape" && setIsOpenSidebar(false),
      { signal: ctrl.signal }
    );
    return () => ctrl.abort();
  }, [setIsOpenSidebar]);

  type DashboardLinks = {
    label: string | "DIVIDER";
    href?: string;
    onClick?: () => void;
  }[];

  const dashboardLinks: DashboardLinks = [
    { href: "/", label: "Dashboard" },
    { href: "/products", label: "Products" },
    { href: "/favorites", label: "Favorites" },
    { href: "/inbox", label: "Inbox" },
    { href: "/orders", label: "Order Lists" },
    { href: "/stock", label: "Product stock" },
    { label: "DIVIDER" },
    { label: "Pricing", href: "/pricing" },
    { label: "Calendar", href: "/calendar" },
    { label: "To-Do", href: "/todo" },
    { label: "Contact", href: "/contact" },
    { label: "Invoice", href: "/invoice" },
    { label: "UI Elements", href: "/ui-elements" },
    { label: "Team", href: "/team" },
    { label: "Table", href: "/table" },
    { label: "DIVIDER" },
    { href: "/settings", label: "Settings" },
    { label: "Logout", onClick: () => console.log("Logging out...") },
  ];

  return (
    <>
      <div
        className={`xl:hidden max-xl:fixed max-xl:top-0 max-xl:left-0 max-xl:bottom-0 max-xl:w-screen max-xl:bg-main-dark/85 ${
          !isOpenSidebar ? "max-xl:opacity-0 max-xl:-z-10" : "max-xl:z-40"
        }`}
        onClick={() => setIsOpenSidebar(false)}
      ></div>
      <aside
        className={`flex flex-col justify-start items-center w-[24rem] py-[2.4rem] bg-main-box overflow-auto max-h-screen max-xl:fixed max-xl:left-0 max-xl:z-50 duration-300 **:shrink-0 ${
          !isOpenSidebar ? "max-xl:-left-[24rem]!" : ""
        }`}
      >
        <Link
          href={"/"}
          className="text-[2rem] font-bold text-main-primary mb-[3rem]"
        >
          Dash<code className="text-main-text">board</code>
        </Link>
        {dashboardLinks.map((link, i) =>
          link.label === "DIVIDER" ? (
            <hr key={i} className="my-[1.6rem]" />
          ) : (
            <div
              key={i}
              className={`flex w-full px-[2.4rem] ${
                pathname === link.href
                  ? "border-l-[0.4rem] border-main-primary"
                  : ""
              }`}
            >
              <Link
                href={link.href ? link.href : "#"}
                onClick={() => {
                  link.onClick?.();
                  setIsOpenSidebar(false);
                }}
                className={`text-main-text w-full pl-[3.5rem] text-[1.4rem] ${
                  pathname === link.href ? "bg-main-primary" : ""
                } rounded-[0.6rem] py-[1.5rem] shrink-0`}
              >
                {link.label}
              </Link>
            </div>
          )
        )}
      </aside>
    </>
  );
};

export default Sidebar;
