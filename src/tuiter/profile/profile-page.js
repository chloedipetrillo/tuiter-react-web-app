import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../index.css";
import {Link} from "react-router-dom";


const format_bday = (dateOfBirth) => {
    const [year, m, day] = dateOfBirth.split("-");
    const date = new Date()
    date.setMonth(m-1)
    let month = date.toLocaleString('en-US', { month: 'long' });
    return month + " " + day + ", " + year
}

const format_date_joined = (joined) => {
    const [m, year] = joined.split("/");
    const date = new Date();
    date.setMonth(m - 1);
    let month = date.toLocaleString('en-US', { month: 'long' });
    return month + ", " + year
}


const ProfileOn = (
    {
        prof

    }
) => {

    return (

        <div>

            <div className="row">
                <div className="col-1">
                    <Link to="../home" className="text-decoration-none">
                        <i className="bi bi-arrow-left fs-4 text-black"></i>
                    </Link>
                </div>
                <div className="col-11">
                    <div className="fw-bold fs-5">{prof.name}</div>
                    <div className="text-muted fs-6">{prof.numTuits.toLocaleString()} Tuits</div>
                </div>
            </div>

            <div>
                <img src={prof.bannerPicture} className="w-100"/>
                <div className="position-relative">
                    <img src={prof.profilePicture} className="rounded-circle wd-profile-pic wd-nudge-up"/>
                    <Link to="../edit-profile" className="text-decoration-none">
                        <button className="float-end btn rounded-pill border-dark mt-2 me-2">Edit Profile</button>
                    </Link>
                </div>
            </div>
            <br></br>

            <div className="mt-5 wd-line-height ms-3">
                <div className="fw-bold fs-3">{prof.name}</div>
                <div className="text-muted">{prof.handle}</div>
            </div>
            <div className="row">
                <div className="col-11 mt-2 ms-3">
                    {prof.bio}
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-12 d-none d-md-block">
                    <div className="mt-2 d-flex justify-content-lg-start">
                        <div>
                    <span className="ms-3 text-muted">
                        <i className="bi bi-geo-alt pe-1"></i>
                        {prof.location}
                    </span>
                        </div>
                        <div>
                    <span className="ms-3 text-muted">
                        <i className="bi bi-balloon pe-1"></i>
                        Born  {format_bday(prof.dateOfBirth)}
                    </span>
                        </div>
                        <div>
                    <span className="ms-3 text-muted">
                        <i className="bi bi-calendar3 pe-1"></i>
                        Joined {format_date_joined(prof.dateJoined)}
                    </span>
                        </div>
                    </div>
                </div>
                <div className="col-12 d-md-none">
                    <div>
                        <div>
                    <span className="ms-3 text-muted">
                        <i className="bi bi-geo-alt pe-1"></i>
                        {prof.location}
                    </span>
                        </div>
                        <div>
                    <span className="ms-3 text-muted">
                        <i className="bi bi-balloon pe-2"></i>
                        Born  {format_bday(prof.dateOfBirth)}
                    </span>
                        </div>
                        <div>
                    <span className="ms-3 text-muted">
                        <i className="bi bi-calendar3 pe-2"></i>
                        Joined {format_date_joined(prof.dateJoined)}
                    </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-2 ms-3">
                <span className="fw-bold"> {prof.followingCount.toLocaleString()} </span> <span className="ms-1 text-muted me-3 ">Following</span>
                <span className="fw-bold"> {prof.followersCount.toLocaleString()
                } </span> <span className="ms-1 text-muted">Followers</span>
            </div>
        </div>

    );
}
export default ProfileOn;