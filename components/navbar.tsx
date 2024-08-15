/* eslint-disable prettier/prettier */

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/navbar";
import {Button} from '@nextui-org/button'
import {Link} from '@nextui-org/link'

export default function NavbarPage() {
    const menuItems = [
        "Perfil",
        "Dashboard",
        "Analytics",
        "Ajustes",
        "Help & Feedback",
        "Log Out",
      ];
    
      return (
        <Navbar>
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle />
          </NavbarContent>
    
          <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
¡              <h2 className="font-bold text-inherit">FinanTrack</h2>
            </NavbarBrand>
          </NavbarContent>
    
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarBrand>
              <h2 className="font-bold text-inherit">FinanTrack</h2>
            </NavbarBrand>
            <section className="ml-16 flex m-3">
            <NavbarItem className="m-3">
              <Link color="foreground" href="#">
                Inicio
              </Link>
            </NavbarItem>
            <NavbarItem className="m-3">
              <Link color="foreground" href="#">
                Sobre Nosotros
              </Link>
            </NavbarItem>
            <NavbarItem className="m-3">
              <Link color="foreground" href="#">
                Funcionalidades
              </Link>
            </NavbarItem>
            </section>
          </NavbarContent>
    
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link color="foreground" href="#">Iniciar sesión</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="warning" href="#" variant="flat">
                Registrarte
              </Button>
            </NavbarItem>
          </NavbarContent>
    
          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full"
                  color={
                    index === 2 ? "warning" : index === menuItems.length - 1 ? "foreground" : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      );
}

