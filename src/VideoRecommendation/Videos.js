import React from 'react';
import './Videos.css';
import Avatar from '@material-ui/core/Avatar';

function Videos({ image, title, channel, views, timestamp, channelImage }) {
    return (
        <div className="videos">
            <img className="videos__thumbnail" src={image} alt=""/>
            <div className="videos__info">
                <Avatar 
                className="videos__avatar" 
                alt={channel} 
                src={channelImage} 
                />
                <div className="videos__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views}•{timestamp}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Videos