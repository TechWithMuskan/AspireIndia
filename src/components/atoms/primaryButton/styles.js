import { StyleSheet } from "react-native";
import { fonts, colors, ratioHeight, ratioWidth } from "../../../theme";

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 30,
    paddingVertical: 12 * ratioHeight,
    marginHorizontal: 20 * ratioWidth,
    alignItems: "center",
    elevation: 3,
    marginTop: 20 * ratioHeight,
  },
  disableButton: {
    backgroundColor: colors.buttonGrey,
  },
  enableButton: {
    backgroundColor: colors.appPrimary,
  },
  label: {
    fontSize: fonts.size.font17,
    color: colors.white,
    fontFamily: fonts.type.AvenirNextDemiBold,
  },
});

export default styles;
