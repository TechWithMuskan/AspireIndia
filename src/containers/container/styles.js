import { StyleSheet } from "react-native";
import { colors, ratioHeight } from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.appSecondary,
    flex: 1,
  },
  containerView: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 15 * ratioHeight,
  },
});

export default styles;
