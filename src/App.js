import React, { useEffect, useState } from "react";
import Video from "./Video";
import styled from "styled-components";
import "./App.css";
import db from "./firebase";



function App() {
  const [videos,setVideos] = useState([]);
  
  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot => {
        setVideos(snapshot.docs.map(doc => doc.data())
      )
    })
  }, [])
  return(
    <StyleApp>
      <AppVideo>
        {videos.map(
          ({ url,channel,description,song,likes,shares,messages}) =>(
            <Video
                url={url}
                channel={channel}
                description={description}
                likes={likes}
                messages={messages}
                shares={shares}
                song={song}
            />
          ))
          }        
        
        </AppVideo> 
        </StyleApp>
  );
}

const StyleApp = styled.div`
  background-color:black;
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const AppVideo = styled.div`
  position:relative;
  height:800px;
  border-radius:20px;
  background-color:black;
  overflow:scroll; 
  width:80%;
  max-width:500px;
  scroll-snap-type: y mandatory;
  -ms-overflow-style:none;
  scrollbar-width:none;
  &::-webkit-scrollbar
  {
    display:none;
  }
`;

export default App;
