/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
"use client";

import { Button } from "@nextui-org/button";
import { Suspense } from "react";
import { googleLogo } from "public/google";
import { Link } from "@nextui-org/link";

import { SignInWithGoogle } from "../utils/supabase/sign-in-with.google";


export default function AuthButtonClient({ user }: any) {
  const session = user

  return (
    <section>
      {session !== null && (
        <Button 
        className="bg-white" 
        href="/dashboard" 
        variant="shadow"
        >
        <Link className="text-black bg-white font-bold" href='/dashboard'>Go to my dashboard</Link>
        </Button>
      )}
      {session === null && (
        <Suspense fallback={<div>Loading...</div>}>
           <Button 
           className="bg-white h-12" 
           href="#" 
           variant="shadow"
           onClick={async () => await SignInWithGoogle()}
           >
           <p className="text-black font-bold">Continue with Google</p>
           <section className="bg-white . p-0.5 rounded-full">
           {googleLogo}
           </section>
           </Button>
        </Suspense>
      )}
    </section>
  );
}
