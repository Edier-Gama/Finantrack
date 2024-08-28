/* eslint-disable prettier/prettier */
"use client"

import { useEffect, useState } from "react";

import { getUserSession } from "../utils/supabase/get-user-session";

import AuthButtonClient from "./auth-button-client";
export default function AuthButtonServer() {
  const [user, setUser]: any= useState()

  async function getSession(){
    const session = await getUserSession()

    return session
  }
  useEffect(() => {
    getSession().then((result) => setUser(result))
  }, [])
  
  if(user !== undefined){
    return <AuthButtonClient user={user} />
  }else{
    return <AuthButtonClient user={null} />
  }
}
