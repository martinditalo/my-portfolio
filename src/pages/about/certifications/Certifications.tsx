import { ReactElement } from "react";

const Certifications = (): ReactElement => {
  const CertificationsData = [
    {
      certification: {
        date: "August 17, 2026",
        title: "AWS Cloud Quest: Cloud Practitioner",
        issuer: "Amazon Web Services Training and Certification",
        link: "https://www.credly.com/badges/8a8e8e83-55b6-4e4f-a025-84322324a592/public_url",
        img: "/assets/images/certification-img/aws-cloud-practitioner-badge.webp",
      },
    },
    {
      certification: {
        date: "July 22, 2026",
        title: "Generative AI Fundamentals",
        issuer: "Databricks Academy",
        link: "https://credentials.databricks.com/b7ff0f94-4cca-4b43-9556-a9ef929cab64#acc.FPgBAhkG",
        img: "/assets/images/certification-img/gen-AI.webp",
      },
    },
    {
      certification: {
        date: "Jun 24, 2025",
        title: "Postman API Fundamentals Student Expert",
        issuer: "Canvas Credentials (Badgr)",
        link: "https://badges.parchment.com/public/assertions/F5UC7MDaSHypHzPTSeeyBg?identity__email=martinditalo@gmail.com",
        img: "/assets/images/certification-img/postman.webp",
      },
    },
    {
      certification: {
        date: "July 16, 2024",
        title: "Javascript Course",
        issuer: "CodeCademy",
        link: "https://www.codecademy.com/profiles/MartinDitalo/certificates/705dcb15de0da4dd9d9fc4f3274b430e",
        img: "/assets/images/certification-img/codecademy.webp",
      },
    },
    {
      certification: {
        date: "July 17, 2024",
        title: "Vue.js Course",
        issuer: "CodeCademy",
        link: "https://www.codecademy.com/profiles/MartinDitalo/certificates/db927a84bf4bba96bb285ee6a85466fc",
        img: "/assets/images/certification-img/codecademy.webp",
      },
    },
    {
      certification: {
        date: "July 12, 2024",
        title: "Sass Course",
        issuer: "CodeCademy",
        link: "https://www.codecademy.com/profiles/MartinDitalo/certificates/eb1ffda40f347629dcef6de33d3f9741",
        img: "/assets/images/certification-img/codecademy.webp",
      },
    },
    {
      certification: {
        date: "July 12, 2024",
        title: "Build a Website with HTML, CSS, and GitHub Pages Skill Path",
        issuer: "CodeCademy",
        link: "https://www.codecademy.com/profiles/MartinDitalo/certificates/5cadfefe5f1de806e9704577",
        img: "/assets/images/certification-img/codecademy.webp",
      },
    },
    {
      certification: {
        date: "July 12, 2024",
        title: "UI and UX Course",
        issuer: "CodeCademy",
        link: "https://www.codecademy.com/profiles/MartinDitalo/certificates/4ccef8d532484ea2aeec3b3b3dbb4f9c",
        img: "/assets/images/certification-img/codecademy.webp",
      },
    },
    {
      certification: {
        date: "July 11, 2024",
        title: "HTML Course",
        issuer: "CodeCademy",
        link: "https://www.codecademy.com/profiles/MartinDitalo/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7",
        img: "/assets/images/certification-img/codecademy.webp",
      },
    },
    {
      certification: {
        date: "July 10, 2024",
        title: "CSS Course",
        issuer: "CodeCademy",
        link: "http://codecademy.com/profiles/MartinDitalo/certificates/9a5bb1fc45b4281af1fffec93b0aaf05",
        img: "/assets/images/certification-img/codecademy.webp",
      },
    },
  ];

  return (
    <>
      <div>
        <ul className="group/list">
          {CertificationsData.map((data, index) => {
            return (
              <li key={data.certification.title || index} className="mb-12">
                <div className="lg:p-3 group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/55 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3 className="font-medium leading-snug">
                      <div>
                        <span className="inline-flex items-baseline font-medium leading-tight text-gray-800 group/link text-base">
                          <span className="text-sm">
                            {data.certification.title}
                          </span>
                        </span>
                      </div>
                    </h3>
                    <p className="text-xs text-gray-600 font-mandali">
                      {data.certification.issuer}
                    </p>
                    <p className="text-xs text-gray-600 font-mandali">
                      • Issued on: {data.certification.date}
                    </p>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-gray-500 hover:text-gray-800 group/link text-base"
                      href={data.certification.link}
                    >
                      <span className="absolute  hidden rounded  lg:block"></span>
                      <span className="text-xs">
                        View Certification
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
                  <img
                    alt={data.certification.title}
                    loading="lazy"
                    width="200"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    className="rounded sm:order-1 sm:col-span-2 sm:translate-y-1 filter grayscale blur-[1px] hover:filter-none hover:scale-[1.2] lg:hover:scale-[2] transition-all z-20"
                    src={data.certification.img}
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

export default Certifications;
