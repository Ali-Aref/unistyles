import { colors } from "../colors";
import { unites } from "../unites";

const lightTheme = {
  colors: {
    typography: colors.slate900,
    icon: colors.slate600,
    link: colors.blue600,
    background: colors.slate200,
    border: colors.slate300,
    divider: colors.slate300,
    ...colors,
  },
  ...unites,
  components: {
    keyboard: {
      appearance: "light",
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
      bg: colors.slate100,
      borderRadius: unites.radius.xl,
      borderWidth: 1,
      borderColor: colors.slate300,
    },
    input: {
      bg: colors.slate300,
      placeholderColor: colors.gray500,
      borderWidth: 0,
      borderColor: colors.slate400,
      borderRadius: unites.radius.md,
      dropdownSelected: colors.slate50,
    },
    bottomSheet: {
      bg: colors.slate100,
      handleColor: colors.slate900,
      backdrop: colors.slate900,
    },
  },
} as const;

export default lightTheme;
