import "./App.css";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/homePage";
import { useEffect } from "react";
import Transcript from "./Transcript";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Transcript />} /> */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/HaloBije" element={<MainPage />} />{" "}
      </Routes>{" "}
    </>
  );
}

export default App;
