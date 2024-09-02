/* eslint-disable prettier/prettier */

import { getUserSession } from "utils/supabase/get-user-session"
import {Input} from '@nextui-org/input'
async function DashboardServer() {
  const user = await getUserSession()

  return (
    <section>
      {user !== null && (
        <section>
          <div className="text-black flex flex-col items-center max-w-4xl m-auto mt-32 md:justify-start justify-center">
            <Input 
              className="text-black"
              classNames={{
              label: "text-black",
              innerWrapper: "bg-white text-black",
              input: [
                "text-black",
                "placeholder:text-black",
              ],
              }} 
                 label="Salary Per Month"
                 type="number"
                 variant="underlined"
              />
          </div>
        </section>
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
