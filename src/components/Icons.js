import React from "react";
import { cx } from "../utils";

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={cx("w-full h-auto", className)}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={cx("w-full h-auto", className)}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const LinkedinIcon = ({ className, ...rest }) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
      width={42}
      height={43}
      viewBox="0 0 42 43"
      className={cx("w-full h-auto", className)}
      {...rest}
  >
    <path
      fill="#3F51B5"
      d="M42 37a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5V11a5 5 0 0 1 5-5h26a5 5 0 0 1 5 5v26z"
    />
    <path
      fill="#FFF"
      d="M34.368 25H31v13h-5V25h-3v-4h3v-2.41c.002-3.508 1.459-5.59 5.592-5.59H35v4h-2.287C31.104 17 31 17.6 31 18.723V21h4l-.632 4z"
    />
  </svg>
  );
};

export const TwitterIcon = ({ className, ...rest }) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={43}
    viewBox="0 0 42 43"
    className={cx("w-full h-auto", className)}
    {...rest}
  >
    <path
      fill="#2962ff"
      d="M15 36V6.827l-1.211-.811C8.64 8.083 5 13.112 5 19v10c0 7.732 6.268 14 14 14h10c4.722 0 8.883-2.348 11.417-5.931V36H15z"
    />
    <path
      fill="#eee"
      d="M29 5H19c-1.845 0-3.601.366-5.214 1.014C10.453 9.25 8 14.528 8 19c0 6.771.936 10.735 3.712 14.607.216.301.357.653.376 1.022.043.835-.129 2.365-1.634 3.742-.162.148-.059.419.16.428.942.041 2.843-.014 4.797-.877a1.976 1.976 0 0 1 1.729.083C20.453 39.764 24.333 40 28 40c4.676 0 9.339-1.04 12.417-2.916A13.922 13.922 0 0 0 43 29V19c0-7.732-6.268-14-14-14z"
    />
    <path
      fill="#2962ff"
      d="M36.75 27C34.683 27 33 25.317 33 23.25s1.683-3.75 3.75-3.75 3.75 1.683 3.75 3.75S38.817 27 36.75 27zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25S39 24.49 39 23.25 37.99 21 36.75 21zM31.5 27h-1a.5.5 0 0 1-.5-.5V18h1.5v9zM27 19.75v.519a3.715 3.715 0 0 0-2.25-.769c-2.067 0-3.75 1.683-3.75 3.75S22.683 27 24.75 27c.847 0 1.621-.293 2.25-.769v.269a.5.5 0 0 0 .5.5h1v-7.25H27zm-2.25 5.75c-1.24 0-2.25-1.01-2.25-2.25S23.51 21 24.75 21 27 22.01 27 23.25s-1.01 2.25-2.25 2.25z"
    />
    <path
      fill="#2962ff"
      d="M21.25 18h-8v1.5h5.321L13 26h.026a1.221 1.221 0 0 0-.276.75V27h7.5a.5.5 0 0 0 .5-.5v-1h-5.321L21 19h-.026c.163-.211.276-.463.276-.75V18z"
    />
  </svg>
  );
};

export const GithubIcon = ({ className, ...rest }) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={43}
    viewBox="0 0 42 43"
    className={cx("w-full h-auto", className)}
    {...rest}
  >
    <path d="M41 4H9C6.243 4 4 6.243 4 9v32c0 2.757 2.243 5 5 5h32c2.757 0 5-2.243 5-5V9c0-2.757-2.243-5-5-5zm-3.994 18.323a7.482 7.482 0 0 1-.69.035 7.492 7.492 0 0 1-6.269-3.388v11.537a8.527 8.527 0 1 1-8.527-8.527c.178 0 .352.016.527.027v4.202c-.175-.021-.347-.053-.527-.053a4.351 4.351 0 1 0 0 8.704c2.404 0 4.527-1.894 4.527-4.298l.042-19.594h4.016a7.488 7.488 0 0 0 6.901 6.685v4.67z" />
  </svg>
  );
};

