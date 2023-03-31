import React from "react";
import {useDispatch} from "react-redux";
import {likeTuit, unlikeTuit} from "./tuits-reducer.js";
import {updateTuitThunk} from "../../services/tuits-thunks";

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
                <span className="wd-tuiter-gray wd-font-tiny"> {posts.replies}</span>
            </div>

            <div className="col-3 override-col-padding">
                <i className="bi bi-repeat wd-tuiter-gray"></i>
                <span className="wd-tuiter-gray wd-font-tiny"> {posts.retuits}</span>
            </div>

            {posts.liked ?
                <div className="col-3 override-col-padding">
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...posts,
                        likes: posts.likes - 1,
                        liked:false
                    }))} className="bi bi-heart-fill wd-tuiter-color wd-like-color"></i>
                    <span className="wd-tuiter-gray wd-font-tiny"> {posts.likes}</span>
                </div> :
                <div className="col-3 override-col-padding">
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...posts,
                        likes: posts.likes + 1,
                        liked:true
                    }))} className="bi bi-heart wd-tuiter-gray"></i>
                    <span className="wd-tuiter-gray wd-font-tiny"> {posts.likes}</span>
                </div>
            }
            {posts.disliked ?
                <div className="col-3 override-col-padding">
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...posts,
                        dislikes: posts.dislikes - 1,
                        disliked:false
                    }))} className="bi bi-hand-thumbs-down-fill"></i>
                    <span className="wd-tuiter-gray wd-font-tiny"> {posts.dislikes}</span>
                    <div className="float-end">
                        <i className="bi bi-upload wd-tuiter-gray"></i>
                        <span className="wd-tuiter-gray" ></span>
                    </div>
                </div>
             :

                <div className="col-3 override-col-padding">
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...posts,
                        dislikes: posts.likes + 1,
                        disliked:true
                    }))} className="bi bi-hand-thumbs-down wd-tuiter-gray"></i>
                    <span className="wd-tuiter-gray wd-font-tiny"> {posts.dislikes}</span>
                <div className="float-end">
                <i className="bi bi-upload wd-tuiter-gray"></i>
                <span className="wd-tuiter-gray" ></span>
                </div>
                </div>

            }
            <div className="d-none col-2 override-col-padding">
                <i className="bi bi-upload wd-tuiter-gray"></i>
                <span className="wd-tuiter-gray" ></span>
            </div>
        </div>

    );
}
export default TuitStats;