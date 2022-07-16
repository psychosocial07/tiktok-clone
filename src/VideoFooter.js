import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from "react-ticker";

const VideoFooter = ({ channel, description, song }) => {
    return (
        <Styledvideofooter>
            <FooterText>
                <p><b>@{channel}</b></p>
                <p>{description}</p>
            </FooterText>
            <FooterDisp>
                <MusicNoteIcon></MusicNoteIcon>
                <StyleTicker>
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </StyleTicker>
            </FooterDisp>
            <VideoLogo>
                <VideoRecord height="40px" widht="40px" src="https://static.thenounproject.com/png/934821-200.png"></VideoRecord>
            </VideoLogo>
        </Styledvideofooter>
    )
}

const StyleTicker = styled.div`
    position:relative;
    bottom:40px;
    margin-left:9%;
    width:60%;
`;

const Styledvideofooter = styled.div`
    position:relative;
    bottom:200px;
    color:white;
    margin-left:5%;
    
`;

const FooterDisp = styled.div`
    margin-top:5%;
`;

const VideoLogo = styled.div`
  position:absolute;
  bottom:50px;
  margin-left:85%;
`;



const spinlogo = keyframes`
from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const VideoRecord = styled.img`
    animation:${spinlogo} infinite 5s linear;
`;

const FooterText = styled.div`
    display:flex;
    flex-direction:column; 
`;

export default VideoFooter;