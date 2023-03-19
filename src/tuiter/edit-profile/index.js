import React, {useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {saveProf} from "../profile/profile-reducer";
import {Link} from "react-router-dom";


const EditProfileComponent = () => {
    const dispatch = useDispatch();
    const pArray = useSelector(
        (state) => state.profile);
    const [prof, setProf] = useState(pArray[0])


    const picEditHandler = () => {
        alert("Can't change picture! Not sure how to do that yet ¯\\_(ツ)_/¯")
    }

    const saveEditsHandler = () => {
        dispatch(saveProf(prof))
    }
    const newNameHandler = (val) =>{
        setProf({...prof, name: val})
    }
    const newBioHandler = (val) => {
        setProf({...prof, bio: val})
    }
    const newLocationHandler = (val) => {
        setProf({...prof, location: val})
    }
    const newWebsiteHandler = (val) => {
        setProf({...prof, website: val})
    }
    const newBdayHandler = (val) => {
        setProf({...prof, dateOfBirth: val})
    }
    return (
        <div>
            <div className="row">
                <div className="col-1">
                    <Link to="../profile">
                        <i className="bi bi-x-lg text-black fs-4"></i>
                    </Link>
                </div>
                <div className="col-7">
                    <span className="fw-bold fs-4">Edit Profile</span>
                </div>
                <div className="col-4">
                    <Link to="../profile">
                        <button
                            onClick={() => saveEditsHandler()}
                            className="btn btn-dark rounded-pill float-end mt-1 mb-2">
                            <span className="p-2">Save</span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-none d-md-block">
                    <div className="mb-5 position-relative">
                        <img src={prof.bannerPicture} className="w-100 wd-editing-img"/>
                        <a href="#" className="position-absolute wd-move-camera"
                           onClick={() => picEditHandler()}>
                            <div className="position-relative">
                                <i className="bi bi-circle-fill wd-circle-size"></i>
                                <i className="bi bi-camera-fill fs-2 wd-camera-size"></i>
                            </div>
                        </a>
                        <a href="#"  className="position-absolute wd-move-x"
                           onClick={() => picEditHandler()}>
                            <div className="position-relative">
                                <i className="bi bi-circle-fill wd-circle-size"></i>
                                <i className="bi bi-x-lg fs-2 wd-camera-size"></i>
                            </div>
                        </a>
                        <div className="position-relative">
                            <img src={prof.profilePicture} className="rounded-circle wd-profile-pic wd-nudge-up wd-editing-img"/>
                            <a href="#" className="position-absolute wd-move-camera-2"
                               onClick={() => picEditHandler()}>
                                <div className="position-relative">
                                    <i className="bi bi-circle-fill wd-circle-size"></i>
                                    <i className="bi bi-camera-fill fs-2 wd-camera-size"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-12 d-md-none">
                    <div className="mb-5 position-relative">
                        <img src={prof.bannerPicture} className="w-100 wd-editing-img"/>
                        <div className="position-relative">
                            <img src={prof.profilePicture} className="rounded-circle wd-profile-pic wd-nudge-up wd-editing-img"/>
                            <a href="#" className="position-absolute wd-move-camera-2"
                               onClick={() => picEditHandler()}>
                                <div className="position-relative">
                                    <i className="bi bi-circle-fill wd-circle-size"></i>
                                    <i className="bi bi-camera-fill fs-2 wd-camera-size"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="mt-2">
                <div className="mb-3 position-relative">
                    <label htmlFor="name" className="wd-label-nudge text-muted fs-6"> Name</label>
                    <input className="form-control pt-4 w-100"
                           value={prof.name}
                           id="name"
                           onChange={(event) => newNameHandler(event.target.value)}>
                    </input>
                </div>
                <div className="mb-3 position-relative">
                    <label className="wd-text-area-nudge text-muted fs-6" htmlFor="bio"> Bio</label>
                    <textarea className="form-control w-100 pt-4"
                              value={prof.bio}
                              id="bio"
                              onChange={(event) => newBioHandler(event.target.value)}>
                    </textarea>
                </div>
                <div className="mb-3 position-relative">
                    <label htmlFor="loc" className="wd-label-nudge text-muted fs-6"> Location</label>
                    <input className="form-control pt-4 w-100"
                           value={prof.location}
                           id="loc"
                           onChange={(event) => newLocationHandler(event.target.value)}>
                    </input>
                </div>
                <div className="mb-3 position-relative">
                    <label  htmlFor="web" className="wd-label-nudge text-muted fs-6"> Website</label>
                    <input className="form-control pt-4 w-100"
                           value={prof.website}
                           id="web"
                           onChange={(event) => newWebsiteHandler(event.target.value)}>
                    </input>
                </div>
                <div className="mb-3 position-relative">
                    <label htmlFor="bday" className="wd-label-nudge text-muted fs-6"> Birth Date</label>
                    <input type="date" className="form-control pt-4"
                           value={prof.dateOfBirth}
                           id="bday"
                           onChange={(event) => newBdayHandler(event.target.value)}>
                    </input>
                </div>
            </div>
        </div>

    );
}
export default EditProfileComponent;