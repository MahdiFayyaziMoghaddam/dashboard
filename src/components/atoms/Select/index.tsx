"use client";
import { Select as S } from "@base-ui-components/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ArrowDown from "../svg/ArrowDown";
import Image from "../Image";

interface Item {
  label: string;
  value: string;
}

interface SelectProps {
  items: Item[];
  setValue?: Dispatch<SetStateAction<string>>;
}

const Select = ({ items, setValue }: SelectProps) => {
  const [state, setState] = useState(items[0]);
  useEffect(() => {
    setValue?.(state.value);
  }, [state]);
  return (
    <S.Root items={items}>
      <S.Trigger
        className={`flex justify-center items-center gap-[1.5rem] min-w-[7rem] h-[2.8rem] bg-main-text/8 border-1 border-main-text/10 py-[0.9rem] px-[1.4rem] rounded-[0.4rem] duration-500 cursor-pointer select-none data-[side=none]:*:bg-red-600!`}
        onFocus={(e) => e.target.blur()}
      >
        <p className="text-[1.2rem] leading-[2.8rem]">{state.label}</p>
        <div className="duration-150">
          <ArrowDown />
        </div>
      </S.Trigger>
      <S.Portal>
        <S.Backdrop />
        <S.Positioner
          className="outline-none select-none z-10"
          alignItemWithTrigger={false}
          align="center"
          positionMethod="absolute"
          sideOffset={6}
        >
          <S.Popup className="py-[0.4rem] min-w-[12rem] max-h-[11.6rem] overflow-auto bg-main-text/8 border-1 border-main-text/10 rounded-[0.4rem] shadow-main-dark/40 shadow transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[side=none]:data-[ending-style]:transition-none data-[starting-style]:scale-90 data-[starting-style]:opacity-0 data-[side=none]:data-[starting-style]:scale-100 data-[side=none]:data-[starting-style]:opacity-100 data-[side=none]:data-[starting-style]:transition-none">
            {items.map((item, i) => (
              <S.Item
                key={i}
                value={item.label}
                className="flex items-center justify-between shrink-0 gap-[1.5rem] py-[1rem] px-[1.4rem] cursor-pointer grid-cols-[0.75rem_1fr] leading-0 outline-none select-none group-data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] group-data-[side=none]:text-base group-data-[side=none]:leading-4 data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm hover:bg-main-light/15 pointer-coarse:py-2.5 pointer-coarse:text-[0.925rem]"
                onClick={() => setState(item)}
              >
                <S.ItemText className="col-start-2 text-[1.3rem]">
                  {item.label}
                </S.ItemText>

                {state.value === item.value ? (
                  <Image
                    alt="tick"
                    src={"/svg/white-tick.svg"}
                    className="w-[1.2rem] h-[0.8rem]"
                  />
                ) : (
                  <div className="w-[1.2rem] h-[0.8rem]"></div>
                )}
              </S.Item>
            ))}
          </S.Popup>
        </S.Positioner>
      </S.Portal>
    </S.Root>
  );
};

export default Select;
