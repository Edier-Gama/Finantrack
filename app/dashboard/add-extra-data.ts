/* eslint-disable prettier/prettier */
"use server";
import createSupabaseServerClient from "utils/supabase/server";
const addExtraData = async (formData: FormData) => {
  const earningsData = formData.get("earnings");
  const savingsData = formData.get("savings");
  const debtsData = formData.get("debts");

  if (earningsData === null) return;

  const supabase = await createSupabaseServerClient();
  const user = await supabase.auth.getUser();
  const userId = user.data.user?.id;
  const email = user.data.user?.user_metadata.email;

  await supabase.from("finance_data").insert({
    user_id: userId,
    earnings: earningsData,
    savings: savingsData,
    debts: debtsData,
    email: email,
  });
};


export {addExtraData}