import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="w-full  border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <div className="flex-1">
          <ul className="flex justify-center gap-7 ml-38">
            
              <li className="font-medium text-gray-600 transition hover:font-bold">
                <NavLink href={'/'}>Home</NavLink>
              </li>
           
            <li className="font-medium text-gray-500 transition hover:font-bold">
             <NavLink href={'/about'}>about</NavLink>
            </li>
            <li className="font-medium text-gray-500 transition hover:font-bold">
              <NavLink href={'/career'}>career</NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/sign-in"
            className="font-medium text-gray-600 hover:text-red-600"
          >
            Login
          </Link>
          <Link href="/register">
            <Button className="rounded-md bg-gray-600 px-5 text-white hover:bg-red-700">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
