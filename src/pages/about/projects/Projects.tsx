import { ReactElement } from "react";

const Projects = (): ReactElement => {
  const ProjectsData = [
    {
      projects: {
        link: "",
        title: "Project 1",
        img: "https://icons.veryicon.com/png/System/Oxygen/places%20folder%20grey.png",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, natus aspernatur. Non maiores sunt tenetur officiis, cupiditate nam eligendi ratione commodi nemo vel explicabo soluta veritatis consequuntur hic iusto placeat!`,
        stacks: [],
      },
    },
    {
      projects: {
        link: "https://github.com/martinditalo/my-portfolio",
        title: "martinditalo.vercel.app",
        img: "/assets/images/project-img/portfolio.png",
        description: `Explore my work and professional experience through the interactive features of my portfolio, built with React, TypeScript, and Tailwind CSS for a fast, responsive experience. React and TypeScript ensure scalability and maintainability, while Tailwind CSS enables clean, customizable styling.`,
        stacks: ["React", "Tailwind", "SCSS", "Typescript", "Javascript"],
      },
    },
    {
      projects: {
        link: "https://github.com/R2ZTracker",
        title: "R2Z Tracker (Capstone)",
        img: "/assets/images/project-img/R2Z.png",
        description: `R2Z Tracker is a COVID-19 case tracking system for barangays in Olongapo City, built with Ionic Angular for the front-end and a PHP MySQL REST API for the back-end. It provides real-time case updates to help local officials and residents stay informed. The project aims to support efficient pandemic response at the barangay level.`,
        stacks: ["Ionic", "Angular", "Bootstrap", "MySQL", "PHP", "NPM"],
      },
    },
  ];
  return (
    <>
      <div>
        <ul className="group/list">
          {ProjectsData.map((data) => {
            return (
              <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/55 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3 className="font-medium leading-snug">
                      <div>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-gray-500 hover:text-gray-800 group/link text-base"
                          href={data.projects.link}
                        >
                          <span className="absolute  hidden rounded  lg:block"></span>
                          <span className="text-sm">
                            {data.projects.title}
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
                    <p className="mt-2 text-sm leading-normal font-mandali text-justify">
                      {data.projects.description}
                    </p>
                    <ul className="mt-2 flex flex-wrap">
                      {data.projects.stacks.map((stacks) => {
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
                  <img
                    alt=""
                    loading="lazy"
                    width="200"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-800/30 sm:order-1 sm:col-span-2 sm:translate-y-1 filter grayscale blur-[1px] hover:filter-none"
                    src={data.projects.img}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Projects;
