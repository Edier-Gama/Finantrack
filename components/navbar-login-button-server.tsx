/* eslint-disable prettier/prettier */
'use client'
import { useEffect, useState } from "react";

import { getUserSession } from "../utils/supabase/get-user-session";

import NavbarLoginButtonClient from "./navbar-login-button-client";
export default function NavbarLoginButtonServer() {
  const [user, setUser]: any = useState()

  async function getSession(){
      const session = await getUserSession()

      return session
  }
  
  useEffect(() => {
    getSession().then((result) => setUser(result))
  }, [])
  if(user !== undefined){
      return (
        <section>
            <NavbarLoginButtonClient user={user} />
        </section>
      )
  }
}