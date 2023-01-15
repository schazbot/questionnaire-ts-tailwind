import React from "react";
type ProgressBarTypes = { percentComplete: number };

function ProgressBar({ percentComplete }: ProgressBarTypes) {
  return (
    <div className="bg-gray-200 h-2">
      <div
        className="bg-blue-600 h-2"
        style={{ width: `${percentComplete}%` }}
      ></div>
    </div>
  );
}
export default ProgressBar;
