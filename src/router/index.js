import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CountyOverview from "../views/CountyOverview.vue";
import MediaList from "../views/MediaList.vue";
import Error401 from "../components/401.vue";
import Dashboard from "../views/admin/Dashboard";
import Network from "../views/admin/Network.vue";
import User from "../views/admin/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/county/:id",
    name: "County",
    component: CountyOverview
  },
  {
    path: "/medialist",
    name: "MediaList/",
    component: MediaList
  },
  {
    path: "/401",
    name: "401",
    component: Error401
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/network",
    name: "Network",
    component: Network
  },
  {
    path: "/user",
    name: "User",
    component: User
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
