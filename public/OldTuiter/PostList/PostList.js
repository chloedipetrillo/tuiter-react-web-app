import PostItems from "./PostItems.js";
import post from "./post.js"

const PostList = () => {
    return (`<ul class="list-group">
${post.map(each => {return(PostItems(each));}).join('')}

</ul>
           
`); }


export default PostList;