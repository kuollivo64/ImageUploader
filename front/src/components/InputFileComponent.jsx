import React from "react";
import img_src from "./../assets/requirements/image.svg";
import "./../scss/InputFileComponent.scss";
export const InputFileComponent = ({
  fileInputRef,
  handleButtonClick,
  handleFileChange,
}) => {
  return (
    <div>
      <div className="file-drop-area">
        <img src={img_src} alt="no-imgae" srcSet="" />
        <span className="text_3">Drag & Drop your image here</span>
        <input
          className="file-input"
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>
      <div>
        <p className="text_3">Or</p>
        <button
          className="fake-btn text_button"
          type="button"
          id="custom-button"
          onClick={handleButtonClick}
        >
          Choose a file
        </button>
      </div>
    </div>
  );
};
