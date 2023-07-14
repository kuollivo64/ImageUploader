import React from "react";
import "./../scss/CardUpload.scss";
import { InputFileComponent } from "./InputFileComponent";
export const CardUpload = () => {
  return (
    <>
      <div className="card">
        <div className="flex_content">
          <p className="text_1">Upload your image</p>
          <p className="text_2">File should be Jpeg, Png,...</p>
          <div className="content_text"></div>
          <InputFileComponent />
        </div>
      </div>
    </>
  );
};
