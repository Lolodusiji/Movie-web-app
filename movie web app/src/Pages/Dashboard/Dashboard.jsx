import React from "react";
import "./Dashboard.css";
import Sidebar from "../LandingPage/Component/Sidebar";
import Trailer from "/imgs/trailer.svg";
import Star from "/imgs/Rating.svg";
import Ticket from "/imgs/Two tickets.svg";
import List from "/imgs/List.svg";
// import ADs from "/imgs/best.svg";


const Dashboard = () => {
  return (
    <div>
      <div className="general">
        <Sidebar />
        <div className="trailer">
          <img id="trailer" src={Trailer} alt="" />
        </div>
        <div className="flex_details">
            <div className="left">
          <ul className="details">
            <li className="title" data-testid="movie-title">
                <h5>Assasin Creed </h5>
              {/* {movie.title} */}
            </li>
            <li data-testid="movie-release-date">
                <p>2020 *</p>
              {/* {date.getUTCFullYear().toString()} */}
            </li>
            <li data-testid="movie-runtime">
                {/* {movie.runtime & 60}m</li> */}
                <p>1hr 30mins</p>
                </li>
          </ul>
          <div className="minor">
            <div className="overview" data-testid="movie-overview">
              <h4>
                After thirty years, Maverick is still pushing the envelope as a
                top naval aviator, but must confront ghosts of his past when he
                leads TOP GUN's elite graduates on a mission that demands the
                ultimate sacrifice from those chosen to fly it.
              </h4>
              {/* {movie.overview} */}
            </div>
          </div>
          
          <div className="author_details">
        <h3 id="author">Director : <span id="ath">Joseph Kosinski</span></h3>
        <h3 id="author">Writers :  <span id="ath">Jim Cash, Jack Epps Jr,  Peter Craig</span></h3>
        <h3 id="author">Stars: <span id="ath">Tom Cruise, Jennifer Connelly, Miles Teller</span></h3>
          </div>
          </div> 

          <div className="button_side">
         <p id="paragraph"><img src={Star} alt=""/>8.5 | 350k</p>
         <button><img src={Ticket} alt=""/>See Showtimes</button>
         <button><img src={List} alt=""/> More option</button>
         {/* <div className="ad-image">
         <img id="Ads" src={ADs} alt=""/>
         </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
