import { ReactElement } from "react";
// import { FireEffect } from "../../components/fire-effect";
import { Intro } from "../../components/introduction";

// import { TechStacks } from "../../components/tech-stacks";

import "./MainPage.scss";
// import { Profile } from "../../components/profile-card";

const MainPage = (): ReactElement => {
  return (
    <>
      <main className="main-wrapper">
        {/* <div
            className="c-fixed_wrapper pt-10"
            data-scroll
            data-scroll-call="dynamicBackground"
            data-scroll-repeat
          >
            <hr />
            <div className="c-fixed_target" id="fixed-target"></div>
            <div
              className="c-fixed"
              data-scroll
              data-scroll-sticky
              data-scroll-target="#fixed-target"
            >
              <section className="intro-section h-screen">
                <div className="intro-wrapper h-screen">
                  <div className="w-full flex items-center justify-center">
                    <div className="intro-text w-1/2" data-scroll>
                      <div className="intro-container">
                        <div className="content">
                          <div className="content__container">
                            <p className="content__container__text">Hi,</p>

                            <ul className="content__container__list">
                              <li className="content__container__list__item">
                                I'm Martin
                              </li>
                              <li className="content__container__list__item">
                                Programmers !
                              </li>
                              <li className="content__container__list__item">
                                Geeks !
                              </li>
                              <li className="content__container__list__item">
                                Developers !
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="animate__animated animate__flip">
                      <Profile />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <hr /> */}
        {/* <section className="techstacks-section h-screen" id="direction">
            <div className="fire-wrapper">
              <FireEffect />
            </div>
            <div className="techstack-item _one">
              <span
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="15"
                data-scroll-target="#direction"
                data-scroll-delay="0.05"
              >
                ANIMATE!!
              </span>
            </div>
            <div className="techstack-item _two">
              <span
                data-scroll
                data-scroll-speed="-15"
                data-scroll-direction="horizontal"
                data-scroll-target="#direction"
                data-scroll-delay="0.05"
              >
                FRONT-END IS ♥ !!
              </span>
            </div>
            <div className="techstack-item _three">
              <span
                data-scroll
                data-scroll-speed="15"
                data-scroll-direction="horizontal"
                data-scroll-target="#direction"
                data-scroll-delay="0.05"
              >
                HELLO WORLD!!
              </span>
            </div>
            <div className="techstack-item _four">
              <span
                data-scroll
                data-scroll-speed="-15"
                data-scroll-direction="horizontal"
                data-scroll-target="#direction"
                data-scroll-delay="0.05"
              >
                TYPESCRIPT!!
              </span>
            </div>
            <div className="techstack-item _five">
              <span
                data-scroll
                data-scroll-direction="horizontal"
                data-scroll-speed="015"
                data-scroll-target="#direction"
                data-scroll-delay="0.05"
              >
                PROGRAMMING!!
              </span>
            </div>
          </section> */}
        <section className="intro-section h-screen" data-scroll data-scroll-speed="0">
          <Intro />
        </section>
      </main>
    </>
  );
};
export default MainPage;
