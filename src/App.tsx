import { MainPage } from "./pages/main-page";
import "./App.css";
import "animate.css";
import { AnimatedCursor } from "./components/animated-cursor";
const App = () => {
  return (
    <>
      <AnimatedCursor />
      <MainPage />
    </>
  );
};

export default App;
