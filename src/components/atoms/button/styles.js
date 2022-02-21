import { StyleSheet } from "react-native";
import { fonts, colors, ratioHeight, ratioWidth } from "../../../theme";

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.appPrimary,
    borderRadius: 4,
    height: 18 * ratioHeight,
    width: 40 * ratioWidth,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  label: {
    fontSize: fonts.size.font12,
    color: colors.white,
    fontFamily: fonts.type.AvenirNextBold,
  },
});

export default styles;
