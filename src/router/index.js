import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import TutorialsIndex from "../views/TutorialsIndex.vue";
import TutorialsNew from "../views/TutorialsNew.vue";
import TutorialsShow from "../views/TutorialsShow.vue";
import TopicsIndex from "../views/TopicsIndex.vue";
import LanguagesIndex from "../views/LanguagesIndex.vue";
import RatingsCreate from "../views/RatingsNew.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/tutorials", name: "tutorials-index", component: TutorialsIndex },
  { path: "/tutorials/new", name: "tutorials-new", component: TutorialsNew },
  { path: "/tutorials/:id", name: "tutorials-show", component: TutorialsShow },
  { path: "/topics", name: "topics-index", component: TopicsIndex },
  { path: "/languages", name: "languages-index", component: LanguagesIndex },
  { path: "/ratings/new", name: "ratings-new", component: RatingsCreate },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
