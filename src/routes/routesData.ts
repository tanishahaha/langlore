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
];
