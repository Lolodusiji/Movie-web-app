import React from 'react'
import "./Dashboard.css";
import Sidebar  from '../LandingPage/Component/Sidebar';
import Trailer from "/imgs/trailer.svg";

const Dashboard = () => {
  return (
    <div>
        <div className="general">
        <Sidebar/>
            <div className="trailer">
                <img id="trailer" src={Trailer} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard