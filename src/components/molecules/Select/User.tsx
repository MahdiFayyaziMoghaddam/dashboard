"use client";
import Image from "@/components/atoms/Image";
import ArrowDown from "@/components/atoms/svg/ArrowDown";
import { Roles } from "@/types/roles";
import { Avatar, Select as S } from "@base-ui-components/react";
import React from "react";

interface UserSelectProps {
  name: string;
  role: Roles;
  imgSrc: string;
}

const User = ({ imgSrc, name, role }: UserSelectProps) => {
  const options = [
    { img: "/svg/manage-account.svg", title: "Manage Account" },
    { img: "/svg/change-password.svg", title: "Change Password" },
    { img: "/svg/activity-log.svg", title: "Activity Log" },
    { img: "/svg/log-out.svg", title: "Logout" },
  ];
  return (
    <S.Root>
      <S.Trigger
        className={`flex justify-between items-center gap-[1.6rem] duration-500 cursor-pointer select-none`}
        onFocus={(e) => e.target.blur()}
      >
        <Avatar.Root
          className={
            "flex items-center justify-center size-[4.4rem] rounded-full overflow-hidden bg-main-background text-main-text/50"
          }
        >
          <Avatar.Image src={imgSrc} />
          <Avatar.Fallback>{name[0].toUpperCase()}</Avatar.Fallback>
        </Avatar.Root>
        <div className="flex flex-col max-w-[10rem]">
          <p className="text-[1.4rem] font-bold line-clamp-1">{name}</p>
          <p className="text-[1.2rem] text-main-text/50">{role}</p>
        </div>
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
          <S.Popup className="py-[0.6rem] w-[20rem] overflow-hidden border-main-light/8 border-1 rounded-[1.4rem] shadow-2xs bg-main-box transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[side=none]:data-[ending-style]:transition-none data-[starting-style]:scale-90 data-[starting-style]:opacity-0 data-[side=none]:data-[starting-style]:scale-100 data-[side=none]:data-[starting-style]:opacity-100 data-[side=none]:data-[starting-style]:transition-none">
            {options.map(({ img, title }) => (
              <S.Item
                key={title}
                className="flex items-center justify-between p-[1.4rem] px-[2rem] min-w-[var(--anchor-width)] cursor-pointer grid-cols-[0.75rem_1fr] leading-4 outline-none select-none group-data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] group-data-[side=none]:text-base group-data-[side=none]:leading-4 data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm hover:bg-main-light/5 pointer-coarse:py-2.5 pointer-coarse:text-[0.925rem]"
              >
                <div className="flex items-center gap-[1.4rem]">
                  <Image
                    alt="icon"
                    src={img}
                    className="w-[1.7rem] h-[1.6rem] "
                  />
                  <S.ItemText className="col-start-2 text-[1.4rem]">
                    {title}
                  </S.ItemText>
                </div>
              </S.Item>
            ))}
          </S.Popup>
        </S.Positioner>
      </S.Portal>
    </S.Root>
  );
};

export default User;
