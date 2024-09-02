/* eslint-disable prettier/prettier */
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import {Link} from '@nextui-org/link'


import NavbarLoginButtonServer from "./navbar-login-button-server";
export default function NavbarPage() { 
    return (
    <Navbar isBlurred={false} isBordered={true}>
      <NavbarBrand>
        <Link className="font-bold text-inherit cursor-pointer" href="/">Finantracks</Link>
        <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarItem>
          <Link className="ml-10" color="foreground" href="/">
            Home
          </Link>
          <Link className="ml-10" color="foreground" href="/dashboard">
            Dashboard
          </Link>
          <Link className="ml-10" color="foreground" href="/contact">
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

