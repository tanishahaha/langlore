import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "./Layout";
import Home from "./components/Home";
import About_Home from "./components/AboutUsPage/About_Home";
import Sign_Home from "./components/Sign_page/Sign_Home";
import NotFoundScreen from "./components/NotFoundScreen";
import Blog_Home from "./components/Blog_Page/Blog_Home";
import ForgetPas from "./components/Sign_page/ForgetPas";
import Signup from "./components/Sign_page/Signup";
import CourseRender from "./components/CourseRender";

const App = () => {
  // Scroll to the top of the page on route transitions
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RootLayout>
              <Home />
            </RootLayout>
          }
        />
        <Route
          path="/about"
          element={
            <RootLayout>
              <About_Home />
            </RootLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <RootLayout>
              <Blog_Home />
            </RootLayout>
          }
        />
        <Route
          path="/signin"
          element={
            <RootLayout>
              <Sign_Home />
            </RootLayout>
          }
        />
        <Route
          path="/forget"
          element={
            <RootLayout>
              <ForgetPas />
            </RootLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <RootLayout>
              <Signup />
            </RootLayout>
          }
        />
        <Route
          path="/courses"
          element={
            <RootLayout>
              {/* <CourseOverview /> */}
              <CourseRender/>
            </RootLayout>
          }
        />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
