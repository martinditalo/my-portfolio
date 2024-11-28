import { ReactElement } from "react";

const Experience = (): ReactElement => {
  const ExperienceData = [
    {
      experience: {
        date: "July 2024 — Present",
        link: "https://galaticevents.com/",
        title: "Software Engineer - Galactic Event Corporation",
        description: `As a software engineer, I use Vue.js and Nuxt.js to build web applications, with Storybook for UI component development and Cypress for end-to-end testing. I also rely on Quasar to streamline responsive app development with its rich set of features.`,
        stacks: [
          "Vue",
          "Cypress",
          "Nuxt",
          "Javascript",
          "Storybook",
          "Quasar",
          "SCSS",
        ],
      },
    },
    {
      experience: {
        date: "March 2022 — March 2024",
        link: "https://www.lpstech.com/site/en/home",
        title: "Solution Developer (React JS) - LPS",
        description: `As a Solution Developer (React JS), I build dynamic web applications using React, MUI, Typescript, Formik, Jest, and React Query. I focus on creating scalable, high-performance solutions with seamless user experiences. My role involves developing and testing features, while optimizing both functionality and UI.`,
        stacks: ["React", "React Query", "MUI", "Typescript", "Jest", "Formik"],
      },
    },
    {
      experience: {
        date: "Feb 2021 — June 2021",
        link: "https://iformatlogic.com/",
        title: "Web Developer (OJT) - iFormatLogic",
        description: `During my OJT as a web developer, I worked with PHP Laravel, MySQL, JavaScript, and Bootstrap to build dynamic, responsive web applications. I gained hands-on experience in both front-end and back-end development, creating user-friendly and functional websites. This internship strengthened my skills in web development and teamwork.`,
        stacks: ["PHP", "Laravel", "Javascript", "Bootstrap", "MySQL"],
      },
    },
  ];
  return (
    <>
      <div>
        <ol className="group/list">
          {ExperienceData.map((data) => {
            return (
              <>
                <li className="mb-6">
                  <div className="group relative flex flex-col pb-1 transition- lg:hover:!opacity-100 lg:group-hover/list:opacity-50 lg:p-3">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/55 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-600 sm:col-span-2">
                      {data.experience.date}
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug">
                        <div>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-gray-500 hover:text-gray-800 group/link text-base"
                            href={data.experience.link}
                          >
                            <span className="absolute  hidden rounded  lg:block"></span>
                            <span className="text-sm">
                              {data.experience.title}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </h3>
                      <p className="mt-2 text-sm leading-normal text-justify font-mandali">
                        {data.experience.description}
                      </p>
                      <ul className="mt-2 flex flex-wrap">
                        {data.experience.stacks.map((stacks) => {
                          return (
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-gray-400/50 px-3 py-1 text-xs font-medium text-slate-800 leading-5">
                                {stacks}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </li>
              </>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default Experience;
