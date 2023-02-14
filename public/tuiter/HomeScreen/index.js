import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/PostList.js";



function HomeScreenComponent() {
    $('#wd-homescreen').append(`
   <div class="row mt-2">
        <div class="col-2 col-lg-1 col-xl-2">
            ${NavigationSidebar('Home')}
        </div>
        <div class="col-10 col-lg-7 col-xl-6">
            ${PostList()}
        </div>
        <div class="col-4 d-none d-lg-inline">
            ${PostSummaryList()}
        </div>
   </div>
   `);
}
$(HomeScreenComponent);

