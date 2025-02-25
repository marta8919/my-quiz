import Link from "next/link";
import { ConeIcon } from "./Icons/Cone";

export const WIP = () => {
  return (
    <div className="wipWrapper">
      <ConeIcon />
      <h3>Working on it. Coming up soon!</h3>
      <Link href="/quiz">
        <button className="btn">Take a quiz!</button>
      </Link>
    </div>
  );
};
