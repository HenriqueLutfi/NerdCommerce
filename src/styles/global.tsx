import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  

  body: {
    backgroundColor: "$backGround",
    color: "$primary",
    textShadow:`1px 1px 0px $cyberBlue`,
    // "-webkit-font-smoothing": "antialiassed",
  },

  "body,input,textarea,button": {
    fontFamily: "CyberwayRiders-lg97d",
    src: `local('CyberwayRiders-lg97d'),url("../../public/assets/fonts/cyberpunk/CyberwayRiders-lg97d.woff2") format('woff2')`,
    fontWeight: 400,
  },

});
