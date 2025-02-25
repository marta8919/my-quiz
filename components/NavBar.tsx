import Link from "next/link";
import { MagicWand } from "./Icons/magicWand";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="navbarWrapper">
      <Link href="/" className="homeLink">
        <MagicWand />
        <h1 className="title">code quizzer</h1>
      </Link>

      <div className="btnNavWrapper">
        {pathname === "/quiz" ? (
          <Link href="/flash-card">
            <button className="btn">Flashcards</button>
          </Link>
        ) : pathname === "/flash-card" ? (
          <Link href="/quiz">
            <button className="btn">Quiz</button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};
