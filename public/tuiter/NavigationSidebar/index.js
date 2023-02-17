const NavigationSidebar = (active) =>{
    return(`<div class="list-group border-0">
                <div class="list-group-item border-0">
                    <a href="#">
                        <div class="row">
                            <div class="col-2 wd-twitter-color">
                                <i class="fab fa-tumblr fa-2x"></i>
                            </div>
                        </div>
                    </a>
                </div>
                <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action border-0 
                    ${active === 'Home' ? 'active' : ''}">
                    <div class="row">
                        <div class="col-2">
                            <div class="position-relative">
                                <i class="fas fa-home"></i>
                                <i class="fas fa-circle wd-notif"></i>
                            </div>

                        </div>
                        <div class="col-10 d-none d-xl-inline ps-3 ${active === 'Home' ? 'fw-bold' : 'fw-light'}">
                            Home
                        </div>
                    </div>
                </a>
                <a href="../explore/index.html" class="list-group-item border-0 list-group-item-action ${active === 'Explore' ? 'active' : ''}">
                    <div class="row">
                        <div class="col-2">
                            <i class="fas fa-hashtag"></i>
                        </div>
                        <div class="col-10 d-none d-xl-inline ps-3 ${active === 'Explore' ? 'fw-bold' : 'fw-light'}">
                            Explore
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item border-0 list-group-item-action 
                    ${active === 'Notifications' ? 'active' : ''}">
                    <div class="row">
                        <div class="col-2">
                            <i class="fas fa-bell"></i>
                        </div>
                        <div class="col-10 d-none d-xl-inline ps-3 ${active === 'Notifications' ? 'fw-bold' : 'fw-light'}">
                            Notifications
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item border-0 list-group-item-action 
                    ${active === 'Messages' ? 'active' : ''}">
                    <div class="row">
                        <div class="col-2">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="col-10 d-none d-xl-inline ps-3 ${active === 'Messages' ? 'fw-bold' : 'fw-light'}">
                            Messages
                        </div>
                    </div>
                </a>
                <a href="../bookmarks/index.html" class="list-group-item border-0 list-group-item-action 
                    ${active === 'Bookmarks' ? 'active' : ''}">
                    <div class="row">
                        <div class="col-2">
                            <i class="fas fa-bookmark"></i>
                        </div>
                        <div class="col-10 d-none d-xl-inline ps-3 ${active === 'Bookmarks' ? 'fw-bold' : 'fw-light'}">
                            Bookmarks
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item border-0 list-group-item-action 
                    ${active === 'Top Articles' ? 'active' : ''}">
                    <div class="row">
                        <div class="col-2">
                            <i class="fas fa-fire"></i>
                        </div>
                        <div class="col-10 d-none d-xl-inline ps-3 ${active === 'Top Articles' ? 'fw-bold' : 'fw-light'}">
                            Top Articles
                        </div>
                    </div>
                </a>
                <a href="../profile.html" class="list-group-item border-0 list-group-item-action
                ${active === 'Profile' ? 'active' : ''}">
                    <div class="row">
                        <div class="col-2">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="col-10 d-none d-xl-inline ps-3 ${active === 'Profile' ? 'fw-bold' : 'fw-light'}">
                            Profile
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item border-0 list-group-item-action
                    ${active === 'More' ? 'active' : ''}">
                    <div class="row">
                        <div class="col-2">
                                <span class="fa-stack fas wd-stack-size">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fas fa-ellipsis-h fa-stack-1x text-black"></i>
                                </span>
                        </div>
                        <div class="col-10 d-none d-xl-inline ps-3 ${active === 'More' ? 'fw-bold' : 'fw-light'}">
                            More
                        </div>
                    </div>
                </a>
            </div>
            <button type="button" class="btn btn-primary w-100 mt-2 rounded-pill override-bs">
                    <span class="d-inline d-sm-none">
                        <i class="fas fa-plus"></i>
                    </span>
                <span class="d-none d-sm-inline d-lg-none">
                        <i class="fab fa-tumblr"></i>
                        <i class="fas fa-plus"></i>
                    </span>
                <span class="d-none d-lg-inline d-xl-none">
                        <i class="fas fa-plus"></i>
                    </span>
                <span class="d-none d-xl-inline">
                        Tuit
                    </span>
            </button>
            `);
}

export default NavigationSidebar;