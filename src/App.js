import React, { useEffect } from "react";
import { Typography, Input } from 'antd';
import "./App.css";

const { Title, Text } = Typography;
const { Search } = Input;

function App() {
  function handleSuccess(stream) {
    const audio = document.getElementById("base");
      audio.controls = true;
      audio.autoplay = true;
      window.stream = stream;
      audio.srcObject = stream;
      stream.oninactive = function () {
        console.log("Stream ended");}
  }

  useEffect(() => {
    if (navigator.mediaDevices) {
      const constraints = (window.constraints = {
        audio: true,
        video: false,
      });
      navigator.mediaDevices.getUserMedia(constraints).then((stm) => {
        handleSuccess(stm);
      });
    }
  }, []);
  return (
    <div className="App">
      <Title code>Karaoke by @ret7020</Title>
      <Text code>ReactJS + AntDesign + Gh Page</Text>
      <Text code>Source on GitHub: <Text strong>ret7020/SchoolKaraoke</Text></Text>
      <Search className="search" placeholder="Search karaoke version" enterButton addonBefore="караоке"/>
      
      <audio id="base" style={{display: "none"}}></audio>
    </div>
  );
}

export default App;
