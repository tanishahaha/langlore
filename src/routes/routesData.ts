import About_Home from "../components/AboutUsPage/About_Home";
import Home from "../components/Home";
import NotFoundScreen from "../components/NotFoundScreen";
import Blog_Home from "../components/Blog_Page/Blog_Home";

interface IRoutesData {
  path: string;
  component: React.FC;
}

export const routes: IRoutesData[] = [
  {
    path: "/",
    component: Home,
  },
  
  {
    path: "*",
    component: NotFoundScreen,
  },
  {
    path: "/about",
    component: About_Home,
  },
  {
    path: "/blog",
    component: Blog_Home,
  }
];
