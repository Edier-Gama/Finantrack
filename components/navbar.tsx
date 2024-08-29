/* eslint-disable prettier/prettier */
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import {Link} from '@nextui-org/link'

import { getUserSession } from "../utils/supabase/get-user-session";

import NavbarLoginButtonServer from "./navbar-login-button-server";

export async function getServerSideProps() {
  const user = await getUserSession();

  return {
    props: {
      user,
    },
  };
}

export default function NavbarPage() { 
   const user = getServerSideProps()

      return (
        <Navbar isBlurred={false} isBordered={true}>
      <NavbarBrand>
        <p className="font-bold text-inherit">Finantracks</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Functionalities
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
           <NavbarLoginButtonServer user={user}/>
      </NavbarContent>
    </Navbar>
      );
}

