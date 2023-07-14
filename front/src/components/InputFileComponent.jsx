import React, { useRef } from "react";
import img_src from "./../assets/requirements/image.svg";
import "./../scss/InputFileComponent.scss";
export const InputFileComponent = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const fileName = event.target.files[0].name;
    // Hacer algo con el archivo seleccionado
    console.log("Archivo seleccionado:", fileName);
  };
  return (
    <div>
      <div className="file-drop-area">
        <img src={img_src} alt="" srcSet="" />
        <span className="text_3">Drag & Drop your image here</span>
        <input className="file-input" type="file" ref={fileInputRef} onChange={handleFileChange} />
      </div>
      <div>
        <p className="text_3">Or</p>
        <button className="fake-btn text_button" type="button" id="custom-button" onClick={handleButtonClick}>
          Choose a file
        </button>
      </div>
    </div>
  );
};
