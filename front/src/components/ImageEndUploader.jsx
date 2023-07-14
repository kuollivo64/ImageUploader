import circle_ok from "./../assets/icon_ok.svg";
import "./../scss/ImageEndUploader.scss";
import { useState } from "react";
export const ImageEndUploader = () => {
  const [text, setText] = useState(
    "https://images.yourdomain.com/photo-1496950866446-325"
  );
  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Contenido copiado al portapapeles");
      })
      .catch((error) => {
        console.error("Error al copiar el contenido al portapapeles:", error);
      });
  };
  return (
    <div className="card">
      <div className="flex_content_main">
        <div className="flex_sub_content">
          <img src={circle_ok} alt="" srcSet="" />
          <p className="text_1"> Uploaded Successfully! </p>
        </div>
        <img src="" alt="no-image" srcSet="" className="img_source_upload" />
        <div className="box_copy">
          <p className="text_4">
            {text.length >= 53 ? text.slice(0, 53) + "..." : text}{" "}
          </p>
          <button className="button_copy" type="button" onClick={handleCopyClick}>
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
};
