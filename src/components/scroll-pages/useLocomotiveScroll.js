import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const useLocomotiveScroll = (options = {}) => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.destroy();
    }

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      ...options,
    });

    scrollRef.current = scroll;

    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
      }
    };
  }, [options]);

  return containerRef;
};

export default useLocomotiveScroll;