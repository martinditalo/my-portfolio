import { ReactElement } from "react";
import "./Contact.scss";

const Contact = (): ReactElement => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="loader">
          <span className="loader-text">Ongoing....</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
