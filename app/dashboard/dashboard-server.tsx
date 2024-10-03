/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */

import { getUserSession } from "utils/supabase/get-user-session"
import createSupabaseServerClient from "utils/supabase/server"

import { FormDataComponent } from "./formdata"
async function DashboardServer() {
  const user = await getUserSession()
  const supabase = await createSupabaseServerClient()
  const userFinanceData = (await supabase.from('finance_data').select('*')).data

  if(userFinanceData !== null){
    const selectedData: any = userFinanceData.filter(element => element.user_id == user?.id)
        
    return (
      <section>
        {user !== null && (
          selectedData[0]?.earnings ? 
          <section className="flex-col flex max-w-5xl m-auto">
            <h2 className="text-black text-2xl tracking-tighter font-semibold m-5">Your bills are:</h2>
            <p className="text-black text-xl tracking-tighter m-5 -mt-3">
            This information is used to track your daily purchases and create a graph based on your current money
            </p>
            <section className="flex flex-wrap tracking-tighter m-2">
              <div className="flex-col m-3 w-60">
                <p>Total monthly earnings</p>
                <p className="font-bold">${selectedData[0].earnings} USD</p>
              </div>
              <div className="flex-col m-3 w-60">
                <p>Your total savings</p>
                <p className="font-bold">${selectedData[0].savings} USD</p>
              </div>
              <div className="flex-col m-3 w-60">
                <p>Your total debts</p>
                <p className="font-bold">${selectedData[0].debts} USD</p>
              </div>
            </section>
          </section>
          :
          <FormDataComponent user={user}/>
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

  
  
}

export {DashboardServer}
