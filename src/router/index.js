import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home";
import Services from "../views/Services";
import Photographers from "../views/Photographers";
import Register from "../views/Register";
import Login from "../views/Login";
import Contact from "../views/Contact";
import Photographer1 from "../views/Photographer1";
import Booking from "../views/Booking";
import Checkout from "../views/Checkout";
import Admin from "../views/Admin";
import updatePhotographers from "../views/UpdatePhotographer";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
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
    path: "/updatePhotographers",
    name: "updatePhotographers",
    component: updatePhotographers,
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
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/photographer1",
    name: "Photographer1",
    component: Photographer1,
  },
  {
    path: "/booking",
    name: "Booking",
    component: Booking,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
