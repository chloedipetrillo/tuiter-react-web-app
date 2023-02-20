import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css'


const quoteRetweeted = (
    {posts}
) => {
    return(
        <div className="mt-2 wd-quote-retweet-box">
            <img className="rounded-circle wd-quote-retweet-pic d-inline" src={posts.originalProPic}/>
            <div className="ps-1 d-inline">
                <span className="fw-bold">{posts.originalName} <i className="bi bi-patch-check-fill wd-tuiter-color"></i></span>
                <span className="ps-1 text-secondary"> @{posts.originalHandle} • {posts.originalTime} </span>
                <div>{posts.originalContent}</div>
            </div>
        </div>
    )
}

const HomePostItem = (
    {
        posts
    }
) => {
    return(
        <li className="list-group-item override-bgcolor">
            <div className="row">
                <div className="col-11">
                    {posts.retweet ? <div className="ps-5 text-muted wd-font-tiny fw-bold">
                        <i className="bi bi-repeat"> </i>
                        <span className="ps-2"> {posts.retweetBy}  Retweeted </span>
                    </div> : ''}


                    <div className="d-flex justify-content-lg-start">
                        <img className="rounded-circle wd-img" src={posts.propic}/>
                            <div className="ps-3">
                                <span className="fw-bold">{posts.name} <i className="bi bi-patch-check-fill wd-tuiter-color"></i></span>
                                <span className="ps-1 text-muted"> @{posts.handle} • {posts.time} </span>
                                <div>{posts.content}</div>


                                {posts.quoteRt ? quoteRetweeted({posts})

                                : ''}

                                {posts.image.length > 0 ?
                                    <div className="card override-c mt-2 ">


                                        <img src={posts.image}
                                             className={`card-img-top override-ct 
                                             ${posts.imgCaption.length + posts.imgHeader.length + posts.link.length < 1 ?
                                                 'wd-no-caption': ''}`}/>

                                        {posts.imgCaption.length + posts.imgHeader.length + posts.link.length > 0 ?
                                        <div className="card-body override-cb">
                                            <div >
                                                {posts.imgHeader}
                                            </div>
                                            <div className="text-secondary wd-font-tiny wd-line-spacing">{posts.imgCaption}</div>
                                            {posts.link.length > 0 ?
                                            <span className="text-secondary wd-font-tiny">
                                                <i className="bi bi-link-45deg"></i> {posts.link} </span> : ''}
                                        </div> : '' }
                                    </div> :
                                    ''
                                }







                                <div className="row mt-2 ps-4 pt-1 pb-1">
                                    <div className="col-3 override-col-padding">
                                        <i className="bi bi-chat wd-tuiter-gray"></i>
                                        <span className="wd-tuiter-gray wd-font-tiny"> {posts.numComments}</span>
                                    </div>
                                    <div className="col-3 override-col-padding">
                                        <i className="bi bi-repeat wd-tuiter-gray"></i>
                                        <span className="wd-tuiter-gray wd-font-tiny"> {posts.numRetuits}</span>
                                    </div>
                                    <div className="col-3 override-col-padding">
                                        <i className="bi bi-heart wd-tuiter-gray"></i>
                                        <span className="wd-tuiter-gray wd-font-tiny"> {posts.numLikes}</span>
                                    </div>
                                    <div className="col-3 override-col-padding">
                                        <i className="bi bi-upload wd-tuiter-gray"></i>
                                        <span className="wd-tuiter-gray" ></span>
                                    </div>
                                </div>

                            </div>



                    </div>



                </div>
                <div className="col-1">
                    <div className="float-end text-secondary">•••</div>
                </div>
            </div>
        </li>
    );
};

export default HomePostItem;
