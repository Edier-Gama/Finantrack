/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
"use client";

import { Link } from "@nextui-org/link";
import { NavbarItem } from "@nextui-org/navbar";

import { SignInWithGoogle } from "../utils/supabase/sign-in-with.google";

export default function NavbarLoginButtonClient({ user }: any) {
  // const sessionInfo = JSON.parse(user.value)
  // const avatar = sessionInfo.props.user.user_metadata.picture

  return (
      <section>
        {(user !== undefined) && (
          <section>
            <h2>Perfil</h2>
            {/* <Avatar isBordered className="cursor-pointer" color="default" src={avatar}/> */}
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