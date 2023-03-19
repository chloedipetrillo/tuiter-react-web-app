import React from "react";
import {useDispatch} from "react-redux";
import {likeTuit, unlikeTuit} from "./tuits-reducer.js";

const TuitStats = (
    {
        posts

    }
) => {

    const dispatch = useDispatch()
    const likeHandler = (tuit) => {
        dispatch(likeTuit(tuit))
    }

    const unlikeHandler = (tuit) => {
        dispatch(unlikeTuit(tuit))
    }

    return(

        <div className="row mt-2 ps-4 pt-1 pb-1">
            <div className="col-3 override-col-padding">
                <i className="bi bi-chat wd-tuiter-gray"></i>
                <span className="wd-tuiter-gray wd-font-tiny"> {posts.replies.toLocaleString()}</span>
            </div>
            <div className="col-3 override-col-padding">
                <i className="bi bi-repeat wd-tuiter-gray"></i>
                <span className="wd-tuiter-gray wd-font-tiny"> {posts.retuits.toLocaleString()}</span>
            </div>
            {posts.liked ?
                <div className="col-3 override-col-padding">
                    <i onClick={() => unlikeHandler(posts)} className="bi bi-heart-fill wd-tuiter-color wd-like-color"></i>
                    <span className="wd-tuiter-gray wd-font-tiny"> {posts.likes.toLocaleString()}</span>
                </div> :
                <div className="col-3 override-col-padding">
                    <i onClick={() => likeHandler(posts)} className="bi bi-heart wd-tuiter-gray"></i>
                    <span className="wd-tuiter-gray wd-font-tiny"> {posts.likes.toLocaleString()}</span>
                </div>
            }
            <div className="col-3 override-col-padding">
                <i className="bi bi-upload wd-tuiter-gray"></i>
                <span className="wd-tuiter-gray" ></span>
            </div>
        </div>

    );
}
export default TuitStats;