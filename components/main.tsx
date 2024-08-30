/* eslint-disable prettier/prettier */
import AuthButtonServer from "./auth-button-server";

export default function Main() {

  return (
    <main className="flex flex-col justify-start max-w-8xl animate-fade-in-up">
        <section className="relative flex flex-col mt-48 m-auto">
          <h2 className="text-black text-6xl tracking-tighter text-center max-md:text-5xl m-2">
            <b>
            Manage Your Income Effortlessly            
            </b>
          </h2>
          <section className="max-w-4xl text-center m-5">
          <p className="text-black text-xl font-semibold tracking-tighter">
            Fintracks is a web application that helps you keep your personal finances 
            organized, track every expense, and project your finances in the long term
          </p>
          </section>
        </section>
        <section className="relative flex mt-5 max-w-screen-sm m-auto">
            <AuthButtonServer/>
        </section>
    </main>
  );
}
