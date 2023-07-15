import React, { useRef, useState } from "react";
import { CardUpload } from "./CardUpload";
import { LoaderImage } from "./LoaderImage";
import { ImageEndUploader } from "./ImageEndUploader";
import { uploadImagePost } from "../helpers/ImgUploadRest";
import { toast } from "react-hot-toast";

export const ImageUploader = () => {
  const [loading, setloading] = useState("UNO");
  const [duration, setduration] = useState(0);
  const [data, setdata] = useState([]);
  let fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async () => {
    try {
      setloading("DOS");
      const file = fileInputRef.current.files[0];
      const data = await uploadImagePost(file);
      setduration(data.duration);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setdata(data.data);
      setloading("TRES");
      toast.success('Image Upload Successfully.');
    } catch (error) {
      toast.error("Error the image upload")
    }
  };

  return (
    <div>
      {loading == "UNO" ? (
        <CardUpload
          fileInputRef={fileInputRef}
          handleButtonClick={handleButtonClick}
          handleFileChange={handleFileChange}
        />
      ) : loading == "DOS" ? (
        <LoaderImage progress={duration / 10} />
      ) : loading == "TRES" ? (
        <ImageEndUploader data={data} />
      ) : (
        <CardUpload
          fileInputRef={fileInputRef}
          handleButtonClick={handleButtonClick}
          handleFileChange={handleFileChange}
        />
      )}
    </div>
  );
};
