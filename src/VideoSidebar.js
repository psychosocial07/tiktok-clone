import styled from 'styled-components';
import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MessageIcon from '@mui/icons-material/Message';

const VideoSidebar = ({likes,shares,messages}) => {
    const [liked,setLiked] = useState(false);
    let Value;
    if(!liked)
    {
        Value = <FavoriteBorderIcon onClick={e => setLiked(true)} fontSize='large'></FavoriteBorderIcon>
    }
    else
    {
        Value = <FavoriteIcon onClick={e => setLiked(false)} fontSize='large'></FavoriteIcon>
    }
    return (
        <StyleSiderbar>
            {Value}
            <LikeCount>{liked ? likes+1:likes}</LikeCount>
            <MessageIcon fontSize='large'></MessageIcon>
            <MessageCount>{messages}</MessageCount>
            <ShareIcon fontSize='large'></ShareIcon>
            <ShareCount>{shares}</ShareCount>
        </StyleSiderbar>
    )
}

const LikeCount = styled.p`
    margin-top:5%;
    padding-left:15%;
    margin-bottom:80%;
`;

const MessageCount = styled.p`
    margin-top:3%;
    padding-left:15%;
    margin-bottom:80%;
`;

const ShareCount = styled.p`
    margin-top:3%;
    padding-left:15%;
    margin-bottom:80%;
`;


const StyleSiderbar = styled.div`
    position:absolute;
    margin-left:85%;
    bottom:100px;
    color:white;
    display:flex;
    flex-direction:column;
`;

export default VideoSidebar;