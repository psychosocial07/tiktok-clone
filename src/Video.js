import React from "react";
import styled from "styled-components";

const Video = () => { 
    return (
        <StyleVideo><h1>This is the Video</h1></StyleVideo>    
    );
}

const StyleVideo = styled.div`
    color:red;
    height:150px;
    width:100px;
`;


export default Video;