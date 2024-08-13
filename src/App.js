import React, { useEffect, useState } from "react";
import "./App.css";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import ProgressBar from "./components/ProgressBar";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";



function App() {
  
  const [selectedImg , setSelectedImg] = useState(null)

  return (
    <div className="app"> 
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
