import React from "react";
import ExploreComponent from "./explore/index.js";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import HomeComponent from "./home/index.js";
import PostSummaryList from "./post-summary-list/index.js";
import Nav from "../nav.js";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./profile/profile-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileComponent from "./profile";
import EditProfileComponent from "./edit-profile";

const store = configureStore(
    {reducer: {who: whoReducer, tuitsData: tuitsReducer, profile: profileReducer}});


function Tuiter() {
    return (
        <Provider store={store}>

        <div className="row">
            <span className="mb-4"><Nav/> </span>
            <div className="col-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="Explore"/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6">
                <Routes>
                    <Route path="Home"    element={<HomeComponent/>}/>
                    <Route path="Explore" element={<ExploreComponent/>}/>
                    <Route path="Profile" element={<ProfileComponent/>}/>
                    <Route path="edit-profile" element={<EditProfileComponent/>}/>
                    <Route index element={<ExploreComponent/>}/>
                </Routes>

            </div>
            <div className="col-4 d-none d-lg-inline">
                <WhoToFollowList/>
            </div>
        </div>
        </Provider>
    );
}

export default Tuiter
