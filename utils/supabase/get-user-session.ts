/* eslint-disable prettier/prettier */
"use server";

import createSupabaseServerClient from "./server";

export async function getUserSession() {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getSession();
  
  return data.session;
}
