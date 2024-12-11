import { ReactElement, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Intro.scss";

const Intro = (): ReactElement => {
  const location = useLocation();

  // Use refs instead of document.getElementById to ensure elements exist before use
  const text1Ref = useRef<HTMLSpanElement | null>(null);
  const text2Ref = useRef<HTMLSpanElement | null>(null);

  const texts: string[] = [
    "Hello!",
    "I'm",
    "Martin",
    "Web Developer",
    "Software Engineer",
    "Front End Developer",
    "Nice to meet you!",
  ];

  const morphTime: number = 1;
  const cooldownTime: number = 0.25;

  let textIndex: number = texts.length - 1;
  let time: number = new Date().getTime();
  let morph: number = 0;
  let cooldown: number = cooldownTime;

  const doMorph = () => {
    morph -= cooldown;
    cooldown = 0;

    let fraction: number = morph / morphTime;

    if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
    }

    setMorph(fraction);
  };

  const setMorph = (fraction: number) => {
    if (text2Ref.current) {
      text2Ref.current.style.filter = `blur(${Math.min(
        8 / fraction - 8,
        100
      )}px)`;
      text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
    }

    fraction = 1 - fraction;

    if (text1Ref.current) {
      text1Ref.current.style.filter = `blur(${Math.min(
        8 / fraction - 8,
        100
      )}px)`;
      text1Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
    }

    if (text1Ref.current && text2Ref.current) {
      text1Ref.current.textContent = texts[textIndex % texts.length];
      text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
    }
  };

  const doCooldown = () => {
    morph = 0;

    if (text2Ref.current) {
      text2Ref.current.style.filter = "";
      text2Ref.current.style.opacity = "100%";
    }

    if (text1Ref.current) {
      text1Ref.current.style.filter = "";
      text1Ref.current.style.opacity = "0%";
    }
  };

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);

    const newTime: number = new Date().getTime();
    const shouldIncrementIndex: boolean = cooldown > 0;
    const dt: number = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
      if (shouldIncrementIndex) {
        textIndex++;
      }

      doMorph();
    } else {
      doCooldown();
    }
  };

  // Start animation when component is mounted
  useEffect(() => {
    if (text1Ref.current && text2Ref.current) {
      text1Ref.current.textContent = texts[textIndex % texts.length];
      text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
      animate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <>
      <div className="intro-background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="intro-container">
        <span id="text1" ref={text1Ref}></span>
        <span id="text2" ref={text2Ref}></span>
      </div>

      <svg id="filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default Intro;
