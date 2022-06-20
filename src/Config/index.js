import { lazy } from "react";

const routesMain = [
  {
    title: "Home",
    path: "/",
    component: lazy(() => import("../Containers/Home/index")),
    exact: true,
  },
  {
    title: "About",
    path: "/about",
    component: lazy(() => import("../Containers/About/index")),
    exact: true,
  },
  {
    title: "OurWork",
    path: "/our",
    component: lazy(() => import("../Containers/OurWork/index")),
    exact: true,
  },
  {
    title: "News",
    path: "/news",
    component: lazy(() => import("../Containers/News/index")),
    exact: true,
  },
  {
    title: "Contact",
    path: "/contact",
    component: lazy(() => import("../Containers/Contact/index")),
    exact: true,
  },
  {
    title: "Detail",
    path: "/detail/:id",
    component: lazy(() => import("../Containers/Detail_1/index")),
    exact: true,
  },
  {
    title: "Detail2",
    path: "/details/:id",
    component: lazy(() => import("../Containers/Detail_2/index")),
    exact: true,
  },
  {
    title: "Project",
    path: "/project",
    component: lazy(() => import("../Containers/Project/index")),
    exact: true,
  },
];

export default routesMain;
