import Home from "./components/body/Home.vue";
import About from "./components/body/About.vue";
import Contact from "./components/body/Contact.vue";
import Education from "./components/body/Education.vue";
import Gallery from "./components/body/Gallery.vue";
import Portfolio from "./components/body/Portfolio.vue";
import Skill from "./components/body/Skill.vue";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/gallery",
    component: Gallery,
  },
  {
    path: "/portfolio",
    component: Portfolio,
  },
  {
    path: "/education",
    component: Education,
  },
  {
    path: "/skill",
    component: Skill,
  },
];
