import React, { useState } from "react";
import "./App.css";
import NavigationButtons from "./components/NavigationButtons";

import Greeting from "./components/Greeting";
import ProgressBar from "./components/ProgressBar";
import Checkbox from "./components/Checkbox";
import Radio from "./components/Radio";

function App() {
  const [index, setIndex] = useState(0);
  const maxIndex = 2;
  const goPrevious = () => index >= 1 && setIndex(index - 1);
  const goNext = () => index < maxIndex && setIndex(index + 1);
  let percentComplete = (index / maxIndex) * 100;
  const finish = () => {
    // show answers here
    goNext();
  };
  let canAdvance = true;
  const slides = [<Greeting />, <Radio />, <Checkbox />];

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white overflow-hidden">
      <div className="w-screen h-screen bg-white">
        <div
          className="w-screen h-screen flex-none overflow-auto w-full h-full m-auto px-8 pb-20 pt-40 md:pt-24 max-width: 28rem
        "
        >
          <ProgressBar {...{ percentComplete }} />
          {index > 0 ? (
            <h4>
              Question {index} of {maxIndex}
            </h4>
          ) : null}

          {slides[index]}
          <NavigationButtons {...{ goPrevious, goNext, canAdvance }} />
        </div>
      </div>
    </div>
  );
}

export default App;
