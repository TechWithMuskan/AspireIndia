import { StyleSheet } from "react-native";
import { colors, fonts, ratioHeight, ratioWidth } from "../../../theme";

const styles = StyleSheet.create({
  cardContainer: {
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
