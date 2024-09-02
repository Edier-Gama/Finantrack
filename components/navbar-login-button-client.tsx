/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
"use client"
import { Link } from "@nextui-org/link";
import { NavbarItem } from "@nextui-org/navbar";

import { SignInWithGoogle } from "../utils/supabase/sign-in-with.google";

import AvatarComponent from "./avatar";


export default function NavbarLoginButtonClient({ user }: any) {
  
  return (
      <section>
        {(user !== null) && (
          <section>
            <AvatarComponent 
               avatar={user.user_metadata.avatar_url} 
               username={user.user_metadata.full_name} 
            />
          </section>
        )}
        {(user === null) && (
          <section>
            <NavbarItem className="lg:flex text-white">
              <Link className="text-white" href="#" onClick={() => SignInWithGoogle()}>Login</Link>
            </NavbarItem>
          </section>
        )}
      </section>
    );
}