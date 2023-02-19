import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div class="col-11">
                    <div class="position-relative">
                        <input className="ps-5 form-control rounded-pill override-fc border-0"
                               placeholder="Search Tuiter"/>
                        <span class="wd-position-search-icon">
                            <i class="bi bi-search"></i>
                        </span>
                    </div>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 float-end bi
                       bi-gear fs-3 position-relative text-black"></i>
                </div>
            </div>

            <ul className="nav override-nav nav-tabs wd-tiny-padding override-nt pt-1">
                <li className="nav-item">
                    <a className="nav-link active override-nta fw-bold" href="#">For You</a>

                </li>
                <li className="nav-item">
                    <a className="nav-link fw-bold override-nl" href="#">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link fw-bold override-nl" href="#">News</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link fw-bold override-nl" href="#">Sports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link d-none d-md-block fw-bold override-nl"
                       href="#">Entertainment</a>
                </li>
            </ul>


            <div className="position-relative">
                <img className="img-fluid" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"/>
                    <div className="wd-text-over-pic">SpaceX's Starship</div>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;