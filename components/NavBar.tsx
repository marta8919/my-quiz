import Link from "next/link";
import { MagicWand } from "./Icons/magicWand";

export const NavBar = () => {
  return (
    <div className="navbarWrapper">
      <Link href="/" className="homeLink">
        <MagicWand />
        <h1 className="title">code quizzer</h1>
      </Link>

      <div className="btnNavWrapper">
        <Link href="/quiz">
          <button className="btn">Quiz</button>
        </Link>

        <Link href="/flash-card">
          <button className="btn">Flashcards</button>
        </Link>
      </div>
    </div>
  );
};
