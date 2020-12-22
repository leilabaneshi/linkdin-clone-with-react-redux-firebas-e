import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className=" sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );


    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://ngs-it.com/files/course/Backgrounds_in_CSS.jpg"
                    alt="" />
                <Avatar className='sidebar__avatar' />
                <h2>leila baneshi</h2>
                <h4>baneshi.leila@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>542</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>442</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('webdeveloper')}
                {recentItem('frontenddeveloper')}
                {recentItem('javascript')}




            </div>


        </div>
    )
}

export default Sidebar
