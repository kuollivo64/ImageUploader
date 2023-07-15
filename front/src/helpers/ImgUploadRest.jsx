import { ApiImgUpload } from "../api/ImgUpload";

export const uploadImagePost = async (image) => {
  let data = null;
  var formData = new FormData();
  formData.append("image", image);
  await ApiImgUpload.post("image", formData).then((r) => {
    data = r.data;
  });
  return {
    data,
  };
};
