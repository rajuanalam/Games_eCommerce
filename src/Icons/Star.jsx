import React from "react";

const Star = ({svgW,svgH}) => {
  return (
    <svg
      width={svgW}
      height={svgH}
      viewBox="0 0 50 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M49.884 18.876H30.862L24.982 0.769043L19.087 18.876L0.0620117 18.858L15.47 30.058L9.57501 48.149L24.982 36.969L40.372 48.149L34.495 30.06L49.884 18.876Z"
        fill="url(#paint0_linear_1_55)"
      />
      <path
        opacity="0.3"
        d="M35.8169 34.1601L34.4949 30.0601L24.9819 36.9601L35.8169 34.1601Z"
        fill="black"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_55"
          x1="52.8733"
          y1="0.769044"
          x2="-4.33021"
          y2="47.621"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01" stop-color="#FC00FF" />
          <stop offset="1" stop-color="#00DBDE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Star;
