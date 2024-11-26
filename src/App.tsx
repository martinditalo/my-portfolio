import { ReactElement, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main-page";
import { AnimatedCursor } from "./components/animated-cursor";
import { Page404 } from "./pages/page-404";
import { Project } from "./pages/project";
import { Loading } from "./components/loading";
import { About } from "./pages/about";
import { Nav } from "./components/hamburger-menu";

const App = (): ReactElement => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3975);
  }, []);
  return (
    <>
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <Router>
          <Nav />
          <AnimatedCursor />

          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />

            {/* Add a catch-all route for 404 */}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
