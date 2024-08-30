/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
"use client";

import { Button } from "@nextui-org/button";
import { Suspense } from "react";
import { googleLogo } from "public/google";

import { SignInWithGoogle } from "../utils/supabase/sign-in-with.google";


export default function AuthButtonClient({ user }: any) {
  const session = user

  return (
    <section>
      {session !== null && (
        <Button 
        className="" 
        color="primary" 
        href="/dashboard" 
        variant="shadow"
        >
        <a className="text-white font-bold" href='/dashboard'>Go to my dashboard</a>
        </Button>
      )}
      {session === null && (
        <Suspense fallback={<div>Loading...</div>}>
           <Button 
           className="" 
           color="primary" 
           href="#" 
           variant="shadow"
           onClick={async () => await SignInWithGoogle()}
           >
           <p className="text-white font-bold">Continue with Google</p>
           <section className="bg-white . p-0.5 rounded-full">
           {googleLogo}
           </section>
           </Button>
        </Suspense>
      )}
    </section>
  );
}
