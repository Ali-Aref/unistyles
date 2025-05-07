import { StyleSheet } from "react-native-unistyles";
// import { getThemeName } from "@/lib/mmkv/storage";

import { breakpoints, Breakpoints } from "./breakpoints";
import darkTheme from "./themes/dark";
import lightTheme from "./themes/light";


type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};
const appThemes: AppThemes = {
  light: lightTheme,
  dark: darkTheme,
};

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes { }
  export interface UnistylesBreakpoints extends Breakpoints { }
}

StyleSheet.configure({
  themes: appThemes,
  breakpoints,
  settings: {
    adaptiveThemes: true,
    // adaptiveThemes: false,
    // initialTheme() {
    //   return getThemeName();
    // },
  },
});
