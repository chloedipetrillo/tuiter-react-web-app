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

        <div className="ms-3 d-flex justify-content-between wd-width">
            <div >
                <i className="bi bi-chat wd-tuiter-gray"></i>
                <span className="wd-tuiter-gray wd-font-tiny"> {posts.replies}</span>
            </div>

            <div >
                <i className="bi bi-repeat wd-tuiter-gray"></i>
                <span className="wd-tuiter-gray wd-font-tiny"> {posts.retuits}</span>
            </div>

            {posts.liked ?
                <div>
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...posts,
                        likes: posts.likes - 1,
                        liked:false
                    }))} className="bi bi-heart-fill wd-tuiter-color wd-like-color"></i>
                    <span className="wd-tuiter-gray wd-font-tiny"> {posts.likes}</span>
                </div> :
                <div >
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...posts,
                        likes: posts.likes + 1,
                        liked:true
                    }))} className="bi bi-heart wd-tuiter-gray"></i>
                    <span className="wd-tuiter-gray wd-font-tiny"> {posts.likes}</span>
                </div>
            }
            {posts.disliked ?
                <div >
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...posts,
                        dislikes: posts.dislikes - 1,
                        disliked:false
                    }))} className="bi bi-hand-thumbs-down-fill"></i>
                    <span className="wd-tuiter-gray wd-font-tiny"> {posts.dislikes}</span>
                </div> :
                <div >
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...posts,
                        dislikes: posts.likes + 1,
                        disliked:true
                    }))} className="bi bi-hand-thumbs-down wd-tuiter-gray"></i>
                    <span className="wd-tuiter-gray wd-font-tiny"> {posts.dislikes}</span>
                </div>
            }
            <div >
                <i className="bi bi-upload wd-tuiter-gray"></i>
                <span className="wd-tuiter-gray" ></span>
            </div>
        </div>

    );
}
export default TuitStats;