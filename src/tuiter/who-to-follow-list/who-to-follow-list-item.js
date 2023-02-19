import React from "react";
import '../index.css'
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'https://cdn.mos.cms.futurecdn.net/baYs9AuHxx9QXeYBiMvSLU.jpg' }
    }
) => {
    return(
        <li className="list-group-item override-lgi d-flex justify-content-between">
            <a className="d-flex justify-content-start text-decoration-none" href="#">
                <img className="rounded-circle wd-img" src={who.avatarIcon}/>
                    <div className="ps-1">
                        <span className="fw-bold wd-font-size">{who.userName} <i
                            className="bi bi-check-circle-fill wd-twitter-color"></i> </span>
                        <div className="fw-light wd-font-size">@{who.handle}</div>
                    </div>
            </a>
            <button type="button" className="btn btn-primary override-bs1 rounded-pill wd-follow-button">Follow</button>
        </li>
    );
};
export default WhoToFollowListItem;

