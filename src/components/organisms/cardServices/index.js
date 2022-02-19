import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import universalStyle from "../../../theme/universalStyle";
import {
  Insight,
  Transfer,
  Freeze,
  NewCard,
  Deactivate,
} from "../../../theme/svgs";
import { ratioHeight, ratioWidth } from "../../../theme";
import Toggle from "../../atoms/toggle";

const data = [
  {
    id: 1,
    title: "Top-up account",
    description: "Deposit money to your account to use with card",
    toggle: false,
    image: Insight,
  },
  {
    id: 2,
    title: "Weekly spending limit",
    description: "You haven’t set any spending limit on card",
    toggle: true,
    image: Transfer,
  },
  {
    id: 3,
    title: "Freeze card",
    description: "Your debit card is currently active",
    toggle: true,
    image: Freeze,
  },
  {
    id: 4,
    title: "Get a new card",
    description: "This deactivates your cureent debit card",
    toggle: false,
    image: NewCard,
  },
  {
    id: 5,
    title: "Deactivated cards",
    description: "Your previously deactivated cards",
    toggle: false,
    image: Deactivate,
  },
];

const CardServices = () => {
  const ItemView = ({ item }) => {
    const Image = item.image;
    return (
      <TouchableOpacity style={styles.cardContainer} key={item.id}>
        <View style={styles.subContainer}>
          <View style={universalStyle.row}>
            <Image height={32 * ratioHeight} width={32 * ratioWidth} />
            <View style={styles.midContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
          {item.toggle ? <Toggle /> : <Text></Text>}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={data || []} renderItem={ItemView} />
    </View>
  );
};

export default CardServices;
