/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
"use client"
import { Link } from "@nextui-org/link";
import { NavbarItem } from "@nextui-org/navbar";

import { SignInWithGoogle } from "../utils/supabase/sign-in-with.google";

export default function NavbarLoginButtonClient({ user }: any) {
  const session = user

  return (
      <section>
        {(session !== null) && (
          <section>
            <h2>perfil not null</h2>
          </section>
        )}
        {(session === null) && (
          <section>
            <NavbarItem className="lg:flex">
              <Link href="#" onClick={() => SignInWithGoogle()}>Login</Link>
            </NavbarItem>
          </section>
        )}
      </section>
    );
}