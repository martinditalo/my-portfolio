import { ReactElement } from "react";
import "./Page404.scss";

const Page404 = (): ReactElement => {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <span className="text-5xl">404: Page Not Found</span>
      </div>
    </>
  );
};
export default Page404;
