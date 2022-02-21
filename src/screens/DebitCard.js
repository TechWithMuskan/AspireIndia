import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import Container from "../containers/container";
import CardDetail from "../components/organisms/cardDetail";
import CardServices from "../components/organisms/cardServices";
import Card from "../components/organisms/debitCard";
import { colors, ratioHeight } from "../theme";
import ProgressBar from "../components/atoms/progressBar";
import {
  fetchCardDetail,
  fetchSpendingLimit,
  fetchSpentLimit,
} from "../redux/action";
import universalStyle from "../theme/universalStyle";

const DebitCard = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  useEffect(() => {
    dispatch(fetchSpendingLimit());
    dispatch(fetchCardDetail());
    dispatch(fetchSpentLimit());
  }, [isFocused]);

  let weeklyLimit = useSelector((state) => state.common.weeklyLimit);
  const selectedLimit = weeklyLimit?.amount;

  return (
    <View style={styles.container}>
      <Container headerTitle="Debit Card" headerContent={<CardDetail />}>
        <View style={[universalStyle.subContainer, styles.cardContainer]}>
          <Card />
          {selectedLimit && <ProgressBar selectedLimit={selectedLimit} />}
          <CardServices selectedLimit={selectedLimit} />
        </View>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appSecondary,
  },
  cardContainer: {
    marginTop: 50 * ratioHeight,
  },
});

export default DebitCard;
