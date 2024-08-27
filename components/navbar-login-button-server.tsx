/* eslint-disable prettier/prettier */

import { getUserSession } from "../utils/supabase/get-user-session";

import NavbarLoginButtonClient from "./navbar-login-button-client";
export default async function NavbarLoginButtonServer() {
    
  const session = await getUserSession()
  
  return (
    <section>
        <NavbarLoginButtonClient session={session} />
    </section>
  )
}