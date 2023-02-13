import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"


const WhoToFollowList = () => {
    return (`
           <ul class="list-group override-lg">
                <li class="list-group-item fw-bold">Who to follow</li>
                ${who.map(each => {return(WhoToFollowListItem(each));
                }).join('')}
           </ul>
           
           <div class="mt-2 wd-font-tiny ps-3">
                <a href="#" class="text-decoration-none text-secondary pe-2">Terms of Service</a>
                <a href="#" class="text-decoration-none text-secondary pe-2">Privacy Policy</a>
                <a href="#" class="text-decoration-none text-secondary">Cookie Policy</a> <br>
                <a href="#" class="text-decoration-none text-secondary pe-2">Accessibility</a>
                <a href="#" class="text-decoration-none text-secondary pe-2">Ads info</a>
                <a href="#" class="text-decoration-none text-secondary pe-2">More ...</a><br>
                <a href="#" class="text-decoration-none text-secondary pe-2">© 2023 Tuiter, Inc.</a>
            </div>
`); }


export default WhoToFollowList;