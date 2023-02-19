import React from "react";
import './index.css'
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (

    <>
        <div className="list-group border-0">
            <div className="list-group-item border-0">
                <Link to="/tuiter">
                    <div className="row">
                        <div className="col-2 wd-twitter-color wd-large-icon">
                            <i className="bi bi-twitter"></i>
                        </div>
                    </div>
                </Link>
            </div>
            <Link to="/tuiter/home/" className={`list-group-item list-group-item-action border-0
                ${active === 'home' ? 'active override-a' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <div className="position-relative">
                            {active === 'home' ? <i className="bi bi-house-door-fill"></i> :
                                <i className="bi bi-house-door"></i> }
                        </div>

                    </div>
                    <div className={`col-10 d-none d-xl-inline ps-3 ${active === 'home' ? 'fw-bold' : 'fw-light'}`}>
                        Home
                    </div>
                </div>
            </Link>


            <Link to="/tuiter/explore/" className={`list-group-item border-0 list-group-item-action ${active === 'explore' 
                || active === undefined ? 'active override-a' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-hash"></i>
                    </div>
                    <div className={`col-10 d-none d-xl-inline ps-3 ${active === 'explore' 
                        || active === undefined ? 'fw-bold' : 'fw-light'}`}>
                        Explore
                    </div>
                </div>
            </Link>
            <Link to="/" className={`list-group-item border-0 list-group-item-action
                ${active === 'notifications' ? 'active override-a' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-bell"></i>
                    </div>
                    <div
                        className={`col-10 d-none d-xl-inline ps-3 ${active === 'notifications' ? 'fw-bold' : 'fw-light'}`}>
                        Notifications
                    </div>
                </div>
            </Link>
            <Link to="/" className={`list-group-item border-0 list-group-item-action
                ${active === 'messages' ? 'active override-a' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-envelope"></i>
                    </div>
                    <div className={`col-10 d-none d-xl-inline ps-3 ${active === 'messages' ? 'fw-bold' : 'fw-light'}`}>
                        Messages
                    </div>
                </div>
            </Link>
            <Link to="/" className={`list-group-item border-0 list-group-item-action
                ${active === 'bookmarks' ? 'active override-a' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-bookmark"></i>
                    </div>
                    <div className={`col-10 d-none d-xl-inline ps-3 ${active === 'bookmarks' ? 'fw-bold' : 'fw-light'}`}>
                        Bookmarks
                    </div>
                </div>
            </Link>
            <Link to="/" className={`list-group-item border-0 list-group-item-action
                ${active === 'top articles' ? 'active override-a' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-fire"></i>
                    </div>
                    <div
                        className={`col-10 d-none d-xl-inline ps-3 ${active === 'top articles' ? 'fw-bold' : 'fw-light'}`}>
                        Top Articles
                    </div>
                </div>
            </Link>
            <Link to="/" className={`list-group-item border-0 list-group-item-action
                ${active === 'profile' ? 'active override-a' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-person"></i>
                    </div>
                    <div className={`col-10 d-none d-xl-inline ps-3 ${active === 'profile' ? 'fw-bold' : 'fw-light'}`}>
                        Profile
                    </div>
                </div>
            </Link>
            <Link to="/" className={`list-group-item border-0 list-group-item-action
                ${active === 'more' ? 'active override-a' : ''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="bi bi-three-dots"></i>
                    </div>
                    <div className={`col-10 d-none d-xl-inline ps-3 ${active === 'more' ? 'fw-bold' : 'fw-light'}`}>
                        More
                    </div>
                </div>
            </Link>
        </div>
        <button type="button" className="btn btn-primary w-100 mt-2 rounded-pill override-bs">
                    <span className="d-inline d-xl-none">
                        <i className="bi bi-plus-square"></i>
                    </span>

            <span className="d-none d-xl-inline">
                        Tuit
                    </span>
        </button>
    </>

    );
};
export default NavigationSidebar;

