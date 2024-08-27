/* eslint-disable prettier/prettier */
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import {Link} from '@nextui-org/link'

import NavbarLoginButtonServer from "./navbar-login-button-server";

export default  function NavbarPage() { 
   
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
        <NavbarLoginButtonServer/>
      </NavbarContent>
    </Navbar>
      );
}

