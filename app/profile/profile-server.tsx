/* eslint-disable prettier/prettier */
import { getUserSession } from "utils/supabase/get-user-session";
import "@fontsource-variable/inter";


async function ProfilePageServer() {
  const user = await getUserSession();

  return (
    <section>
      {user !== null && (
        <h2 
          className="text-black text-4xl tracking-tighter font-bold text-center max-md:text-5xl mt-20">
          Welcome to your profile, {user.user.user_metadata.full_name}
        </h2>
      )}
      {user === null && (
        <h2 
        className="text-black text-4xl tracking-tighter font-bold text-center max-md:text-5xl mt-20">
        You should login before access to your profile
      </h2>
      )}
    </section>
  );
}


export {ProfilePageServer}
