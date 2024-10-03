/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */

'use client'
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";

import { addExtraData } from "./add-extra-data";

function FormDataComponent({user}: any) {
  const router = useRouter()

  function reload() {
    router.refresh()
  }

  return (
    <form 
       action={addExtraData}
       className="flex flex-col justify-left max-w-5xl m-auto mt-10"
    >
      <div className="m-5">
        <p className="text-black text-2xl tracking-tighter font-semibold">
          Welcome back {user.user_metadata.full_name}
        </p>
        <p className="text-black text-xl tracking-tighter">
          In order to track all your monthly expenses, we need to know this
          information about your bills
        </p>
      </div>
      <p className="text-black text-xl tracking-tighter m-5">
        This information must be in Dollars
      </p>
      <section className="justify-left max-w-5xl m-3 mt-10 flex flex-wrap">
        <div className="flex-col m-2">
          <p className="m-1 font-semibold">Current salary in USD</p>
          <Input className="w-60 max-w-80" label="Earnings" name="earnings" type="number"/>
        </div>
        <div className="flex-col m-2">
          <p className="m-1 font-semibold">Enter your savings</p>
          <Input className="w-60 min-w-80" label=" savings" name="savings" type="text"/>
        </div>
        <div className="flex-col m-2">
          <p className="m-1 font-semibold">Enter your debts</p>
          <Input className="w-60 min-w-80" label="Debts" name="debts" type="text" />
        </div>
      </section>
      <section className="m-5">
        <p className="m-1 font-semibold">
          All this information will be private, and Finantracks won't share
          anything anywhere
        </p>
        <Button 
          className="w-40 mt-3" 
          color="primary" 
          type="submit" 
          variant="shadow" 
          onClick={() => reload()}
        >
          <p>Send</p>
        </Button>
      </section>
    </form>
  );
}
export { FormDataComponent };
