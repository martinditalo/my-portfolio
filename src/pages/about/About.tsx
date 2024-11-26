import { ReactElement, useEffect, useState } from "react";
import { ScrollComponent } from "../../components/scroll-pages";
import "./About.scss";
type Option = "one" | "two" | "three";
const About = (): ReactElement => {
  const [selected, setSelected] = useState<Option>("one");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value as Option);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === "about-container") {
              setSelected("one");
            } else if (id === "experience-container") {
              setSelected("two");
            } else if (id === "projects-container") {
              setSelected("three");
            }
          }
        });
      },
      { threshold: 0.5 } // This means the section needs to be at least 50% visible
    );

    // Target the sections to observe
    const sections = document.querySelectorAll("[data-scroll-section]");
    sections.forEach((section) => observer.observe(section));
    console.log(selected, 'test')
    // Cleanup on component unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
    
  }, [selected]);
  return (
    <>
      <div className="about-container mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                <a href="/">Martin Ditalo</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight  sm:text-xl">
                Front End Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                et doloribus saepe aperiam.
              </p>
              <div className="radio-input hidden lg:flex">
                <div className="glass">
                  <div className="glass-inner"></div>
                </div>
                <div className="selector">
                  <div className="choice">
                    <div>
                      <input
                        className="choice-circle"
                        type="radio"
                        value="one"
                        name="number-selector"
                        id="one"
                        checked={selected === "one"}
                        onChange={handleChange}
                      />
                      <div className="ball"></div>
                    </div>
                    <label
                      htmlFor="one"
                      className={
                        selected === "one"
                          ? "choice-name choice-name-active"
                          : "choice-name"
                      }
                    >
                      About
                    </label>
                  </div>
                  <div className="choice">
                    <div>
                      <input
                        className="choice-circle"
                        type="radio"
                        value="two"
                        name="number-selector"
                        id="two"
                        checked={selected === "two"}
                        onChange={handleChange}
                      />
                      <div className="ball"></div>
                    </div>
                    <label
                      htmlFor="two"
                      className={
                        selected === "two"
                          ? "choice-name choice-name-active"
                          : "choice-name"
                      }
                    >
                      Experience
                    </label>
                  </div>
                  <div className="choice">
                    <div>
                      <input
                        className="choice-circle"
                        type="radio"
                        value="three"
                        name="number-selector"
                        id="three"
                        checked={selected === "three"}
                        onChange={handleChange}
                      />
                      <div className="ball"></div>
                    </div>
                    <label
                      htmlFor="three"
                      className={
                        selected === "three"
                          ? "choice-name choice-name-active"
                          : "choice-name"
                      }
                    >
                      Projects
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <ul className="wrapper">
              <li className="icon mr-5 shrink-0 text-xs">
                <span className="tooltip">Github</span>
                <a href="https://github.com/martinditalo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </li>
              <li className="icon mr-5 shrink-0 text-xs">
                <span className="tooltip">LinkedIn</span>
                <a href="https://www.linkedin.com/in/martin-ditalo-9a9244209/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </li>
              <li className="icon mr-5 shrink-0 text-xs">
                <span className="tooltip">Facebook</span>
                <svg
                  viewBox="0 0 320 512"
                  height="1.2em"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </li>
              <li className="icon mr-5 shrink-0 text-xs">
                <span className="tooltip">Twitter</span>
                <svg
                  height="1.8em"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  className="twitter"
                >
                  <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                </svg>
              </li>
              <li className="icon mr-5 shrink-0 text-xs">
                <span className="tooltip">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2em"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                </svg>
              </li>
            </ul>
          </header>
          <ScrollComponent>
            <div
              className="pt-24 lg:w-full lg:py-24 w-full h-full
              "
              data-scroll-section
            >
              <section
                id="about-container"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-10 lg:scroll-mt-24 lg:p-5"
              >
                <p className="about-text mb-5">
                  As a Front End Engineer, specializing in creating responsive
                  and user-friendly web applications. My technical skills
                  include HTML, CSS, SCSS, JavaScript, and frameworks such as
                  React, Vue.js, Nuxt, which I use to build dynamic and scalable
                  solutions. I focus on writing clean, maintainable code
                </p>
                <p className="about-text mb-5">
                  I am currently working as a Software Engineer at&nbsp;
                  <a
                    href="https://galaticevents.com/"
                    className="text-gray-500/50 hover:text-slate-100 from-neutral-500"
                  >
                    Galactic Events Corporation
                  </a>
                  , My primary responsibility is front-end development, where I
                  work extensively with Vue.js and the Nuxt.js framework to
                  build dynamic, high-performance web applications. My work
                  involves designing and implementing user-friendly interfaces,
                  optimizing performance, and ensuring seamless integration with
                  backend services.
                </p>
                <p className="about-text mb-5">
                  Collaboration and continuous learning are essential to my
                  approach. I thrive in agile environments, working alongside
                  back-end developers, designers, and product managers to bring
                  ideas to life. By staying up to date with the latest industry
                  trends and best practices, I aim to deliver innovative
                  solutions that meet both business goals and user needs.
                </p>
              </section>
              <section
                id="experience-container"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                aria-label="Work experience"
              >
                <div>
                  <ol className="group/list">
                    <li className="mb-12">
                      <div className="group relative flex flex-col pb-1 transition- lg:hover:!opacity-100 lg:group-hover/list:opacity-50 lg:p-5">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/45 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header
                          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-600 sm:col-span-2"
                          aria-label="2024 to Present"
                        >
                          July 2024 — Present
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug">
                            <div>
                              <a
                                className="inline-flex items-baseline font-medium leading-tight text-gray-500 hover:text-gray-800 group/link text-base"
                                href="https://galaticevents.com/"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)"
                              >
                                <span className="absolute  hidden rounded  lg:block"></span>
                                <span>
                                  Software Engineer - Galactic Event Corporation
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </a>
                            </div>
                          </h3>
                          <p className="mt-2 text-sm leading-normal">
                            Build and maintain critical components used to
                            construct Klaviyo’s frontend, across the whole
                            product. Work closely with cross-functional teams,
                            including developers, designers, and product
                            managers, to implement and advocate for best
                            practices in web accessibility.
                          </p>
                          <ul className="mt-2 flex flex-wrap">
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-gray-400/50 px-3 py-1 text-xs font-medium text-slate-800 leading-5">
                                Vue
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-gray-400/50 px-3 py-1 text-xs font-medium leading-5 text-slate-800 ">
                                Nuxt
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-gray-400/50 px-3 py-1 text-xs font-medium leading-5 text-slate-800">
                                JavaScript
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-gray-400/50  px-3 py-1 text-xs font-medium leading-5 text-slate-800">
                                Storybook
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-gray-400/50 px-3 py-1 text-xs font-medium leading-5 text-slate-800">
                                Quasar
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="mb-12">
                      <div className="group relative flex flex-col pb-1 transition- lg:hover:!opacity-100 lg:group-hover/list:opacity-50 lg:p-5 rounded">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/45 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header
                          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                          aria-label="2024 to Present"
                        >
                          March 2022 — March 2024
                        </header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug">
                            <div>
                              <a
                                className="inline-flex items-baseline font-medium leading-tight text-gray-500 hover:text-gray-800  group/link text-base"
                                href="https://www.lpstech.com/site/en/home"
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)"
                              >
                                <span className="absolute  hidden rounded  lg:block"></span>
                                <span>
                                  Solution Developer (React JS) - LPS
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </a>
                            </div>
                          </h3>
                          <p className="mt-2 text-sm leading-normal">
                            Build and maintain critical components used to
                            construct Klaviyo’s frontend, across the whole
                            product. Work closely with cross-functional teams,
                            including developers, designers, and product
                            managers, to implement and advocate for best
                            practices in web accessibility.
                          </p>
                          <ul className="mt-2 flex flex-wrap">
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-gray-400/50 px-3  py-1 text-xs font-medium text-slate-800 leading-5">
                                React
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-gray-400/50 px-3 py-1 text-xs font-medium leading-5 text-slate-800 ">
                                React Query
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-gray-400/50 px-3 py-1 text-xs font-medium leading-5 text-slate-800">
                                MUI
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-gray-400/50 px-3 py-1 text-xs font-medium leading-5 text-slate-800">
                                Jest
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-gray-400/50 px-3 py-1 text-xs font-medium leading-5 text-slate-800">
                                Formik
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </section>
              <section
                id="projects-container"
                className="h-screen"
              >
              </section>
            </div>
          </ScrollComponent>
        </div>
      </div>
    </>
  );
};
export default About;
