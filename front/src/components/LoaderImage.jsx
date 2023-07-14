import React from "react";
import "./../scss/LoaderImage.scss";
export const LoaderImage = ( { progress = 0 } ) => {
  return (
    <div className="card_loader">
      <p className="text_loader">Uploading...</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};
