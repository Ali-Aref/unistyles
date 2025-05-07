import { StyleSheet } from "react-native-unistyles";

const s = StyleSheet.create((theme, rt) => ({
  safeArea: {
    gap: theme.spacing.sm,
    paddingLeft: rt.insets.left + theme.spacing.md,
    paddingRight: rt.insets.right + theme.spacing.md,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  }
}));

export default s;
