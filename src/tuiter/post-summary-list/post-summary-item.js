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

                <div class="fw-bold">
                    {post.userName} <i class="bi bi-check-circle-fill"></i>
                    <span class="text-secondary fw-lighter ps-2">
                     - {post.time}
                </span>
                    <div>{post.title}</div>
                </div>
                {post.tweets.length > 0 ?
                    <div className="text-secondary">
                        {post.tweets} Tuits
                    </div>
                    :
                    <br></br>
                }
            </div>

            {post.image.length > 0 ?
                <img className="float-end wd-tuit-images" src={post.image}/>
                :
                <div className="float-end text-secondary">•••</div>
            }







        </li>
    );
};
export default PostSummaryItem;

