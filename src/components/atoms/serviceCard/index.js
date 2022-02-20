import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Toggle from "../toggle";
import styles from "./styles";
import universalStyle from "../../../theme/universalStyle";
import { ratioHeight, ratioWidth } from "../../../theme";

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
      {showToggle ? <Toggle onPress={onPress} value={value} /> : <Text></Text>}
    </TouchableOpacity>
  );
};

export default ServiceCard;
