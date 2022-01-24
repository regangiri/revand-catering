import React from "react";
import Icon from "react-hero-icon";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function ScrollToTop() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const arrowTop = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 11l5-5m0 0l5 5m-5-5v12"
      />
    </svg>
  );

  return (
    <div className="fixed bottom-2	right-10 text-white">
      {<button onClick={scrollToTop}>{arrowTop}</button>}
    </div>
  );
}

export default ScrollToTop;
