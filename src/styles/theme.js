export const breakpoints = [576, 768, 992, 1140, 1600];

const theme = {
  colors: {
    background: '#fff',
    primary: '#61dafb',
    body: '#000',
    link: '#61dafb',
  },
  fonts: {
    body: 'sans-serif',
    heading: 'sans-serif',
  },
  media: {
    sm: `${breakpoints[0]}px`,
    md: `${breakpoints[1]}px`,
    lg: `${breakpoints[2]}px`,
    xl: `${breakpoints[3]}px`,
    xxl: `${breakpoints[4]}px`,
  },
  // styled-system properties
  space: [],
  breakpoints: breakpoints.map((breakpoint) => `${breakpoint}px`),
};

export default theme;
