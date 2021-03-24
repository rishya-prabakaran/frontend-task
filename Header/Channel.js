import React from 'react';
import './Channel.css';
import { Avatar } from "@material-ui/core"
import VerifiedIcon from '@material-ui/icons/CheckCircleOutline';

function Channel({image, channel, subs, noOfVideos, description, verified,}) {
    return (
        <div className="channel">
            <Avatar className="channel__logo" alt={channel} src={image} />
            <div className="channel__text">
                <h4>
                    { channel } {verified && <VerifiedIcon />}
                </h4>
                <p>
                    {subs} subscribers • {noOfVideos} videos
                </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Channel;