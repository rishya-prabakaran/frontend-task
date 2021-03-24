import React from 'react';
import "./Sidebarcontent.css";

function Sidebarcontent({ selected, Icon, title }) {
    return (
        <div className={`sidebarcontent ${selected && "selected"}`}>
            <Icon className="sidebarcontent__icon"/>
           <h2 className="sidebarcontent__title">{title}</h2>
        </div>
    );
}

export default Sidebarcontent