import * as React from "react";
import Svg, { Path } from "react-native-svg";

function GoogleSvg() {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.36 16.364c0-1.134-.102-2.225-.29-3.272H16v6.189h8.61c-.37 2-1.497 3.694-3.192 4.829v4.015h5.171c3.026-2.786 4.771-6.888 4.771-11.76z"
        fill="#4285F4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 32c4.32 0 7.942-1.434 10.589-3.877l-5.171-4.015c-1.433.96-3.265 1.527-5.418 1.527-4.167 0-7.695-2.814-8.953-6.596H1.702v4.145C4.334 28.415 9.745 32 16 32z"
        fill="#34A853"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.047 19.04A9.618 9.618 0 016.545 16c0-1.055.182-2.08.502-3.04V8.814H1.702A15.994 15.994 0 000 16c0 2.582.618 5.025 1.702 7.185l5.345-4.145z"
        fill="#FBBC05"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 6.364c2.349 0 4.458.807 6.116 2.392l4.59-4.589C23.933 1.585 20.312 0 16 0 9.745 0 4.334 3.585 1.702 8.815l5.345 4.145C8.305 9.178 11.833 6.364 16 6.364z"
        fill="#EA4335"
      />
    </Svg>
  );
}

export default GoogleSvg;
