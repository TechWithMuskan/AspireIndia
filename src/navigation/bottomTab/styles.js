import { StyleSheet } from "react-native";
import { colors, fonts, ratioHeight } from "../../theme";

const styles = StyleSheet.create({
  tab: {
    height: 46 * ratioHeight,
    paddingBottom: 5 * ratioHeight,
    paddingTop: 5 * ratioHeight,
  },
  label: {
    fontSize: fonts.size.font10,
    fontFamily: fonts.type.AvenirNextMedium,
    color: colors.grey,
  },
  focusedLabel: {
    fontSize: fonts.size.font10,
    fontFamily: fonts.type.AvenirNextMedium,
    color: colors.appPrimary,
  },
  imageStyle: {
    height: 17 * ratioHeight,
    width: 17 * ratioHeight,
  },
});

export default styles;
