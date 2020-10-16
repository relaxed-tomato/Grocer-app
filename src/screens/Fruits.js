import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Alert
} from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { Header, Left, Right, Title, Body, Subtitle } from "native-base";
import { Avatar, Card, Paragraph } from "react-native-paper";
import data from "./data";
import { AddCartContext, AddSavedContext } from "../screens/CartContext";

export default function Fruits({ navigation, ...props }) {
  const { updateCart } = useContext(AddCartContext);
  const { updateSaved } = useContext(AddSavedContext);

  const useCart = updateCart;
  const useSaved = updateSaved;

  //Structure of the product list.
  const Form = ({ name, description, price, id, image }) => (
    <ImageBackground
      source={image ? image : require("../img/sig.png")}
      imageStyle={{ borderRadius: 12 }}
      style={{
        height: 220,
        width: 175,
        position: "relative", // because it's parent
        marginBottom: 15,
        marginTop: 19,
        marginRight: 7,
        marginLeft: 4,
        top: 2,
        left: 2
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          color: "white",
          position: "absolute", // child
          bottom: 0, // position where you want
          left: 0,
          marginBottom: 55,
          marginLeft: 10,
          fontSize: 20
        }}
      >
        {name}
      </Text>

      <Text
        style={{
          bottom: 0,
          left: 0,
          position: "absolute",
          fontSize: 15,
          marginBottom: 35,
          marginLeft: 10,
          color: "white"
        }}
      >
        ${price}
      </Text>

      <Text
        style={{
          bottom: 0,
          left: 0,
          position: "absolute",
          marginLeft: 10,
          color: "white",
          fontSize: 12,
          marginBottom: 5
        }}
      >
        {description}{" "}
      </Text>

      <View style={{ flexDirection: "row" }}>
        <Button
          type="clear"
          style={{
            //right:0,
            top: 0,
            marginTop: 3,
            paddingLeft: 8
          }}
          icon={<Feather name="heart" size={15} color="white" />}
          onPress={() => updateSaved([name, price])}
        />

        <Button
          type="clear"
          style={{ right: 0, top: 0, marginTop: 3, paddingLeft: 94 }}
          icon={<Feather name="shopping-bag" size={15} color="white" />}
          onPress={() => updateCart({ name })}
        />
      </View>
    </ImageBackground>
  );

  //Testing alert
  const handlePress = id => {
    const click = data.find(cust => {
      return cust.id === data.id;
    });

    Alert.alert("Buy Me", ` Name: ${data.name} \n Price: ${data.price}`);
  };

  //Render Items.
  const renderItem = (
    { item, id, useCart, useSaved } //had to remove navigation here so i could also render navigation.
  ) => (
    <TouchableOpacity onPress={() => handlePress(id)}>
      <Form
        id={item.id}
        name={item.name}
        description={item.description}
        image={item.image}
        price={item.price}
      />
    </TouchableOpacity>
  );

  return (
    <View>
      <Header style={{ marginTop: 3 }}>
        <Left>
          <Button
            type="clear"
            style={{ paddingLeft: 9 }}
            icon={
              <Ionicons name="ios-arrow-round-back" size={30} color="black" />
            }
            onPress={() => navigation.navigate("SearchScreen")}
          />
        </Left>
        <Body>
          <Title>Fruits</Title>
        </Body>
        <Right>
          <Button
            style={styles.titch}
            type="clear"
            icon={<Icon name="bars" size={20} color="black" />}
            onPress={() => navigation.openDrawer()}
          />
        </Right>
      </Header>

      <View style={{ marginBottom: 100, paddingBottom: 80 }}>
        <FlatList
          numColumns={2}
          data={data}
          renderItem={renderItem}
          renderItem={({ item }) =>
            renderItem({ navigation, item, useCart, useSaved })
          }
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#eaeaea"
  },

  rest: {
    textAlign: "center",
    marginTop: 100
  },

  best: {
    justifyContent: "flex-start",
    marginTop: 20
  },

  titch: {
    alignSelf: "flex-end",
    paddingRight: 9,
    paddingTop: 1
  }
});
