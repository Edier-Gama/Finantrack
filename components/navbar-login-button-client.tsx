/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
"use client";

import { Link } from "@nextui-org/link";
import { NavbarItem } from "@nextui-org/navbar";
import {Avatar} from "@nextui-org/avatar"

import { SignInWithGoogle } from "../utils/supabase/sign-in-with.google";

export default function NavbarLoginButtonClient({ user }: any) {
  console.log(user);
  
  return (
    <section>
      {(user 
      ) && (
        <section>
          <Avatar isBordered className="cursor-pointer" color="default" src={user?.user_metadata.avatar_url}/>
        </section>
      )}
        {(!user) && (
          <NavbarItem className="hidden lg:flex">
              <Link href="#" onClick={() => SignInWithGoogle()}>Login</Link>
          </NavbarItem>
        )}
    </section>
  );
}