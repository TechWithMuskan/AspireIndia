import { StyleSheet } from "react-native";
import { colors, fonts, ratioHeight, ratioWidth } from "../../../theme";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8 * ratioWidth,
    marginTop: "-25%",
  },
  deditCard: {
    backgroundColor: colors.appPrimary,
    padding: 20 * ratioHeight,
    height: 170 * ratioHeight,
    borderRadius: 20,
  },
  showCard: {
    alignItems: "flex-end",
    top: "5%",
  },
  username: {
    fontSize: fonts.size.font21,
    color: colors.white,
    fontFamily: fonts.type.AvenirNextBold,
    marginTop: 22 * ratioHeight,
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
    marginVertical: 8 * ratioHeight,
  },
  cvv: {
    marginLeft: 25 * ratioWidth,
  },
  thru: {
    fontSize: fonts.size.font13,
    color: colors.white,
    fontFamily: fonts.type.AvenirNextDemiBold,
    marginTop: 3 * ratioHeight,
  },
});

export default styles;
