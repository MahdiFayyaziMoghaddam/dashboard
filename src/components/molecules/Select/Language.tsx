"use client";
import Image from "@/components/atoms/Image";
import ArrowDown from "@/components/atoms/svg/ArrowDown";
import { Select as S } from "@base-ui-components/react";
import React, { useState } from "react";

interface SelectProps {
  items: { label: string; value: string; flagSrc: string }[];
}

const Language = ({ items }: SelectProps) => {
  interface State {
    value: string;
    label: string;
    flagSrc: string;
  }
  const [state, setState] = useState<State>(items[0]);
  return (
    <S.Root items={items}>
      <S.Trigger
        className={`flex justify-between items-center gap-[1.2rem] duration-500 cursor-pointer select-none`}
        onFocus={(e) => e.target.blur()}
      >
        <Image
          alt="flag"
          src={state.flagSrc}
          className="w-[4rem] aspect-[1.48/1] rounded-[0.4rem] overflow-hidden"
        />
        <p className="text-[1.4rem]">{state.label}</p>
        <ArrowDown />
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
          <S.Popup className="p-[0.6rem] w-[25rem] border-main-white/8 border-1 rounded-[1.6rem] shadow-2xs bg-main-box transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[side=none]:data-[ending-style]:transition-none data-[starting-style]:scale-90 data-[starting-style]:opacity-0 data-[side=none]:data-[starting-style]:scale-100 data-[side=none]:data-[starting-style]:opacity-100 data-[side=none]:data-[starting-style]:transition-none">
            {items.map(
              ({ label, value, flagSrc = "/svg/english-flag.svg" }) => (
                <S.Item
                  key={label}
                  value={{ label, flag: "/svg/english-flag.svg" }}
                  className="flex items-center justify-between p-[1.4rem] rounded-[1rem] min-w-[var(--anchor-width)] cursor-pointer grid-cols-[0.75rem_1fr] leading-4 outline-none select-none group-data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] group-data-[side=none]:text-base group-data-[side=none]:leading-4 data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm hover:bg-main-white/5 pointer-coarse:py-2.5 pointer-coarse:text-[0.925rem]"
                  onClick={() => setState({ label, value, flagSrc })}
                >
                  <div className="flex items-center gap-[1.6rem]">
                    <Image
                      alt="flag"
                      src={flagSrc}
                      className="w-[4.8rem] h-[3.3rem] rounded-[0.2rem] overflow-hidden"
                    />
                    <S.ItemText className="col-start-2 text-[1.5rem]">
                      {label}
                    </S.ItemText>
                  </div>
                  {state.value === value ? (
                    <Image
                      alt="tick"
                      src={"/svg/white-tick.svg"}
                      className="w-[1.8rem] h-[1.3rem]"
                    />
                  ) : null}
                </S.Item>
              )
            )}
          </S.Popup>
        </S.Positioner>
      </S.Portal>
    </S.Root>
  );
};

export default Language;
