import React from 'react';
import './Post.css'
import InputOption from './InputOption'
import { Avatar } from '@material-ui/core';
import ThumbUpAltOutlineIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlineIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlineIcon from '@material-ui/icons/ShareOutlined';
import SendOutlineIcon from '@material-ui/icons/SendOutlined';

function Post({ name, description, message, photoUrl }) {
    return (
        <div className='post'>
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlineIcon} title='Like' color='gray' />
                <InputOption Icon={ChatOutlineIcon} title='Comment' color='gray' />
                <InputOption Icon={ShareOutlineIcon} title='Share' color='gray' />
                <InputOption Icon={SendOutlineIcon} title='Send' color='gray' />
            </div>
        </div>


    )
}

export default Post

