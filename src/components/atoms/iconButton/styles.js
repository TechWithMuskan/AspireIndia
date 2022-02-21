import { StyleSheet } from "react-native";
import { fonts, colors, ratioHeight, ratioWidth } from "../../../theme";

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.white,
    borderTopEndRadius: 6,
    borderTopStartRadius: 6,
    flexDirection: "row",
    paddingHorizontal: 10 * ratioHeight,
    paddingBottom: 15 * ratioHeight,
    paddingTop: 5 * ratioHeight,
  },
  label: {
    fontSize: fonts.size.font12,
    color: colors.appPrimary,
    fontFamily: fonts.type.AvenirNextDemiBold,
    marginLeft: 5 * ratioWidth,
  },
});

export default styles;
