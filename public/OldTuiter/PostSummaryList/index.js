import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js"


const PostSummaryList = () => {
    return (`
           <ul class="list-group override-mc">
                ${post.map(each => {return(PostSummaryItem(each));
                }).join('')}
           </ul>
           
`); }


export default PostSummaryList;