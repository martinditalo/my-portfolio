import { ReactElement } from "react";
import { ScrollComponent } from "../../components/scroll-pages";
import { FireEffect } from "../../components/fire-effect";
// import { TechStacks } from "../../components/tech-stacks";

import "./MainPage.scss";
import { Profile } from "../../components/profile-card";

const MainPage = (): ReactElement => {
  return (
    <>
      <ScrollComponent>
        <main className="main-wrapper" data-scroll-section>
          <section
            className="intro-section h-screen"
            data-scroll
            data-scroll-speed="1"
          >
            <div className="container mx-auto">
              <div className="intro-wrapper h-screen">
                <div className="h-full w-full flex items-center justify-center">
                  <div className="intro-text w-1/2 h-full" data-scroll>
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
                    {/* <span
                      data-scroll=""
                      data-scroll-delay="0.13"
                      data-scroll-speed="6"
                    >
                      H
                    </span>
                    <span
                      data-scroll=""
                      data-scroll-delay="0.12"
                      data-scroll-speed="6"
                    >
                      i
                    </span>
                    <span
                      data-scroll=""
                      data-scroll-delay="0.11"
                      data-scroll-speed="6"
                    >
                      ,&nbsp;
                    </span>
                    <span
                      data-scroll=""
                      data-scroll-delay="0.1"
                      data-scroll-speed="6"
                    >
                      I
                    </span>
                    <span
                      data-scroll=""
                      data-scroll-delay="0.09"
                      data-scroll-speed="6"
                    >
                      '
                    </span>
                    <span
                      data-scroll=""
                      data-scroll-delay="0.08"
                      data-scroll-speed="6"
                    >
                      m&nbsp;
                    </span>
                    <span
                      data-scroll=""
                      data-scroll-delay="0.07"
                      data-scroll-speed="6"
                    >
                      M
                    </span>
                    <span
                      data-scroll=""
                      data-scroll-delay="0.06"
                      data-scroll-speed="6"
                    >
                      A
                    </span>
                    <span
                      data-scroll=""
                      data-scroll-delay="0.05"
                      data-scroll-speed="6"
                    >
                      R
                    </span>
                    <span
                      data-scroll=""
                      data-scroll-delay="0.04"
                      data-scroll-speed="6"
                    >
                      T
                    </span>
                    <span
                      data-scroll=""
                      data-scroll-delay="0.03"
                      data-scroll-speed="6"
                    >
                      I
                    </span>
                    <span
                      data-scroll=""
                      data-scroll-delay="0.02"
                      data-scroll-speed="6"
                    >
                      N
                    </span> */}
                  </div>
                  <div className="">
                    <Profile />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="techstacks-section h-screen" id="direction">
            <div className="fire-wrapper">
              <FireEffect data-scroll-sticky />
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
          </section>
          <section
            className="h-screen"
            data-scroll
            data-scroll-speed="2"
          ></section>
          <section
            className="h-screen"
            data-scroll
            data-scroll-speed="3"
          ></section>
        </main>
      </ScrollComponent>
    </>
  );
};
export default MainPage;
