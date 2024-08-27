/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
"use client";

import { Button } from "@nextui-org/button";

import { SignInWithGoogle } from "../utils/supabase/sign-in-with.google";


export default function AuthButtonClient({ user }: any) {
  
  return (
    <section>
      {(user != null) && (
        <Button 
        className="" 
        color="primary" 
        href="/dashboard" 
        variant="shadow"
        >
        <p className="text-white font-bold">Go to my dashboard</p>
        </Button>
      )}
      {(user == null) && (
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
      )}
    </section>
  );
}
