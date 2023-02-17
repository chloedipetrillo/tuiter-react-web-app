const PostItems = (post) => {
    let pic = `${post.image}`.length > 0
    return(`<li class="list-group-item override-bgcolor">
    <div class="row">
      <div class="col-11">
        <div class="d-flex justify-content-lg-start">
          <img class="rounded-circle wd-img" src=${post.propic}>
          <div class="ps-3">
            <span class="fw-bold">${post.name} <i class="fas fa-check-circle"></i></span>
            <span class="ps-1 text-secondary"> @${post.handle} • ${post.time} </span><br>
            <span>${post.content}</span>
            
            
            ${pic ? `<div class="card override-c mt-2 " >
              <img src=${post.image}
                   class="card-img-top override-ct " ${post.link.length + post.imgCaption.length
                    + post.imgHeader.length > 0 ? 'style="max-height:264px"' : `style="border-bottom-right-radius: 20px; border-bottom-left-radius: 20px;"`} alt="...">
              ${post.link.length + post.imgCaption.length
                    + post.imgHeader.length > 0 ? 
              `<div class="card-body override-cb">
                <div>
                  ${post.imgHeader}
                </div>
                <div class="text-secondary wd-font-tiny" style="line-height: 18px;">${post.imgCaption}</div>
                ${post.link.length > 0 ?
                `<span class="text-secondary wd-font-tiny" >
                &#128279 ${post.link}` : ''}
            </span>
              </div>` : ''}
            </div>` : ''}
            
           
            <div class="row mt-2 ps-4 pt-1 pb-1">
              <div class="col-3 override-col-padding">
                <i class="far fa-comment wd-tuiter-gray"></i>
                <span class="wd-tuiter-gray wd-font-tiny">${post.numComments}</span>
              </div>
              <div class="col-3 override-col-padding">
                <i class="fa fa-retweet wd-tuiter-gray"></i>
                <span class="wd-tuiter-gray wd-font-tiny">${post.numRetuits}</span>
              </div>
              <div class="col-3 override-col-padding">
                <i class="far fa-heart wd-tuiter-gray"></i>
                <span class="wd-tuiter-gray wd-font-tiny">${post.numLikes}</span>
              </div>
              <div class="col-3 override-col-padding">
                <i class="fas fa-upload wd-tuiter-gray"></i>
                <span class="wd-tuiter-gray" style="font-size:8px"></span>
              </div>
            </div>
          </div>
      </div>
    </div>
      <div class="col-1">
        <div class="float-end text-secondary">•••</div>
      </div>
    </div>
  </li>`);
}

export default PostItems;