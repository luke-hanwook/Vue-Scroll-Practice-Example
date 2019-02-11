import Vue from "vue";
import Router from "vue-router";
import MoreButtonView from "../components/MoreButtonView";
import InfiniteScrollView from "../components/InfiniteScrollView";
import InfiniteScrollViewByLibrary from "../components/InfiniteScrollViewByLibrary";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: MoreButtonView
    },
    {
      path: "/infinite",
      component: InfiniteScrollView
    },
    {
      path: "/infiniteByLibrary",
      component: InfiniteScrollViewByLibrary
    }
  ]
});