// export const DribbbleIcon = ({ className, ...rest }) => {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg"
//     width={42}
//     height={43}
//     viewBox="30 24 40 43"
//     className={cx("w-full h-auto", className)}
//     {...rest}>
//     <path
//       fill="#fdfcee"
//       d="M69.921 81.654h-39c-6.6 0-12-5.4-12-12v-39c0-6.6 5.4-12 12-12h39c6.6 0 12 5.4 12 12v39c0 6.6-5.4 12-12 12z"
//     />
//     <path
//       fill="#1f212b"
//       d="M69.921 82.654h-39c-7.168 0-13-5.832-13-13v-39c0-7.168 5.832-13 13-13h39c7.168 0 13 5.832 13 13v39c0 7.168-5.832 13-13 13zm-39-63c-6.065 0-11 4.935-11 11v39c0 6.065 4.935 11 11 11h39c6.065 0 11-4.935 11-11v-39c0-6.065-4.935-11-11-11h-39z"
//     />
//     <path
//       fill="#fdfcee"
//       d="M77.421 48.154v18.663c0 5.685-4.652 10.337-10.337 10.337H33.758c-5.685 0-10.337-4.652-10.337-10.337V33.491c0-5.685 4.652-10.337 10.337-10.337h33.663"
//     />
//     <path
//       fill="#1f212b"
//       d="M67.084 77.654H33.758c-5.976 0-10.837-4.861-10.837-10.837V33.49c0-5.976 4.861-10.837 10.837-10.837h33.663a.5.5 0 0 1 0 1H33.758c-5.424 0-9.837 4.413-9.837 9.837v33.326c0 5.424 4.413 9.837 9.837 9.837h33.326c5.424 0 9.837-4.413 9.837-9.837V48.154a.5.5 0 0 1 1 0v18.663c0 5.975-4.861 10.837-10.837 10.837z"
//     />
//     <path
//       fill="#1f212b"
//       d="M77.421 46.654a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5zm0-6a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5z"
//     />
//     <path
//       fill="#f27c7d"
//       d="M66.101 43.179s-.312-2.353-1.271-3.389c-1.217-1.358-2.581-1.366-3.206-1.443C57.145 38 50.428 38 50.428 38h-.015s-6.717 0-11.194.347c-.625.077-1.988.085-3.206 1.443-.958 1.036-1.271 3.389-1.271 3.389s-.32 2.761-.32 5.522v2.588c0 2.763.32 5.523.32 5.523s.312 2.352 1.271 3.386c1.218 1.358 2.816 1.317 3.528 1.459 2.56.262 10.88.343 10.88.343s6.724-.012 11.202-.355c.625-.08 1.989-.088 3.206-1.446.958-1.034 1.271-3.386 1.271-3.386s.32-2.761.32-5.523v-2.588c.001-2.762-.319-5.523-.319-5.523z"
//     />
//     <path
//       fill="#1f212b"
//       d="M50.422 62.5c-.347-.003-8.379-.084-10.933-.346-.159-.029-.294-.046-.447-.066-.848-.109-2.267-.292-3.401-1.557-1.051-1.132-1.382-3.552-1.396-3.654-.004-.036-.324-2.829-.324-5.589V48.7c0-2.758.32-5.552.323-5.58.015-.111.347-2.532 1.401-3.671 1.226-1.367 2.591-1.505 3.324-1.579l.188-.02c4.468-.347 11.188-.351 11.256-.351.082 0 6.802.004 11.249.348l.21.022c.733.074 2.1.213 3.329 1.585 1.051 1.133 1.382 3.555 1.396 3.657l.001.008c.003.028.323 2.822.323 5.581v2.588c0 2.759-.32 5.553-.323 5.581-.015.111-.347 2.53-1.402 3.668-1.22 1.362-2.583 1.504-3.315 1.581l-.193.021c-4.472.345-11.198.361-11.266.361zm.006-24c-.082 0-6.765.004-11.17.345l-.188.021c-.641.065-1.713.173-2.686 1.258-.703.76-1.066 2.51-1.147 3.121-.003.019-.316 2.758-.316 5.456v2.588c0 2.701.313 5.438.317 5.466.08.603.444 2.353 1.141 3.103.893.995 2.035 1.142 2.791 1.239.179.023.337.044.468.07 2.462.25 10.705.333 10.788.333.062 0 6.751-.016 11.159-.354l.191-.021c.641-.067 1.712-.179 2.681-1.26.701-.757 1.066-2.507 1.147-3.118.003-.019.316-2.758.316-5.458v-2.588c0-2.65-.303-5.338-.316-5.461-.083-.615-.447-2.361-1.143-3.111-.977-1.09-2.05-1.199-2.69-1.264l-.21-.023c-4.385-.338-11.066-.342-11.133-.342z"
//     />
//     <path fill="#fdfcee" d="M46.421 43.846v12l10-6z" />
//     <path
//       fill="#1f212b"
//       d="M46.421 56.346a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .757-.429l10 6a.499.499 0 0 1 0 .858l-10 6a.503.503 0 0 1-.257.071zm.5-11.616v10.233l8.528-5.117-8.528-5.116z"
//     />
//   </svg>
//   );
// };
