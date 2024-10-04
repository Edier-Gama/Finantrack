/* eslint-disable prettier/prettier */


import { createClient } from "./client"

const SignInWithGoogle = async () => {
  const supabase = createClient();

  supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "https://finantracks.vercel.app/auth/callback",
    },
  });
};
const SignOutSession = async () => {

  const supabase = createClient();

  await supabase.auth.signOut()
};

export { SignInWithGoogle , SignOutSession};


