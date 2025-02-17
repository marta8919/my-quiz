import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { MagicWand } from "./Icons/magicWand";

export const NavBar = () => {
  return (
    <div className="navbarWrapper">
      <Link href="/" className="homeLink">
        <MagicWand />
        <h1 className="title">code quizzer</h1>
      </Link>
      <SignOutButton>
        <button className="btn">Log out</button>
      </SignOutButton>
    </div>
  );
};
