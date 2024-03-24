// App.tsx (modifications)
import RootLayout from "./Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About_Home from "./components/AboutUsPage/About_Home";
import Sign_Home from "./components/Sign_page/Sign_Home";
import NotFoundScreen from "./components/NotFoundScreen";
import Blog_Home from "./components/Blog_Page/Blog_Home";
import ForgetPas from "./components/Sign_page/ForgetPas";
import Signup from "./components/Sign_page/Signup";

const App = () => {
  return (
    <>
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
          <Route path="/signin" element={
            <RootLayout>
            <Sign_Home />
          </RootLayout>
          } />
          <Route path="/forget" element={
            <RootLayout>
            <ForgetPas />
          </RootLayout>
          } />
          <Route path="/signup" element={
            <RootLayout>
            <Signup />
          </RootLayout>
          } />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
