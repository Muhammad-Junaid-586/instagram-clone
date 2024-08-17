import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LeftSide from "./Components/LeftSide";
import MiddleSide from "./Components/MiddleSide";
import RightSide from "./Components/RightSide";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app flex">
        <div className="leftSide hidden tablet:block tablet:w-[25%] desktop:w-[15%]  py-[30px] px-[10px]  border-r-[#e1e1e1] border-r-[1px]">
          <LeftSide />
        </div>
        <div className="middleSide w-[100%] tablet:w-[75%] laptop:w-[55%] ">
          <MiddleSide />
        </div>
        <div className="rightSide w-[30%] hidden laptop:block ">
          <RightSide />
        </div>
      </div>
    </>
  );
}

export default App;
