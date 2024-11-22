import { MainPage } from "./pages/main-page";
import "./App.css";
import "animate.css";
import { AnimatedCursor } from "./components/animated-cursor";
import { Nav } from "./components/hamburger-menu";
const App = () => {
  return (
    <>
      <Nav />
      <AnimatedCursor />
      <MainPage />
    </>
  );
};

export default App;
