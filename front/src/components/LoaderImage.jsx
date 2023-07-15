import React, { useState, useEffect } from "react";
import "./../scss/LoaderImage.scss";
export const LoaderImage = ( { progress_ = 0 } ) => {
  const [progress, setProgress] = useState(progress_);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress === 100) {
          clearInterval(interval);
          return 0;
        } else {
          return prevProgress + 1;
        }
      });
    }, 50);
    return () => clearInterval(interval);
  }, [])
  
  return (
    <div className="card_loader">
      <p className="text_loader">Uploading...</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};
