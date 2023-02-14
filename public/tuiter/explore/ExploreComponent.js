import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`<div class="row">
               <div class="col-11">
                    <div class="position-relative">
                        <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter" style="background-color: rgb(239, 243, 244)"/>
                        <span class="wd-position-search-icon">
                            <i class="fas fa-search"></i>
                        </span>
                    </div>
                </div>
                <div class="col-1">
                    <i class="fa fa-cog fa-2x wd-twitter-color"></i>
                </div>
           </div>
           <ul class="nav override-nav nav-tabs wd-tiny-padding override-nt wd-border pt-1">
                        <li class="nav-item">
                            <a class="nav-link fw-bold" href="for-you.html">For You</a>
                            <div class="wd-box"></div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-bold override-nl" href="trending.html">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-bold override-nl" href="news.html">News</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link fw-bold override-nl" href="sports.html" >Sports</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link d-none d-md-block fw-bold override-nl" href="entertainment.html" >Entertainment</a>
                        </li>
                    </ul>
           <div class="position-relative">
                        <img class="img-fluid" src="https://metro.co.uk/wp-content/uploads/2023/01/GettyImages-1458182645.jpg?quality=90&strip=all&w=1024&h=630&crop=1">
                        <div class="wd-text-over-pic">
                            <span class="fw-lighter wd-font-size">Tennis Tournament • LIVE</span><br>
                            <span>Australian Open 2023</span>
                        </div>
                    </div>
            
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
