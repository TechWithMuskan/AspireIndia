import { StyleSheet } from "react-native";
import { colors, ratioHeight, ratioWidth, fonts } from "../../../theme";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5 * ratioWidth,
    paddingVertical: 20 * ratioHeight,
    justifyContent: "space-between",
    flex: 1,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10 * ratioHeight,
  },
  priceContainer: {
    flexDirection: "row",
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    paddingBottom: 5 * ratioHeight,
  },
  amount: {
    color: colors.textPrimary,
    fontSize: fonts.size.font24,
    fontFamily: fonts.type.AvenirNextBold,
    marginLeft: 10 * ratioHeight,
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
    marginVertical: 8 * ratioHeight,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20 * ratioHeight,
  },
});

export default styles;
