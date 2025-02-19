import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { MagicWand } from "./Icons/magicWand";

export const NavBar = ({
  publicRoute,
  createRoute,
  userType,
}: {
  publicRoute: boolean;
  createRoute: boolean;
  userType: string;
}) => {
  return (
    <div className="navbarWrapper">
      <Link href="/" className="homeLink">
        <MagicWand />
        <h1 className="title">code quizzer</h1>
      </Link>

      <div className="btnNavWrapper">
        {userType === "admin" && !createRoute ? (
          <Link href={"/create"}>
            <button className="btn">+ question</button>
          </Link>
        ) : null}
        {publicRoute ? null : (
          <SignOutButton>
            <button className="btn">Log out</button>
          </SignOutButton>
        )}
      </div>
    </div>
  );
};
