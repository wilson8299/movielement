export const Color = {
  primary: {
    50: "#e2f2fc",
    100: "#b9ddf9",
    200: "#8dc8f5",
    300: "#60b3f1",
    400: "#3ca2ef",
    500: "#0e93ec",
    600: "#0885df",
    700: "#0074cc",
    800: "#0063ba",
    900: "#00459b",
  },
  secondary: {
    50: "#fcf2e2",
    100: "#f8dfb6",
    200: "#f4ca88",
    300: "#f0b55b",
    400: "#eda53d",
    500: "#ea972b",
    600: "#e68c28",
    700: "#df7e24",
    800: "#d87021",
    900: "#cc5a1d",
  },
  general: {
    50: "#f5faff",
    100: "#eff4fc",
    200: "#e7ecf4",
    300: "#d8dde5",
    400: "#b5bac1",
    500: "#969aa1",
    600: "#6d7278",
    700: "#5a5e64",
    800: "#252b35",
    900: "#171d27",
  },
  error: "#e53935",
};

export const Size = {
  sm: "768px",
  md: "996px",
  lg: "1200px",
  fluid: "100%",
};

export const Device = {
  sm: `(max-width: ${Size.sm})`,
  md: `(max-width: ${Size.md})`,
  lg: `(max-width: ${Size.lg})`,
  fluid: `(max-width: ${Size.fluid})`,
};
