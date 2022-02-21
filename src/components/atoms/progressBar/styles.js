import { StyleSheet } from "react-native";
import { colors, ratioHeight, fonts } from "../../../theme";

const styles = StyleSheet.create({
  container: {
    marginVertical: 10 * ratioHeight,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10 * ratioHeight,
    paddingVertical: 8 * ratioHeight,
  },
  title: {
    fontSize: fonts.size.font13,
    color: colors.textPrimary,
    fontFamily: fonts.type.AvenirNextMedium,
  },
  amount: {
    fontSize: fonts.size.font13,
    color: colors.appPrimary,
    fontFamily: fonts.type.AvenirNextMedium,
  },
  limit: {
    fontSize: fonts.size.font13,
    color: colors.textGrey,
    fontFamily: fonts.type.AvenirNextMedium,
  },
  progressBar: {
    marginHorizontal: 10 * ratioHeight,
    height: 12 * ratioHeight,
    width: "94%",
    backgroundColor: "rgba(32,209,103, 0.3)",
    borderRadius: 30,
  },
  innerProgressBar: (percentage) => ({
    backgroundColor: colors.appPrimary,
    borderBottomEndRadius: 80,
    borderTopStartRadius: 40,
    borderBottomStartRadius: 40,
    borderTopEndRadius: 0,
    width: percentage ? `${percentage}%` : 0,
    height: 12 * ratioHeight,
  }),
});

export default styles;
