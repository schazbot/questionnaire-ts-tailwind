import React from "react";

type NavigationButtonTypes = {
  goPrevious: () => void;
  goNext: () => void;
  canAdvance: boolean;
};

const NavigationButtons = ({
  goPrevious,
  goNext,
  canAdvance,
}: NavigationButtonTypes) => {
  return (
    <div className="p-12">
      <button
        onClick={goPrevious}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded-full hover:bg-sky-600"
      >
        Previous
      </button>
      <button
        onClick={goNext}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded-full hover:bg-sky-600"
      >
        Next
      </button>
    </div>
  );
};
export default NavigationButtons;
