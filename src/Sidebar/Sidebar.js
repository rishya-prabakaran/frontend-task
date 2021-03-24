import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutLinedIcon from "@material-ui/icons/ThumbUpAlt";
import ExpandMoreOutLinedIcon from "@material-ui/icons/ExpandMore";
import Sidebarcontent from './Sidebarcontent';
import './Sidebar.css';

function Sidebar() {
    return (
       <div className="sidebar">
            <Sidebarcontent selected Icon={HomeIcon} title="Home"  />
            <Sidebarcontent Icon={WhatshotIcon}title="Trending" />
            <Sidebarcontent Icon={SubscriptionsIcon} title="Subscription" />
            <hr/>
            <Sidebarcontent Icon={VideoLibraryIcon} title="Library" />
            <Sidebarcontent Icon={HistoryIcon} title="History" />
            <Sidebarcontent Icon={OndemandVideoIcon} title="Your Videos" />
            <Sidebarcontent Icon={WatchLaterIcon} title="Watch Later" />
            <Sidebarcontent Icon={ThumbUpAltOutLinedIcon} title="Liked video" />
            <Sidebarcontent Icon={ExpandMoreOutLinedIcon} title="Show more" />
            <hr/>
        </div>
    )
}

export default Sidebar