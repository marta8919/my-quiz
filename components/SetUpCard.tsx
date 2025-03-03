import { FlashSetUp, QuizSetUp } from "@/types";
import { Dispatch, SetStateAction, useState } from "react";
import Slider from "@mui/material/Slider";
// import { Switch } from "@mui/material";

export const SetUpCard = ({
  type,
  setQuizSetUp,
  total,
}: {
  type: "Quiz" | "Flash";
  setQuizSetUp: Dispatch<SetStateAction<boolean | QuizSetUp | FlashSetUp>>;
  total: number;
}) => {
  const handleGo = () => {
    setQuizSetUp({
      customLength: value,
      timer: false,
      seconds: 0,
    });
  };

  const [value, setValue] = useState<number>(total);
  //   const [timer, setTimer] = useState<boolean>(false);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  //   const handleTimerChange = () => {
  //     setTimer(!timer);
  //   };

  return (
    <div className="settingsWrapper">
      <h3>{type} settings</h3>
      <div className="sliderWrapper">
        Total length
        <div className="slider">
          <Slider
            aria-label="Questions"
            value={value}
            defaultValue={total}
            onChange={handleChange}
            min={1}
            max={total}
          />
          <p className="sliderLabel">
            {value == 1 ? `${value} question` : `${value} questions`}
          </p>
        </div>
      </div>
      {/* {type === "Quiz" ? (
        <div className="sliderWrapper">
          <div>
            Timer
            <Switch onChange={handleTimerChange} />
          </div>
        </div>
      ) : null} */}
      <button className="btn" onClick={handleGo}>
        Go
      </button>
    </div>
  );
};
