import { ReactElement } from "react";
import './Nav.scss';

const Nav = (): ReactElement => {
  return (
    <>
      <label className="burger m-5 ml-auto" htmlFor="burger">
        <input type="checkbox" id="burger" />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </>
  );
};

export default Nav;
