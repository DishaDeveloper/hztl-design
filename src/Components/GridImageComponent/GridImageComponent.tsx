import React, { useEffect, useRef } from "react";
import { GridImageComponentProps, ViewportRect } from "./GridImageComponent.types";

export const GridImageComponent: React.FC<GridImageComponentProps> = ({
  children,
  componentTheme = "",
  variant = "",
}) => {
  const heroGridRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const tiltDegree = 7;

  const isElementInViewport = (element: HTMLElement): boolean => {
    const rect: ViewportRect = element.getBoundingClientRect();
    return (
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const mapRange = (
    value: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
  ): number => {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };

  const updateScrollPos = (): void => {
    const heroGrid = heroGridRef.current;
    const hero = heroRef.current;

    if (!heroGrid || !hero) return;

    const scrollPos = window.scrollY;
    const rect = heroGrid.getBoundingClientRect();
    const scrollPercent = (scrollPos * 100) / rect.height;

    const mappedValue = mapRange(
      scrollPercent,
      0,
      100,
      -tiltDegree,
      tiltDegree
    );
    heroGrid.style.setProperty("--scroll-tilt", `${mappedValue}`);
    const heroOpacity = mapRange(scrollPercent, 0, 10, 1, 0);
    const heroScale = mapRange(scrollPercent, 0, 10, 1, 0); // Not used, but kept for reference
    const heroTransformY = mapRange(scrollPercent, 0, 10, 0, -100);
    const heroBlur = mapRange(scrollPercent, 0, 10, 0, 20);
    hero.style.opacity = heroOpacity.toString();
    hero.style.filter = `blur(${heroBlur}px)`;
    hero.style.transform = `translateY(${heroTransformY}px)`;
  };

  const handleScroll = (): void => {
    const heroGrid = heroGridRef.current;
    if (heroGrid && isElementInViewport(heroGrid)) {
      updateScrollPos();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Call handleScroll initially to set initial styles
    handleScroll();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const DefaultGridComponent = (): JSX.Element => {
    return (
      <section className="tiltgrid" ref={heroGridRef}>
        <div className="tiltgrid__container" ref={heroRef}>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/11/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/33/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/22/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/4/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/15/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/62/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/7/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/18/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/29/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/10/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/11/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/12/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/13/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/14/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/15/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/16/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/17/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/18/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/19/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/20/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/21/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/22/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/23/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/24/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/25/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/26/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/27/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/28/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/29/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/30/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/31/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/32/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/33/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/34/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/35/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/36/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/37/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/38/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/39/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/40/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/41/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/42/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/43/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/44/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/45/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/46/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/47/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/48/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/49/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/50/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/51/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/52/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/53/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/54/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/55/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/56/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/57/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/58/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/59/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/60/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/61/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/62/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/63/1280/720"
              alt=""
            />
          </div>
          <div>
            <img
              loading="lazy"
              src="https://picsum.photos/id/64/1280/720"
              alt=""
            />
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      {children ? children : <DefaultGridComponent />}
    </>
  );
};

export default GridImageComponent;
