import React from "react";

import ProgressBar from "@ramonak/react-progress-bar";

export const Progressbar = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <h6 className=""> Product Listed</h6>
        <h6 className="text-muted">2,356</h6>
      </div>
      <ProgressBar completed={100} customLabel="" />
    </>
  );
};
