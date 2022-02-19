import { StyleSheet } from "react-native";
import { colors, ratioHeight, ratioWidth } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.appSecondary,
  },
  topContainer: {
    flex: 1,
    backgroundColor: colors.appSecondary,
    paddingHorizontal: 15 * ratioWidth,
    paddingTop: 10 * ratioHeight,
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});

export default styles;
