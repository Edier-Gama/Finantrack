/* eslint-disable prettier/prettier */


import NavbarLoginButtonClient from "./navbar-login-button-client";

export default async function NavbarLoginButtonServer({user}) {
  return <NavbarLoginButtonClient user={user} />
}