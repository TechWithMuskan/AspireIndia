import { StyleSheet } from "react-native";
import { fonts, colors, ratioHeight, ratioWidth } from "../../../theme";

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "rgba(32,209,103, 0.1)",
    borderRadius: 4,
    paddingVertical: 10 * ratioHeight,
    width: "30%",
    alignItems: "center",
  },
  label: {
    fontSize: fonts.size.font12,
    color: colors.appPrimary,
    fontFamily: fonts.type.AvenirNextDemiBold,
    marginLeft: 5 * ratioWidth,
    zIndex: 2,
  },
});

export default styles;
