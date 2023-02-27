import { createStitches } from "@stitches/react";

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
} = createStitches({
    theme:{
        colors:{
            primary:"#fcee0c",
            backGround:"#000",
        },
        fontSizes:{
            md:'1.125rem',
            lg:'1.25rem',
            xl:'1.5rem',
            '2xl':'2rem',
        },
        shadows:{
            cyberBlue:"#03d8f3"
        }
    }
})

export const darkTheme = createTheme({
    colors: { 
        primary:"#0cfcf0",
    },
    space: {},
    fonts: {},
  });