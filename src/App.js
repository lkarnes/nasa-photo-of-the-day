import React from "react";
import "./App.css";
import HeaderComp from './Header.js';
import PhotoList from './PhotoList.js';
import styled from 'styled-components';

const Body = styled.div`
border-top: 15px solid #FC3D21;
padding-top: 20px;
background: black;
color: lightgrey;
`
const Application = styled.div`
background: black;
`;

function App() {
  return (
    <Application className="App">
      <HeaderComp/>
      <Body>
        <PhotoList/>
      </Body>
    </Application>
  );
}
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default App;
