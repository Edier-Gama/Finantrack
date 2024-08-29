/* eslint-disable prettier/prettier */

import { getUserSession } from "../utils/supabase/get-user-session";

import NavbarLoginButtonClient from "./navbar-login-button-client";
export default async function NavbarLoginButtonServer() {
  const user = await getUserSession()

  return <NavbarLoginButtonClient user={user} />
}