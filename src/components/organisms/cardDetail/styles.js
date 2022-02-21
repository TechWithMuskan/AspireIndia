import { StyleSheet } from "react-native";
import { colors, ratioHeight, fonts, ratioWidth } from "../../../theme";

const styles = StyleSheet.create({
  balance: {
    fontSize: fonts.size.font14,
    color: colors.white,
    fontFamily: fonts.type.AvenirNextMedium,
    marginTop: 18 * ratioHeight,
    marginBottom: 6 * ratioHeight,
  },
  buttonStyle: {
    marginRight: 15 * ratioWidth,
  },
  title: {
    fontSize: fonts.size.font22,
    color: colors.white,
    fontFamily: fonts.type.AvenirNextBold,
  },
});

export default styles;
