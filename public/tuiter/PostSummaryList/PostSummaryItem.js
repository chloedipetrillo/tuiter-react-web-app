const PostSummaryItem = (post) => {
    let pic = 1 <`${post.image}`.length;
    return(`<li class="list-group-item d-flex justify-content-between">
                            <div class="wd-padding-right">
                                <div class="text-secondary">
                                    ${post.topic}
                                </div>
                                <div class="fw-bold">
                                    ${post.userName} <i class="fas fa-check-circle"></i>
                                    <span class="text-secondary fw-lighter">
                                            - ${post.time}
                                        </span>
                                    <br>
                                    <span>
                                        ${post.title}
                                    </span>
                                </div>
                                <div class="text-secondary">
                                        ${post.tweets} ${ post.tweets.length > 0 ? 'Tuits':'<br>'}
                                    </div>
                            </div>
                            <div>
                            ${pic ? `<img class="float-end wd-tuit-images" src=${post.image}>` :
                                `<div class="float-end text-secondary">•••</div>`}

                      
                            </div>
                        </li>
       `);
}
export default PostSummaryItem;