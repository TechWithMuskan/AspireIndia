import { StyleSheet } from "react-native";
import { fonts, colors, ratioHeight, ratioWidth } from "../../../theme";

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.buttonGrey,
    borderRadius: 30,
    paddingVertical: 12 * ratioHeight,
    marginHorizontal: 20 * ratioWidth,
    alignItems: "center",
    elevation: 3,
    marginTop: 20 * ratioHeight,
  },
  label: {
    fontSize: fonts.size.font17,
    color: colors.white,
    fontFamily: fonts.type.AvenirNextDemiBold,
  },
});

export default styles;
