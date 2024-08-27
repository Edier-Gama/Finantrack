/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
"use client";

import { Link } from "@nextui-org/link";
import { NavbarItem } from "@nextui-org/navbar";
import {Avatar} from "@nextui-org/avatar"


import { SignInWithGoogle } from "../utils/supabase/sign-in-with.google";

export default function NavbarLoginButtonClient({ session }: any) {
  const avatar = session.user_metadata.avatar_url

  return (
    <section>
      {(session != null) && (
              <Avatar isBordered className="cursor-pointer" color="default" src={avatar}/>
      )}
        {(session === null) && (
          <NavbarItem className="hidden lg:flex">
              <Link href="#" onClick={() => SignInWithGoogle()}>Login</Link>
          </NavbarItem>
        )}
    </section>
  );
}