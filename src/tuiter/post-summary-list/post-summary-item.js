import React from "react";
import {useLocation} from "react-router";
const PostSummaryItem = (
    {
        post
    }
) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return(
        <li className={`list-group-item d-flex justify-content-between ${active === 'home' ? 'override-lgi' : ''}`}>
            <div className="wd-padding-right">
                <div className="text-secondary">
                    {post.topic}
                </div>

                <div className="fw-bold">
                    {post.userName} <i className="bi bi-patch-check-fill"></i>
                    <span className="text-secondary fw-lighter ps-2">
                     - {post.time}
                </span>
                    <div>{post.title}</div>
                </div>
                <div className="text-secondary">
                    {post.replies > 0 ? `${post.replies} Tuits`: '' }
                </div>
            </div>
            <img className="float-end wd-tuit-images" src={post.image}/>


        </li>
    );
};
export default PostSummaryItem;