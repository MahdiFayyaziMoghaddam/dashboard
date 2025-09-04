"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/atoms/Carousel";
import Image from "@/components/atoms/Image";
import Heart from "@/components/atoms/svg/Heart";
import Star from "@/components/atoms/svg/Star";
import { useEffect, useState } from "react";

interface ProductProps {
  imagesSrc?: string[];
  title: string;
  price: number;
  averageRate: 1 | 2 | 3 | 4 | 5;
  numberOfRate: number;
  isLiked?: boolean;
}

const Product = ({
  averageRate,
  imagesSrc = [],
  numberOfRate,
  price,
  title,
  isLiked = false,
}: ProductProps) => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentItem, setCurrentItem] = useState<number>(0);
  useEffect(() => {
    if (!api) return;

    const updateState = () => {
      setCurrentItem(api.selectedScrollSnap());
    };

    updateState();

    api.on("select", updateState);
    return () => {
      api.off("select", updateState);
    };
  }, [api]);
  return (
    <div className="rounded-[1.4rem] bg-main-box border-1 border-main-light/8 overflow-hidden shrink-0">
      {!!imagesSrc.length && (
        <Carousel setApi={setApi}>
          <CarouselContent>
            {imagesSrc.map((src, i) => (
              <CarouselItem key={i}>
                <Image
                  src={src}
                  alt={title}
                  className="size-full w-full aspect-[1.1/1]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={`text-main-text ${
              currentItem === 0 ? "opacity-50" : ""
            }`}
          />
          <CarouselNext
            className={`text-main-text ${
              currentItem >= imagesSrc.length - 1 ? "opacity-50" : ""
            }`}
          />
        </Carousel>
      )}
      <div className="flex justify-between items-start py-[1.8rem] pl-[2.2rem] pr-[1.8rem]">
        <div className="flex flex-col items-start gap-[0.8rem] max-w-[25rem]">
          <p className="text-[1.8rem] font-normal leading-[1] line-clamp-1">
            {title}
          </p>
          <p className="line-clamp-1 text-main-primary font-medium">
            ${price.toLocaleString("en-us")}
          </p>
          <div className="flex items-center gap-[0.2rem] mb-[1.2rem]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                primaryColor={i + 1 <= averageRate ? "#ff8743" : ""}
              />
            ))}
            <p className="ml-[0.2rem] text-main-light/70">({numberOfRate})</p>
          </div>
          <button className="bg-main-text/12 text-[1.4rem] leading-[2] py-[0.5rem] px-[2.2rem] font-medium rounded-[1.2rem]">
            Edit Product
          </button>
        </div>
        <button className="flex justify-center items-center size-[4.4rem] bg-main-light/10 rounded-full">
          <Heart primaryColor={isLiked ? "#f93c65" : ""} />
        </button>
      </div>
    </div>
  );
};

export default Product;
