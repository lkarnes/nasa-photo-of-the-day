import React from "react";
import styled from 'styled-components';


const HeaderBox = styled.div`
    width: 90%;
    margin: 0 auto;
    color: #FC3D21;
    background: black;
    padding-bottom: 20px;
    `;
const Brand = styled.h1`
    font-size: 30px;
    color: MidnightBlue;
`;
export default function HeaderComp(){
    
    return(
    <HeaderBox>
        <Brand>Nasa Photo of the Day!</Brand>
        <h4>A webpage that uses NASAs API to pull every photo of the day!</h4>
    </HeaderBox>
    
    );
}