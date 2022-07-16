import React, { useRef, useState } from "react";
import styled from "styled-components";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = ({url,channel,description,song,likes,shares,messages}) => { 

    const [playing,setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () =>
    {
        if(playing)
        {
            videoRef.current.pause();
            setPlaying(false);
        }
        else
        {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    return (
        <StyleVideo>
            <VideoPlayer 
            loop
            onClick={onVideoPress}
            ref={videoRef}
            src ={url}>
            </VideoPlayer>
            <VideoSidebar likes={likes} shares={shares} messages={messages}></VideoSidebar>
            <VideoFooter channel={channel} description={description} song={song}></VideoFooter>
        </StyleVideo>    
);
}

const VideoPlayer = styled.video`
    background-color:black;
    object-fit:fill;
    width:100%;
    height:100%;
`;

const StyleVideo = styled.div`
    position:relative;
    height:100%;
    width:100%;
    background-color:white;
    scroll-snap-align: start;
`;


export default Video;