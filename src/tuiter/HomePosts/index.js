import React from "react";
import postArray from './posts.json';
import HomePostItem from "./home-post-item";


const HomePosts = () => {
    return (
        <ul className="list-group">
            {
                postArray.map(posts => <HomePostItem
                key={posts.id}
                posts={posts}/>)
            }
        </ul>
    );
};


export default HomePosts;