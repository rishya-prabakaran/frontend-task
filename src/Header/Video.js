import React from 'react';
import './Video.css';

function Video({views, subs, description, timestamp, channel, title, image}) {
    return (
        <div className="video">
            <img src={image} alt=""/>
            <div className="video__text">
                <h3>{title}</h3>
                <p className="video__headline">
                    {channel} • {" "}
                    <span className="video__subs">
                        <span className="video__subsNumber">{subs}</span> Subscribers 
                    </span> {" "}
                    {views} views • {timestamp}
                </p>
                <p className="video__description">{description}</p>
            </div>
        </div>
    )
}

export default Video