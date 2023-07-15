import "./App.scss";
import { FooterPage } from "./components/FooterPage";
import { ImageUploader } from "./components/ImageUploader";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <ImageUploader />
      <FooterPage />
      <Toaster />
    </>
  );
}

export default App;
