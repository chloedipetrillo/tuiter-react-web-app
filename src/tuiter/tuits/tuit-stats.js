import React from "react";
import {useDispatch} from "react-redux";
import {likeTuit, unlikeTuit} from "./tuits-reducer.js";
import {updateTuitThunk} from "../../services/tuits-thunks";
import "./index.css"

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

        <div className="ms-3 mt-2 mb-2 row">
            <div className="col-11">

            </div>
            <div className="col-2 override-col-padding">
                <i className="bi bi-chat text-muted"></i>
                <span className="text-muted wd-font-tiny"> {posts.replies}</span>
            </div>

            <div className="col-2 override-col-padding">
                <i className="bi bi-repeat text-muted"></i>
                <span className="text-muted wd-font-tiny"> {posts.retuits}</span>
            </div>

            {posts.liked ?
                <div className="col-2 override-col-padding">
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...posts,
                        likes: posts.likes - 1,
                        liked:false
                    }))} className="bi bi-heart-fill wd-tuiter-color wd-like-color"></i>
                    <span className="text-muted wd-font-tiny"> {posts.likes}</span>
                </div> :
                <div className="col-2 override-col-padding">
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...posts,
                        likes: posts.likes + 1,
                        liked:true
                    }))} className="bi bi-heart text-muted"></i>
                    <span className="text-muted wd-font-tiny"> {posts.likes}</span>
                </div>
            }

            {posts.disliked ?
                <div className="col-2 override-col-padding">
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...posts,
                        dislikes: posts.dislikes - 1,
                        disliked:false
                    }))} className="bi bi-hand-thumbs-down-fill "></i>
                    <span className="text-muted wd-font-tiny"> {posts.dislikes}</span>
                </div> :
                <div className="col-2 override-col-padding">
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...posts,
                        dislikes: posts.likes + 1,
                        disliked:true
                    }))} className="bi bi-hand-thumbs-down text-muted"></i>
                    <span className="text-muted wd-font-tiny"> {posts.dislikes}</span>
                </div>
            }

            <div className="col-2 override-col-padding">
                <i className="bi bi-upload text-muted"></i>
            </div>

        </div>

    );
}
export default TuitStats;