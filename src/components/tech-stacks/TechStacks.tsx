import { ReactElement } from "react";
import "./TechStacks.scss";
const TechStacks = (): ReactElement => {
  return (
    <>
      <div className="cube-container">
        <div className="cube">
          <div className="face front flex items-center justify-center">
            <img src="/assets/images/react.png" alt="" className="h-28 w-28" />
          </div>
          <div className="face back flex items-center justify-center">
            <img src="/assets/images/vue.png" alt="" className="h-28 w-28" />
          </div>
          <div className="face right flex items-center justify-center">
            <img src="/assets/images/nuxt.png" alt="" className="h-28 w-28" />
          </div>
          <div className="face left flex items-center justify-center">
            <img
              src="/assets/images/typescript.png"
              alt=""
              className="h-28 w-28"
            />
          </div>
          <div className="face top flex items-center justify-center">
            <img
              src="/assets/images/html-css-js.png"
              alt=""
              className="h-26 w-28"
            />
          </div>
          <div className="face bottom flex items-center justify-center">
            <img
              src="/assets/images/angular.svg"
              alt=""
              className="h-28 w-28"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStacks;
