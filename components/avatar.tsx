/* eslint-disable prettier/prettier */
"use client"
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import { SignOutSession } from "utils/supabase/sign-in-with.google";
import { useRouter } from "next/navigation";

export default function AvatarComponent({avatar, username}: any) {
  const router = useRouter()
  const signOut = async () => {
    await SignOutSession()
    router.refresh()
  }

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src={avatar}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Welcome back</p>
            <p className="font-semibold">{username}</p>
          </DropdownItem>
          <DropdownItem key="team_settings">Dashboard</DropdownItem>
          <DropdownItem key="analytics">About</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={() => signOut()}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
