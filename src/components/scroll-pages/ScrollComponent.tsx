import { ReactElement, ReactNode } from "react";
import "./ScrollComponent.scss";
import useLocomotiveScroll from "./useLocomotiveScroll";

interface ScrollComponentProps{
  children: ReactNode
}

const ScrollComponent = (props: ScrollComponentProps): ReactElement => {
  const {children} = props
  const containerRef = useLocomotiveScroll({
    smooth: true,
  });

  return (
    <div
      className="page-wrapper"
      data-scroll-container
      ref={containerRef}
    >
      {children}
    </div>
  );
};

export default ScrollComponent;
