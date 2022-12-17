import React, { useEffect, useState } from "react";
import { Typography, Input, Table } from 'antd';
import { performSearch } from "./api";
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
        console.log("Stream ended");
      }
  }
  const resultTableColumns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Thumbnail',
      dataIndex: 'thumbnail',
      key: 'thumbnail'
    },
    {
      title: 'Open',
      dataIndex: 'open',
      key: 'open'
    }
  ];
  const [searchResults, setSearchResults] = useState();

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
  const searchButtonHandler = (e) => {
      if (e) {
        performSearch("караоке " + e, (results) => {
          setSearchResults(results);
        }, () => {});
      }
  }
  return (
    <div className="App">
      <Title code>Karaoke by @ret7020</Title>
      <Text code>ReactJS + AntDesign + Gh Page</Text>
      <Text code>Source on GitHub: <Text strong>ret7020/SchoolKaraoke</Text></Text>
      <Search className="search" placeholder="Search karaoke version" enterButton addonBefore="караоке" onSearch={searchButtonHandler}/>
      <Title code>Search results</Title>
      <Table columns={resultTableColumns} dataSource={searchResults}/>
      <audio id="base" style={{display: "none"}}></audio>
    </div>
  );
}

export default App;