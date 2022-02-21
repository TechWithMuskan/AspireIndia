import { StyleSheet } from "react-native";
import { colors, ratioHeight, ratioWidth, fonts } from "../../../theme";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15 * ratioWidth,
    paddingTop: 10 * ratioHeight,
    paddingBottom: 20 * ratioHeight,
    backgroundColor: colors.appSecondary,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10 * ratioHeight,
  },
  title: {
    fontSize: fonts.size.font22,
    color: colors.white,
    fontFamily: fonts.type.AvenirNextBold,
  },
});

export default styles;
