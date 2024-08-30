/* eslint-disable prettier/prettier */
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import {Link} from '@nextui-org/link'


import NavbarLoginButtonServer from "./navbar-login-button-server";
export default function NavbarPage() { 
      return (
    <Navbar isBlurred={false} isBordered={true}>
      <NavbarBrand>
        <p className="font-bold text-inherit">Finantracks</p>
        <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarItem>
          <Link className="ml-10" color="foreground" href="#">
            Home
          </Link>
          <Link className="ml-10" color="foreground" href="#">
            Dashboard
          </Link>
          <Link className="ml-10" color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      </NavbarBrand>
      <NavbarContent justify="end">
           <NavbarLoginButtonServer/>
      </NavbarContent>
    </Navbar>
    );
}

