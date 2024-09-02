/* eslint-disable prettier/prettier */
import { getUserSession } from "utils/supabase/get-user-session";
import "@fontsource-variable/inter";


async function ProfilePageServer() {
  const user = await getUserSession();

  return (
    <section>
      {user !== null && (
        <section className="flex items-center max-w-4xl m-auto mt-32 md:justify-start justify-center">
          <img 
            alt="photo-profile" 
            className="rounded-full m-5" 
            height={100} 
            src={user.user_metadata.avatar_url}
            width={100}
          />
        <section className="flex flex-col m-3">
          <h2 
            className="text-black text-4xl tracking-tighter font-bold">
            {user.user_metadata.full_name}
          </h2>
          <p className="text-black">{user.user_metadata.email}</p>
        </section>
        </section>
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
