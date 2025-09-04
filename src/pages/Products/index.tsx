import Product from "@/components/molecules/Product";
import React from "react";
import ProductEvents from "./ProductEvents";

export default function Products() {
  return (
    <>
      <h1>Products</h1>
      <ProductEvents />
      <div className="grid grid-cols-3 my-[3rem] gap-[3rem]">
        {Array.from({ length: 9 }).map((_, i) => (
          <Product
            key={i}
            averageRate={1}
            imagesSrc={[
              "/image/product.png",
              "/image/product.png",
              "/image/product.png",
            ]}
            numberOfRate={600}
            price={25}
            title={`Apple Watch Series ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}
