"use client";
import Image from "@/components/atoms/Image";
import Bell from "@/components/atoms/svg/Bell";
import { Select as S } from "@base-ui-components/react";
import React from "react";

export default function Notification() {
  return (
    <S.Root>
      <S.Trigger
        className={`flex justify-between items-center gap-[1.2rem] duration-500 cursor-pointer select-none`}
        onFocus={(e) => e.target.blur()}
      >
        <button className="relative size-[2.5rem] select-none">
          <span className="absolute size-[1.6rem] rounded-full bg-main-red text-main-text text-[1.2rem] leading-[1.6rem] -top-[0.5rem] -right-[0.5rem]">
            6
          </span>
          <Bell
            primary="var(--color-main-primary)"
            secondary="var(--color-main-white)"
          />
        </button>
      </S.Trigger>
      <S.Portal>
        <S.Backdrop />
        <S.Positioner
          className="outline-none select-none z-10"
          alignItemWithTrigger={false}
          align="center"
          positionMethod="absolute"
          sideOffset={8}
        >
          <S.Popup className="py-[0.8rem] w-[25rem] h-[25.6rem] border-main-white/8 border-1 overflow-auto rounded-[1.4rem] shadow-2xs bg-main-box transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[side=none]:data-[ending-style]:transition-none data-[starting-style]:scale-90 data-[starting-style]:opacity-0 data-[side=none]:data-[starting-style]:scale-100 data-[side=none]:data-[starting-style]:opacity-100 data-[side=none]:data-[starting-style]:transition-none">
            {Array.from([1, 2, 3, 4, 5, 6, 8]).map((i) => (
              <S.Item
                key={i}
                className="flex items-center gap-[1.2rem] px-[2rem] py-[1.2rem] min-w-[var(--anchor-width)] cursor-pointer grid-cols-[0.75rem_1fr] leading-4 outline-none select-none group-data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] group-data-[side=none]:text-base group-data-[side=none]:leading-4 data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm hover:bg-main-white/5 pointer-coarse:py-2.5 pointer-coarse:text-[0.925rem]"
              >
                <Image
                  src="/svg/notif.svg"
                  alt="notif-img"
                  className="flex justify-center items-center size-[3.6rem] rounded-full shrink-0"
                />
                <div className="flex flex-col">
                  <p className="text-[1.5rem] leading-[1.6rem] line-clamp-1">
                    Error!
                  </p>
                  <p className="text-[1.3rem] leading-[1.4rem] text-main-text/50 line-clamp-1">
                    Something went wrong!
                  </p>
                </div>
              </S.Item>
            ))}
          </S.Popup>
        </S.Positioner>
      </S.Portal>
    </S.Root>
  );
}
