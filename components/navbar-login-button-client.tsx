/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
"use client"
import { Link } from "@nextui-org/link";
import { NavbarItem } from "@nextui-org/navbar";

import { SignInWithGoogle } from "../utils/supabase/sign-in-with.google";

import AvatarComponent from "./avatar";


export default function NavbarLoginButtonClient({ user }: any) {
  console.log(user);
  
  return (
      <section>
        {(user !== null) && (
          <section>
            <AvatarComponent 
               avatar={user.user.user_metadata.picture} 
               username={user.user.user_metadata.full_name} 
            />
          </section>
        )}
        {(user === null) && (
          <section>
            <NavbarItem className="lg:flex">
              <Link href="#" onClick={() => SignInWithGoogle()}>Login</Link>
            </NavbarItem>
          </section>
        )}
      </section>
    );
}