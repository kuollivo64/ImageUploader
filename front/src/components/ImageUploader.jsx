import React from "react";
import { CardUpload } from "./CardUpload";
import { LoaderImage } from "./LoaderImage";
import { ImageEndUploader } from "./ImageEndUploader";

export const ImageUploader = () => {
  return (
    <div>
      <CardUpload />
      <LoaderImage />  
      <ImageEndUploader />
    </div>
  );
};
