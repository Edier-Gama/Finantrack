/* eslint-disable prettier/prettier */

import { getUserSession } from "../utils/supabase/get-user-session";

import AuthButtonClient from "./auth-button-client";
export default async function AuthButtonServer() {
    
  const session = await getUserSession()
  
  return <AuthButtonClient session={session} />;
}
