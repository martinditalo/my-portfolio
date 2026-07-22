import { ReactElement, useEffect, useRef, useState } from "react";
import { Experience } from "./experience";
import { Projects } from "./projects";
import { Certifications } from "./certifications";
import "./About.scss";

const About = (): ReactElement => {
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);

  const [selected, setSelected] = useState<string>("showDiv1");

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetId = e.target.id;
    setSelected(targetId);
    if (targetId === "showDiv1" && div1Ref.current) {
      div1Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (targetId === "showDiv2" && div2Ref.current) {
      div2Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (targetId === "showDiv3" && div3Ref.current) {
      div3Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (targetId === "showDiv4" && div4Ref.current) {
      div4Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isInViewport = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    const threshold = window.innerHeight * 0.25;
    return rect.top < window.innerHeight - threshold && rect.bottom > threshold;
  };

  const checkInView = () => {
    if (div1Ref.current && div2Ref.current && div3Ref.current && div4Ref.current) {
      const div1InView = isInViewport(div1Ref.current);
      const div2InView = isInViewport(div2Ref.current);
      const div3InView = isInViewport(div3Ref.current);
      const div4InView = isInViewport(div4Ref.current);

      if (div1InView) setSelected("showDiv1");
      else if (div2InView) setSelected("showDiv2");
      else if (div3InView) setSelected("showDiv3");
      else if (div4InView) setSelected("showDiv4");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkInView);
    return () => {
      window.removeEventListener("scroll", checkInView);
    };
  });
  return (
    <>
      <div className="about-container mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                <a href="/">Martin Ditalo</a>
              </h1>
              <h2 className="mt-3 text-xs font-medium tracking-tight  sm:text-base">
                Fullstack Developer/AI Enthusiast
              </h2>
              <p className="mt-4 max-w-xs leading-normal font-mandali">
                I'm a Full-Stack Software Engineer building scalable,
                responsive, and user-friendly web applications.
              </p>
              <div className="radio-input hidden lg:flex font-mandali">
                <div className="glass">
                  <div className="glass-inner"></div>
                </div>
                <div className="selector">
                  <div className="choice">
                    <div>
                      <input
                        className="choice-circle"
                        type="radio"
                        name="option"
                        id="showDiv1"
                        value="1"
                        checked={selected === "showDiv1"}
                        onChange={handleRadioChange}
                      />
                      <div className="ball"></div>
                    </div>
                    <label
                      className={
                        selected === "showDiv1"
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
                        name="option"
                        id="showDiv2"
                        value="2"
                        checked={selected === "showDiv2"}
                        onChange={handleRadioChange}
                      />
                      <div className="ball"></div>
                    </div>
                    <label
                      className={
                        selected === "showDiv2"
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
                        name="option"
                        id="showDiv3"
                        value="3"
                        checked={selected === "showDiv3"}
                        onChange={handleRadioChange}
                      />
                      <div className="ball"></div>
                    </div>
                    <label
                      className={
                        selected === "showDiv3"
                          ? "choice-name choice-name-active"
                          : "choice-name"
                      }
                    >
                      Projects
                    </label>
                  </div>
                  <div className="choice">
                    <div>
                      <input
                        className="choice-circle"
                        type="radio"
                        name="option"
                        id="showDiv4"
                        value="4"
                        checked={selected === "showDiv4"}
                        onChange={handleRadioChange}
                      />
                      <div className="ball"></div>
                    </div>
                    <label
                      className={
                        selected === "showDiv4"
                          ? "choice-name choice-name-active"
                          : "choice-name"
                      }
                    >
                      Certifications
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <ul className="wrapper">
              <a href="https://github.com/martinditalo">
                <li className="icon !ml-0 shrink-0 text-xs">
                  <span className="tooltip">Github</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </li>
              </a>
              <a href="https://www.linkedin.com/in/martin-ditalo-9a9244209/">
                <li className="icon shrink-0 text-xs">
                  <span className="tooltip">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </li>
              </a>
              <a href="mailto:martinditalo@gmail.com">
                <li className="icon shrink-0 text-xs">
                  <span className="tooltip">Email</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                </li>
              </a>
            </ul>
          </header>
          <div
            className="pt-5 lg:w-full lg:py-24 w-full h-full"
            data-scroll-section
          >
            <section
              id="about-container"
              ref={div1Ref}
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-5 lg:scroll-mt-24 lg:p-3"
            >
              <div className="sticky top-0 z-30 -mx-6 mb-4 w-screen bg-gray-700/65 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  About
                </h2>
              </div>
              <div>
                <p className="about-text mb-5">
                  As a Full-Stack Software Engineer, I specialize in building
                  responsive, user-friendly web applications. My technical stack
                  includes HTML, CSS, SCSS, TypeScript, JavaScript, and Node.js,
                  along with frameworks and libraries such as Angular, React,
                  Vue.js, Next.js, Nuxt.js, and Express.js. I focus on writing
                  clean, maintainable, and scalable code that supports long-term
                  growth and performance.
                </p>

                <p className="about-text mb-5">
                  I am deeply involved in full-stack web development, designing
                  and implementing dynamic, high-performance applications. My
                  work includes creating intuitive user interfaces, optimizing
                  application performance, and ensuring seamless integration
                  between frontend and backend services to deliver reliable
                  end-to-end solutions.
                </p>

                <p className="about-text mb-5">
                  Collaboration and continuous learning are essential to my
                  approach. I thrive in agile environments, working alongside
                  back-end developers, designers, and product managers to bring
                  ideas to life. By staying up to date with the latest industry
                  trends and best practices, I aim to deliver innovative
                  solutions that meet both business goals and user needs.
                </p>
              </div>
            </section>
            <section
              ref={div2Ref}
              id="experience-container"
              className="mb-16 scroll-mt-16 md:mb-10 lg:mb-15 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-30 -mx-6 mb-4 w-screen bg-gray-700/65 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Experience
                </h2>
              </div>
              <Experience />
            </section>

            <section
              ref={div3Ref}
              id="projects-container"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-15 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-30 -mx-6 mb-4 w-screen bg-gray-700/65 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Projects
                </h2>
              </div>
              <Projects />
            </section>

            <section
              ref={div4Ref}
              id="certifications-container"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-15 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-30 -mx-6 mb-4 w-screen bg-gray-700/65 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Certifications
                </h2>
              </div>
              <Certifications />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
