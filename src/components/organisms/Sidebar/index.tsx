"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

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
      <aside className="flex flex-col justify-start items-center w-[24rem] py-[2.4rem] bg-main-box overflow-auto max-h-screen">
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
                onClick={link.onClick}
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
