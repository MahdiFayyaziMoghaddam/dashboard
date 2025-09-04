import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/atoms/Carousel";
import React from "react";

export default function ProductEvents() {
  return (
    <Carousel className="mt-[2.3rem] rounded-[1.4rem] overflow-hidden">
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, i) => (
          <CarouselItem key={i} className="flex justify-center shrink">
            <div className="flex flex-col justify-start items-start gap-[0.8rem] w-full h-[34.6rem] overflow-hidden rounded-[1.4rem] bg-main-primary/90 pt-[5rem] pl-[13rem] select-none">
              <p className="leading-[2]">September 12-22</p>
              <p className="text-[3.7rem] leading-[1.5] font-extrabold">
                Enjoy free home <br /> delivery in this summer
              </p>
              <p className="mb-[2rem] leading-[1] text-main-text/80">
                Designer Dresses - Pick from trendy Designer Dress.
              </p>
              <button
                className="bg-main-orange font-medium text-[1.4rem] leading-[2] rounded-[1.1rem] py-[0.8rem] px-[3.5rem]"
                style={{ letterSpacing: 1 }}
              >
                Get Started
              </button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-main-box bg-main-text left-[1.8rem]" />
      <CarouselNext className="text-main-box bg-main-text right-[1.8rem]" />
    </Carousel>
  );
}
