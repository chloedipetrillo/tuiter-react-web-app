import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";


const TuitList = () => {
    const postArray = useSelector(state => state.tuits)
    return (
        <ul className="list-group">
            {
                postArray.map(posts => <TuitItem
                key={posts._id}
                posts={posts}/>)
            }
        </ul>
    );
};


export default TuitList;