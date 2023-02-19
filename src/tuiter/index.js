import React from "react";
import ExploreComponent from "./explore/index.js";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import HomeComponent from "./home/index.js";
import PostSummaryList from "./post-summary-list/index.js";

function Tuiter() {
    return (

        <div className="row mt-2">
            <div className="col-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="Explore"/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6">
                <Routes>
                    <Route path="Home"    element={<HomeComponent/>}/>
                    <Route path="Explore" element={<ExploreComponent/>}/>
                    <Route path="/"    element={<ExploreComponent/>}/>
                </Routes>

            </div>
            <div className="col-4 d-none d-lg-inline">
                <Routes>
                    <Route path="Home"    element={<PostSummaryList/>}/>
                    <Route path="Explore" element={<WhoToFollowList/>}/>
                    <Route path="/"    element={<WhoToFollowList/>}/>
                </Routes>
            </div>
        </div>

    );
}

export default Tuiter
