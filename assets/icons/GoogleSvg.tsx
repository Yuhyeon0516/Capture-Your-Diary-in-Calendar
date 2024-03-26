import * as React from "react";
import Svg, { Path } from "react-native-svg";

function GoogleSvg() {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.2 20.454c0-1.418-.127-2.782-.364-4.09H20V24.1h10.764c-.464 2.5-1.873 4.618-3.991 6.036v5.018h6.463c3.782-3.482 5.964-8.609 5.964-14.7z"
        fill="#4285F4"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 40c5.4 0 9.927-1.79 13.236-4.845l-6.463-5.018c-1.791 1.2-4.082 1.91-6.773 1.91-5.209 0-9.618-3.519-11.19-8.246H2.126v5.182C5.418 35.519 12.182 40 20 40z"
        fill="#34A853"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.81 23.8c-.4-1.2-.628-2.482-.628-3.8 0-1.319.227-2.6.627-3.8v-5.182H2.127A19.992 19.992 0 000 19.999c0 3.228.773 6.282 2.127 8.982L8.81 23.8z"
        fill="#FBBC05"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 7.955c2.936 0 5.573 1.009 7.646 2.99l5.736-5.736C29.918 1.982 25.392 0 20 0 12.182 0 5.418 4.482 2.127 11.018L8.81 16.2C10.382 11.473 14.791 7.955 20 7.955z"
        fill="#EA4335"
      />
    </Svg>
  );
}

export default GoogleSvg;
