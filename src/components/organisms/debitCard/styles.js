import { StyleSheet } from "react-native";
import { colors, fonts, ratioHeight, ratioWidth } from "../../../theme";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5 * ratioWidth,
    marginTop: "-30%",
  },
  deditCard: {
    backgroundColor: colors.appPrimary,
    paddingHorizontal: 20 * ratioHeight,
    paddingVertical: 15 * ratioHeight,
    height: 165 * ratioHeight,
    borderRadius: 10,
  },
  showCard: {
    alignItems: "flex-end",
    top: "5%",
  },
  username: {
    fontSize: fonts.size.font21,
    color: colors.white,
    fontFamily: fonts.type.AvenirNextBold,
    marginTop: 18 * ratioHeight,
    marginBottom: 20 * ratioHeight,
  },
  cardNumber: {
    fontSize: fonts.size.font15,
    color: colors.white,
    fontFamily: fonts.type.AvenirNextDemiBold,
    marginRight: 8 * ratioWidth,
    letterSpacing: 3,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 7 * ratioHeight,
  },
  thru: {
    fontSize: fonts.size.font13,
    color: colors.white,
    fontFamily: fonts.type.AvenirNextDemiBold,
    marginTop: 3 * ratioHeight,
  },
  cvv: {
    fontSize: fonts.size.font13,
    marginLeft: 25 * ratioWidth,
    color: colors.white,
    fontFamily: fonts.type.AvenirNextDemiBold,
    marginTop: 3 * ratioHeight,
  },
  showCvv: {
    fontSize: fonts.size.font13,
  },
  hiddenCvv: {
    fontSize: fonts.size.font14,
    letterSpacing: 1.5,
  },
});

export default styles;
