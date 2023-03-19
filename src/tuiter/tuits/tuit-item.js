import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = (
    {
        posts
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-11">
                    <div className="d-flex justify-content-lg-start">
                        <img className="rounded-circle wd-img" src={posts.image}/>
                        <div className="ps-3">
                            <span className="fw-bold">{posts.userName} <i className="bi bi-patch-check-fill wd-tuiter-color"></i></span>
                            <span className="ps-1 text-muted"> {posts.handle} • {posts.time} </span>
                            <div>{posts.tuit}</div>
                        </div>
                    </div>
                </div>
                <div className="col-1">
                    <div className="float-end text-secondary">
                        <i className="bi bi-x-lg"
                           onClick={() => deleteTuitHandler(posts._id)}></i>
                    </div>
                </div>
            </div>
            <div className="w-100 ps-5">
                <TuitStats posts={posts} />
            </div>

        </li>
    );
};

export default TuitItem;