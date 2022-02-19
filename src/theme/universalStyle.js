import { StyleSheet } from "react-native";
import { ratioHeight, ratioWidth, colors, fonts } from "../theme";

const universalStyle = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  alignEnd: {
    alignItems: "flex-end",
  },
  background: {
    backgroundColor: colors.appSecondary,
  },
  flex1: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    paddingHorizontal: 15 * ratioWidth,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: colors.white,
    zIndex: 1000,
  },
  title: {
    fontSize: fonts.size.font20,
    fontFamily: fonts.type.AvenirNextBold,
    color: colors.appPrimary,
    margin: 30 * ratioHeight,
  },
});

export default universalStyle;
