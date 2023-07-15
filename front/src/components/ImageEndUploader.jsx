import { toast } from "react-hot-toast";
import circle_ok from "./../assets/icon_ok.svg";
import "./../scss/ImageEndUploader.scss";
export const ImageEndUploader = ({ data }) => {
  const { url } = data;
  const handleCopyClick = () => {
    navigator.clipboard.writeText(url.replace(/^http:/, 'https:'));
    toast("Link Copy!", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };
  return (
    <div className="card">
      <div className="flex_content_main">
        <div className="flex_sub_content">
          <img src={circle_ok} alt="" srcSet="" />
          <p className="text_1"> Uploaded Successfully! </p>
        </div>
        <img src={url.replace(/^http:/, 'https:')} alt="no-image" srcSet="" className="img_source_upload" />
        <div className="box_copy">
          <p className="text_4">
            {url.length >= 53 ? url.replace(/^http:/, 'https:').slice(0, 53) + "..." : url.replace(/^http:/, 'https:')}{" "}
          </p>
          <button
            className="button_copy"
            type="button"
            onClick={handleCopyClick}
          >
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
};
