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
import Link from "next/link";

export default function AvatarComponent({avatar, username}: any) {
  const router = useRouter()
  const signOut = async () => {
    await SignOutSession()
    router.refresh()
  }

  const onChangeRoute = (route: string) => {
    router.push(route)
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
          <DropdownItem key="profile" onClick={() => onChangeRoute('/profile')}>
            Profile
          </DropdownItem>
          <DropdownItem key="dashboard" onClick={() => onChangeRoute('/dashboard')}>
            Dashboard
          </DropdownItem>
          <DropdownItem key="configurations">
            <Link color="foreground" href="/dashboard">Settings</Link>
          </DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={() => signOut()}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
