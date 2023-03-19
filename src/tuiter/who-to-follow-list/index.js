import React from "react";
import whoArray from "../data/who.json";
import {useSelector} from "react-redux";
import WhoToFollowListItem
    from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    const whoArray = useSelector(
        (state) => state.who);

    return(
        <div>
            <ul className="list-group override-lg">
                <li className="list-group-item override-lgi fw-bold">Who to follow</li>
                {
                    whoArray.map(who =>
                        <WhoToFollowListItem
                            key={who._id}
                            who={who}/>
                    )
                }
                <li className="ps-3 list-group-item override-lgi wd-tuiter-color">Show More</li>
            </ul>

            <div className="mt-2 wd-font-tiny ps-3">
                <a href="#" className="text-decoration-none text-secondary pe-2">Terms of Service</a>
                <a href="#" className="text-decoration-none text-secondary pe-2">Privacy Policy</a>
                <a href="#" className="text-decoration-none text-secondary">Cookie Policy</a><br></br>
                <a href="#" className="text-decoration-none text-secondary pe-2">Accessibility</a>
                <a href="#" className="text-decoration-none text-secondary pe-2">Ads info</a>
                <a href="#" className="text-decoration-none text-secondary pe-2">More ...</a><br></br>
                <a href="#" className="text-decoration-none text-secondary pe-2">© 2023 Tuiter, Inc.</a>
            </div>
        </div>

    );
};

export default WhoToFollowList;