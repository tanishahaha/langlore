import About_Home from "../components/AboutUsPage/About_Home";
import Home from "../components/Home";
import NotFoundScreen from "../components/NotFoundScreen";

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
  }
];
