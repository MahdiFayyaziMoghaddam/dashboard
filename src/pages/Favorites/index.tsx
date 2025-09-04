import Product from "@/components/molecules/Product";
import React from "react";

export default function Favorites() {
  return (
    <>
      <h1>Favorites</h1>
      <div className="grid grid-cols-3 my-[3rem] gap-[3rem]">
        {Array.from({ length: 5 }).map((_, i) => (
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
            isLiked
          />
        ))}
      </div>
    </>
  );
}
