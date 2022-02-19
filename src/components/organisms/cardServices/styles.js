import { StyleSheet } from "react-native";
import { colors, fonts, ratioHeight, ratioWidth } from "../../../theme";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15 * ratioWidth,
    top: "-20%",
  },
  cardContainer: {
    paddingHorizontal: 5 * ratioHeight,
    paddingVertical: 10 * ratioHeight,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  midContainer: {
    marginLeft: 15 * ratioWidth,
  },
  title: {
    fontFamily: fonts.type.AvenirNextMedium,
    fontSize: fonts.size.font14,
    color: colors.appSecondary,
  },
  description: {
    fontFamily: fonts.type.AvenirNextRegular,
    fontSize: fonts.size.font12,
    color: colors.textSecondary,
  },
});

export default styles;
