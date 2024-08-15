import React from "react";

import NavbarPage from "../components/navbar";

export default function Home() {
  return (
    <main>
      <NavbarPage />
      <section className="relative flex justify-center items-center mt-52 max-w-screen-sm m-auto text-center">
        <h2 className="text-gray-700 text-5xl font-semibold">
          Organiza tus finanzas sin deudas ni sobrecostos
        </h2>
      </section>
    </main>
  );
}
