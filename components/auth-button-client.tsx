/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
"use client";

import { Button } from "@nextui-org/button";
import { Suspense } from "react";

import { SignInWithGoogle } from "../utils/supabase/sign-in-with.google";


export default function AuthButtonClient({ user }: any) {
  const session = user
  
  console.log(user);
  
  return (
    <section>
      {session !== null && (
        <Button 
        className="" 
        color="primary" 
        href="/dashboard" 
        variant="shadow"
        >
        <p className="text-white font-bold">Go to my dashboard</p>
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
           <img alt="" className="rounded-full"height={30} src="../google-logo.jpg" width={30}/>
           </Button>
        </Suspense>
      )}
    </section>
  );
}
