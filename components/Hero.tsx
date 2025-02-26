import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="heroWrapper">
      <Image
        src={
          "https://res.cloudinary.com/martacloud/image/upload/v1740561839/cute_wizard_sgmqtq.png"
        }
        alt={"cute wizzard"}
        width={400}
        height={400}
      />
      <div className="hero">
        <h2>Welcome to code quizzer!</h2>
        <h3>
          Here you will be able to get ready for your Frontend Developer
          interview.
        </h3>
        <h3>How do you want to pratice today?</h3>
        <div className="btnWrapper">
          <Link href={"/quiz"}>
            <button className="btn">quiz</button>
          </Link>
          <Link href={"/flash-card"}>
            <button className="btn">flash cards</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
