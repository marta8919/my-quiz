import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { MagicWand } from "./Icons/magicWand";

export const NavBar = ({ publicRoute }: { publicRoute: boolean }) => {
  return (
    <div className="navbarWrapper">
      <Link href="/" className="homeLink">
        <MagicWand />
        <h1 className="title">code quizzer</h1>
      </Link>
      {publicRoute ? null : (
        <SignOutButton>
          <button className="btn">Log out</button>
        </SignOutButton>
      )}
    </div>
  );
};
