import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import universalStyle from "../../../theme/universalStyle";
import { ratioHeight, ratioWidth } from "../../../theme";
import Toggle from "../../atoms/toggle";
import { serviceList } from "../../../global/config";
import styles from "./styles";

const CardServices = (props) => {
  const { selectedLimit } = props;
  const navigation = useNavigation();

  const onNavigate = (id) => {
    if (id === 2) navigation.navigate("SpendingLimit");
  };

  const ItemView = ({ item }) => {
    const Image = item.image;
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => onNavigate(item.id)}
      >
        <View style={universalStyle.row}>
          <Image height={32 * ratioHeight} width={32 * ratioWidth} />
          <View style={styles.midContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
        {item.toggle ? (
          <Toggle selectedLimit={selectedLimit} id={item.id} />
        ) : (
          <Text></Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={serviceList || []}
        renderItem={ItemView}
        nestedScrollEnabled={true}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CardServices;
