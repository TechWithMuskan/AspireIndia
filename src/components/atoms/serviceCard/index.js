import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Toggle from "../toggle";
import { ratioHeight, ratioWidth } from "../../../theme";
import universalStyle from "../../../theme/universalStyle";
import styles from "./styles";

const ServiceCard = (props) => {
  const { showToggle, Icons, value, onPress, title, description, cardPress } =
    props;

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={cardPress}>
      <View style={universalStyle.row}>
        <Icons height={32 * ratioHeight} width={32 * ratioWidth} />
        <View style={styles.midContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      {showToggle && <Toggle onPress={onPress} value={value} />}
    </TouchableOpacity>
  );
};

export default ServiceCard;
