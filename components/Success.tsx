import Link from "next/link";

export const Success = () => {
  return (
    <div className="overlay">
      <div className="overlayCard">
        <h3>Your question was created successfully!</h3>
        <h4>What do you want to do next?</h4>
        <div className="btnWrapper">
          <Link href={"/quiz"}>
            <button className="lightBtn">Quiz</button>
          </Link>
          <Link href={"/flash-card"}>
            {" "}
            <button className="lightBtn"> Flash card</button>
          </Link>
          <Link href={"/create"}>
            {" "}
            <button className="lightBtn">+ Question</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
