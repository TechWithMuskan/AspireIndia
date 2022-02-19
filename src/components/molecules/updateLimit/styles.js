import { StyleSheet } from "react-native";
import { colors, ratioHeight, ratioWidth, fonts } from "../../../theme";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20 * ratioWidth,
    paddingVertical: 20 * ratioHeight,
    justifyContent: "space-between",
    flex: 1,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10 * ratioHeight,
  },
  title: {
    fontSize: fonts.size.font14,
    color: colors.textPrimary,
    fontFamily: fonts.type.AvenirNextMedium,
    marginLeft: 10 * ratioHeight,
  },
  detail: {
    fontSize: fonts.size.font13,
    color: colors.textGrey,
    fontFamily: fonts.type.AvenirNextRegular,
    marginTop: 8 * ratioHeight,
    paddingVertical: 10 * ratioHeight,
    borderTopColor: colors.lightGrey,
    borderTopWidth: 1,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14 * ratioHeight,
  },
});

export default styles;
