/* eslint-disable prettier/prettier */

import { createClient } from "./client"


const SignInWithGoogle = async () => {
  const supabase = createClient();

  supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/auth/callback",
    },
  });
};

export { SignInWithGoogle };



