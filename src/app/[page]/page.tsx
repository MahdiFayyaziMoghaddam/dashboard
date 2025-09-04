import Favorites from "@/pages/Favorites";
import Products from "@/pages/Products";
import type { Page as PageType } from "@/types/page";
import { notFound } from "next/navigation";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ page: PageType }>;
}) {
  const { page } = await params;

  switch (page) {
    case "products":
      return <Products />;
    case "favorites":
      return <Favorites />;
    case "inbox":
      return <h1>inbox!</h1>;
    case "calendar":
      return <h1>calendar!</h1>;
    case "contact":
      return <h1>contact!</h1>;
    case "invoice":
      return <h1>invoice!</h1>;
    case "orders":
      return <h1>orders!</h1>;
    case "pricing":
      return <h1>pricing!</h1>;
    case "settings":
      return <h1>settings!</h1>;
    case "stock":
      return <h1>stock!</h1>;
    case "table":
      return <h1>table!</h1>;
    case "team":
      return <h1>team!</h1>;
    case "todo":
      return <h1>todo!</h1>;
    case "ui-elements":
      return <h1>ui-elements!</h1>;

    default:
      notFound();
  }
}
