/* eslint-disable prettier/prettier */

import { getUserSession } from "utils/supabase/get-user-session"

async function DashboardServer() {
  const user = await getUserSession()

  return (
    <section>
        {user !== null && (
        <h2 
          className="text-black text-4xl tracking-tighter font-bold text-center max-md:text-5xl mt-20">
          Welcome to your Dashboard, {user.user.user_metadata.full_name}
        </h2>
      )}
      {user === null && (
        <h2 
        className="text-black text-4xl tracking-tighter font-bold text-center max-md:text-5xl mt-20">
        You should login before access to your dashboard
      </h2>
      )}
    </section>
  )
}

export {DashboardServer}
