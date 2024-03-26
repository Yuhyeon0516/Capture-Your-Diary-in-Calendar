import * as React from "react";
import Svg, { Path } from "react-native-svg";

function KakaoSvg() {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        opacity={0.902}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 1.469c-7.327 0-14 5.89-14 10.872 0 3.733 2.424 7.026 6.115 8.983l-1.553 5.702c-.138.506.436.907.876.616l6.809-4.518c.574.056 1.159.088 1.753.088 7.731 0 14-4.867 14-10.871 0-4.983-6.269-10.872-14-10.872z"
        fill="#000"
      />
    </Svg>
  );
}

export default KakaoSvg;
