// import { mixHexColors } from "@/lib/utils/theme";

import { colors } from "../colors";
import { unites } from "../unites";


const darkTheme = {
  colors: {
    typography: colors.slate200,
    icon: colors.slate300,
    link: colors.blue400,
    //background: colors.slate800,
    background: colors.stone700,
    overlay: colors.slate700,
    border: colors.stone500,
    divider: colors.stone500,
    ...colors,
  },
  ...unites,
  components: {
    keyboard: {
      appearance: "dark",
    },
    statusBar: {
      bg: "black",
      style: "light",
    },
    header: {
      bg: "black",
      fg: colors.slate200,
    },
    tabs: {
      bg: "black",
      fg: colors.slate200,
      tintColor: colors.amber500,
    },
    themedView: {
      borderRadius: 14,
      px: 10,
      bg: "black",
    },
    card: {
      bg: colors.stone600,
      borderRadius: unites.radius.xl,
      borderWidth: 1,
      borderColor: colors.stone700,
    },
    input: {
      bg: colors.stone600,
      placeholderColor: colors.gray400,
      borderWidth: 0,
      borderColor: colors.slate400,
      borderRadius: unites.radius.md,
      dropdownSelected: colors.slate900,
    },
    bottomSheet: {
      bg: colors.stone700,
      handleColor: colors.slate200,
      backdrop: "black",
    },
  },
} as const;

export default darkTheme;
