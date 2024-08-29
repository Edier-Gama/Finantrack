/* eslint-disable prettier/prettier */


import NavbarLoginButtonClient from "./navbar-login-button-client";

export default function NavbarLoginButtonServer({user}) {
  return <NavbarLoginButtonClient user={user} />
}