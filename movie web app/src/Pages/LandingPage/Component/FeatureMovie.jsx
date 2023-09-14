import React from 'react'
import "./FeatureMovie.css";
import IMD from "/imgs/IMDb.svg";
import Fruit from "/imgs/Fruit.svg";
import Header from "/imgs/headermovie.svg";
import {Link} from "react-router-dom"
// import Dashboard from '../../Dashboard/Dashboard';

const FeatureMovie = () => {
  return (
    <div>
    <div className="general">
        <div className="flex-feature">
            <h3>Featured Movies</h3>
            <p id="see">See more </p>
        </div>

        <div className="grid-movies">
        <Link to="/dashboard" >
        <div className="grid1" data-testid= "movie-card">
            {/* <a href = "/Dashboard.jsx"> */}
                <img id="movie-image" src={Header} alt="" data-testid= "movie-poster"/>
                {/* </a> */}
                <p id="date" data-testid= "movie-release-date">USA,2016 - Current</p>
                <h4 data-testid = "movie-title">Stranger Things</h4>
                <div className="flex-general2">
                        <div className="flex-aside2">
                            <img src={IMD} alt=""/>
                            <p id="rate">86.0 / 100</p>
                        </div>

                        <div className="flex-otherside2">
                        <img src={Fruit} alt=""/>
                            <p id="percent">97%</p>
                        </div>
                    </div>
                    <h3>Action, Adventure, Thriller</h3>
            </div>
            </Link>
            <Link to="/dashboard" >
        <div className="grid1" data-testid= "movie-card">
            {/* <a href = "/Dashboard.jsx"> */}
                <img id="movie-image" src={Header} alt="" data-testid= "movie-poster"/>
                {/* </a> */}
                <p id="date" data-testid= "movie-release-date">USA,2016 - Current</p>
                <h4 data-testid = "movie-title">Stranger Things</h4>
                <div className="flex-general2">
                        <div className="flex-aside2">
                            <img src={IMD} alt=""/>
                            <p id="rate">86.0 / 100</p>
                        </div>

                        <div className="flex-otherside2">
                        <img src={Fruit} alt=""/>
                            <p id="percent">97%</p>
                        </div>
                    </div>
                    <h3>Action, Adventure, Thriller</h3>
            </div>
            </Link>

            <Link to="/dashboard" >
        <div className="grid1" data-testid= "movie-card">
            {/* <a href = "/Dashboard.jsx"> */}
                <img id="movie-image" src={Header} alt="" data-testid= "movie-poster"/>
                {/* </a> */}
                <p id="date" data-testid= "movie-release-date">USA,2016 - Current</p>
                <h4 data-testid = "movie-title">Stranger Things</h4>
                <div className="flex-general2">
                        <div className="flex-aside2">
                            <img src={IMD} alt=""/>
                            <p id="rate">86.0 / 100</p>
                        </div>

                        <div className="flex-otherside2">
                        <img src={Fruit} alt=""/>
                            <p id="percent">97%</p>
                        </div>
                    </div>
                    <h3>Action, Adventure, Thriller</h3>
            </div>
            </Link>

            <Link to="/dashboard" >
        <div className="grid1" data-testid= "movie-card">
            {/* <a href = "/Dashboard.jsx"> */}
                <img id="movie-image" src={Header} alt="" data-testid= "movie-poster"/>
                {/* </a> */}
                <p id="date" data-testid= "movie-release-date">USA,2016 - Current</p>
                <h4 data-testid = "movie-title">Stranger Things</h4>
                <div className="flex-general2">
                        <div className="flex-aside2">
                            <img src={IMD} alt=""/>
                            <p id="rate">86.0 / 100</p>
                        </div>

                        <div className="flex-otherside2">
                        <img src={Fruit} alt=""/>
                            <p id="percent">97%</p>
                        </div>
                    </div>
                    <h3>Action, Adventure, Thriller</h3>
            </div>
            </Link>
        </div>

        <div className="grid-movies">
        <Link to="/dashboard" >
        <div className="grid1" data-testid= "movie-card">
            {/* <a href = "/Dashboard.jsx"> */}
                <img id="movie-image" src={Header} alt="" data-testid= "movie-poster"/>
                {/* </a> */}
                <p id="date" data-testid= "movie-release-date">USA,2016 - Current</p>
                <h4 data-testid = "movie-title">Stranger Things</h4>
                <div className="flex-general2">
                        <div className="flex-aside2">
                            <img src={IMD} alt=""/>
                            <p id="rate">86.0 / 100</p>
                        </div>

                        <div className="flex-otherside2">
                        <img src={Fruit} alt=""/>
                            <p id="percent">97%</p>
                        </div>
                    </div>
                    <h3>Action, Adventure, Thriller</h3>
            </div>
            </Link>
            
            <Link to="/dashboard" >
        <div className="grid1" data-testid= "movie-card">
            {/* <a href = "/Dashboard.jsx"> */}
                <img id="movie-image" src={Header} alt="" data-testid= "movie-poster"/>
                {/* </a> */}
                <p id="date" data-testid= "movie-release-date">USA,2016 - Current</p>
                <h4 data-testid = "movie-title">Stranger Things</h4>
                <div className="flex-general2">
                        <div className="flex-aside2">
                            <img src={IMD} alt=""/>
                            <p id="rate">86.0 / 100</p>
                        </div>

                        <div className="flex-otherside2">
                        <img src={Fruit} alt=""/>
                            <p id="percent">97%</p>
                        </div>
                    </div>
                    <h3>Action, Adventure, Thriller</h3>
            </div>
            </Link>

            <Link to="/dashboard" >
        <div className="grid1" data-testid= "movie-card">
            {/* <a href = "/Dashboard.jsx"> */}
                <img id="movie-image" src={Header} alt="" data-testid= "movie-poster"/>
                {/* </a> */}
                <p id="date" data-testid= "movie-release-date">USA,2016 - Current</p>
                <h4 data-testid = "movie-title">Stranger Things</h4>
                <div className="flex-general2">
                        <div className="flex-aside2">
                            <img src={IMD} alt=""/>
                            <p id="rate">86.0 / 100</p>
                        </div>

                        <div className="flex-otherside2">
                        <img src={Fruit} alt=""/>
                            <p id="percent">97%</p>
                        </div>
                    </div>
                    <h3>Action, Adventure, Thriller</h3>
            </div>
            </Link>

            <Link to="/dashboard" >
        <div className="grid1" data-testid= "movie-card">
            {/* <a href = "/Dashboard.jsx"> */}
                <img id="movie-image" src={Header} alt="" data-testid= "movie-poster"/>
                {/* </a> */}
                <p id="date" data-testid= "movie-release-date">USA,2016 - Current</p>
                <h4 data-testid = "movie-title">Stranger Things</h4>
                <div className="flex-general2">
                        <div className="flex-aside2">
                            <img src={IMD} alt=""/>
                            <p id="rate">86.0 / 100</p>
                        </div>

                        <div className="flex-otherside2">
                        <img src={Fruit} alt=""/>
                            <p id="percent">97%</p>
                        </div>
                    </div>
                    <h3>Action, Adventure, Thriller</h3>
            </div>
            </Link>
        </div>

        <div className="grid-movies">
        <Link to="/dashboard" >
        <div className="grid1" data-testid= "movie-card">
            {/* <a href = "/Dashboard.jsx"> */}
                <img id="movie-image" src={Header} alt="" data-testid= "movie-poster"/>
                {/* </a> */}
                <p id="date" data-testid= "movie-release-date">USA,2016 - Current</p>
                <h4 data-testid = "movie-title">Stranger Things</h4>
                <div className="flex-general2">
                        <div className="flex-aside2">
                            <img src={IMD} alt=""/>
                            <p id="rate">86.0 / 100</p>
                        </div>

                        <div className="flex-otherside2">
                        <img src={Fruit} alt=""/>
                            <p id="percent">97%</p>
                        </div>
                    </div>
                    <h3>Action, Adventure, Thriller</h3>
            </div>
            </Link>
            
            <Link to="/dashboard" >
        <div className="grid1" data-testid= "movie-card">
            {/* <a href = "/Dashboard.jsx"> */}
                <img id="movie-image" src={Header} alt="" data-testid= "movie-poster"/>
                {/* </a> */}
                <p id="date" data-testid= "movie-release-date">USA,2016 - Current</p>
                <h4 data-testid = "movie-title">Stranger Things</h4>
                <div className="flex-general2">
                        <div className="flex-aside2">
                            <img src={IMD} alt=""/>
                            <p id="rate">86.0 / 100</p>
                        </div>

                        <div className="flex-otherside2">
                        <img src={Fruit} alt=""/>
                            <p id="percent">97%</p>
                        </div>
                    </div>
                    <h3>Action, Adventure, Thriller</h3>
            </div>
            </Link>

            <Link to="/dashboard" >
        <div className="grid1" data-testid= "movie-card">
            {/* <a href = "/Dashboard.jsx"> */}
                <img id="movie-image" src={Header} alt="" data-testid= "movie-poster"/>
                {/* </a> */}
                <p id="date" data-testid= "movie-release-date">USA,2016 - Current</p>
                <h4 data-testid = "movie-title">Stranger Things</h4>
                <div className="flex-general2">
                        <div className="flex-aside2">
                            <img src={IMD} alt=""/>
                            <p id="rate">86.0 / 100</p>
                        </div>

                        <div className="flex-otherside2">
                        <img src={Fruit} alt=""/>
                            <p id="percent">97%</p>
                        </div>
                    </div>
                    <h3>Action, Adventure, Thriller</h3>
            </div>
            </Link>

            <Link to="/dashboard" >
        <div className="grid1" data-testid= "movie-card">
            {/* <a href = "/Dashboard.jsx"> */}
                <img id="movie-image" src={Header} alt="" data-testid= "movie-poster"/>
                {/* </a> */}
                <p id="date" data-testid= "movie-release-date">USA,2016 - Current</p>
                <h4 data-testid = "movie-title">Stranger Things</h4>
                <div className="flex-general2">
                        <div className="flex-aside2">
                            <img src={IMD} alt=""/>
                            <p id="rate">86.0 / 100</p>
                        </div>

                        <div className="flex-otherside2">
                        <img src={Fruit} alt=""/>
                            <p id="percent">97%</p>
                        </div>
                    </div>
                    <h3>Action, Adventure, Thriller</h3>
            </div>
            </Link>
        </div>
        
    </div>
    </div>
  )
}

export default FeatureMovie;