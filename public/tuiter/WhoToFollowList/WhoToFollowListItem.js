const WhoToFollowListItem = (who)=>{
    return(`<li class="list-group-item d-flex justify-content-between">
                    <a class="d-flex justify-content-start text-decoration-none" href="#">
                        <img class="rounded-circle wd-img" src=${who.avatarIcon}
                             height="48px">
                        <div class="ps-1">
                            <span class="fw-bold wd-font-size text-white">${who.userName} <i class="fas fa-check-circle wd-twitter-color"></i> </span><br>
                            <span class="text-white fw-light wd-font-size">@${who.handle}</span>
                        </div>
                    </a>
                    <button type="button" class="btn btn-primary override-bs1 rounded-pill wd-follow-button">Follow</button>
                </li>`);
}
export default WhoToFollowListItem;