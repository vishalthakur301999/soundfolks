import React from 'react';
import BackgroundImage from '../soundfolksbg.jpg'
import Navigation from "./navigation";

export const HomePage = () => {
    return (
        <div>
            <Navigation activePage={"home"}/>
            <img src={BackgroundImage} alt="Background of a Headphone on a Mic" style={{height:"94vh", width:"100%" }}/>
        </div>
    );
};
