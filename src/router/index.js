import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home";
import Services from "../views/Services";
import Photographers from "../views/Photographers";
import Register from "../views/Register";
import Login from "../views/Login";
import Contact from "../views/Contact";
import PasswordReset from "../views/PasswordReset";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/photographers",
    name: "Photographers",
    component: Photographers,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/reset",
    name: "PasswordReset",
    component: PasswordReset,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
