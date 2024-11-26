import { ReactElement } from "react";
import { Intro } from "../../components/introduction";
import "./MainPage.scss";

const MainPage = (): ReactElement => {
  return (
    <>
      <main className="main-wrapper">
        <section className="intro-section h-screen" data-scroll data-scroll-speed="0">
          <Intro />
        </section>
      </main>
    </>
  );
};
export default MainPage;
