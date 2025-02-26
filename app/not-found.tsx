import { Fish } from "@/components/Icons/Fish";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="page">
      <div className="overlayCard">
        <Fish />
        <h3>You seem lost!</h3>
        <h4>Where are you trying to go?</h4>
        <div className="btnWrapper">
          <Link href={"/quiz"}>
            <button className="lightBtn">Quiz</button>
          </Link>
          <Link href={"/flash-card"}>
            <button className="lightBtn">Flash card</button>
          </Link>
          <Link href={"/"}>
            <button className="lightBtn">Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
