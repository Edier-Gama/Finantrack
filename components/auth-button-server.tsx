/* eslint-disable prettier/prettier */

import AuthButtonClient from "./auth-button-client";

export default function AuthButtonServer({ user }) {
  return (
    <section>
      <AuthButtonClient user={user} />
    </section>
  );
}
