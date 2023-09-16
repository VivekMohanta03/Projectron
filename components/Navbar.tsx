import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/logo.png";
import Button from "./Button";
import { NavLinks } from "@/constant/Index";
import AuthProviders from "./AuthProviders";
const navbar = async () => {
  const session = {};
  return (
    <nav className="flexBetween navbar border-nav-border">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src={logo} width={116} height={43} alt="logo" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session ? (
          <>
            userphoto
            <Link href="/create-project">New Project</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default navbar;
