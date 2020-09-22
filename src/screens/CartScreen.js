import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  ScrollView
} from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Title, Left } from "native-base";
import data from "./data";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FAB } from "react-native-paper";

const Form = ({ name, quantity, price, updateQuantity }) => (
  <View
    style={{
      flex: 1,
      justifyContent: "space-between",
      padding: 3,
      flexDirection: "row",
      alignItems: "center"
    }}
  >
    <ImageBackground
      source={require("../img/sig.png")}
      imageStyle={{ borderRadius: 12 }}
      style={{
        height: 140,
        width: 150,
        position: "relative", // because it's parent
        marginBottom: 15,
        marginTop: 19,
        marginRight: 7,
        marginLeft: 4,
        top: 2,
        left: 2
      }}
    >
      <Button
        type="clear"
        style={{
          top: 0,
          paddingLeft: 1,
          left: 0,
          marginTop: 2,
          marginRight: 118
        }}
        icon={<FontAwesome name="remove" size={17} color="white" />}
      />
    </ImageBackground>

    <View style={{ flexDirection: "column" }}>
      <Title
        style={{
          marginBottom: 3,
          marginRight: 105,
          fontSize: 20,
          color: "white"
        }}
      >
        {name}
      </Title>

      <Title
        style={{
          marginRight: 127,
          marginBottom: 3,
          fontSize: 17,
          color: "white"
        }}
      >
        ${price}
      </Title>

      <Title
        style={{
          marginRight: 100,
          marginBottom: 10,
          fontSize: 13,
          color: "white"
        }}
      >
        Quantity: {quantity}
      </Title>

      <View style={{ flexDirection: "row", paddingLeft: 12, marginBottom: 40 }}>
        <FAB
          style={{ paddingLeft: 1, marginRight: 10, position: "absolute" }}
          small
          animated
          icon="plus"
          color="white"
          onPress={() => updateQuantity(name)}
        />

        <FAB
          style={{
            marginRight: 20,
            paddingRight: 1,
            position: "absolute",
            marginLeft: 65
          }}
          small
          animated
          icon="minus"
          color="white"
          onPress={() => console.log("Pressed")}
        />
      </View>
    </View>
  </View>
);

const renderItem = ({ updateQuantity, item }) => (
  <Form
    name={item.name}
    quantity={item.quantity}
    image={item.image}
    price={item.price}
    updateQuantity={updateQuantity}
  />
);

export default function CartScreen({ navigation }) {
  // importing static data about cart
  // update the quantity of each time (store that info somewhere)

  // storing the data imported in state cart = data
  // reason is so we can modify the cart
  // update any item in the cart (+/- of a single item)
  const [cart, updateCart] = useState(data);

  // updateCart(updatedCart)

  console.log(cart[0]);
  const updateQuantity = name => {
    console.log(144);
    // find the item in the cart
    // update the item
    const index = cart.findIndex(cartItem => cartItem.name === name);
    // console.log(index);
    // cart[index].quantity++;
    // error was using the state variable, needed to create a new variable
    const updatedCart = [...cart];
    updatedCart[index].quantity++;
    // console.log(cart[index]);
    updateCart(updatedCart);
    // console.log("updateCart", name)
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img/jie.jpg")}
        imageStyle={{ borderRadius: 0 }}
        style={{
          height: 621,
          width: 375,
          position: "relative", // because it's parent

          top: 0
        }}
      >
        <Button
          style={styles.sitch}
          type="clear"
          icon={<Icon name="bars" size={20} color="black" />}
          onPress={() => navigation.openDrawer()}
        />

        <Title
          style={{
            fontSize: 35,
            color: "white",
            paddingLeft: 32,
            textAlign: "left"
          }}
        >
          Cart
        </Title>

        <Title
          style={{
            fontSize: 13,
            color: "white",
            paddingLeft: 32,
            textAlign: "left",
            paddingTop: 12,
            paddingBottom: 10
          }}
        >
          Deliver to: 92 lanre awolokun Gbagada{" "}
        </Title>

        <ScrollView style={{ marginBottom: 2 }}>
          <View
            style={{ marginBottom: 10, paddingBottom: 18, paddingLeft: 21 }}
          >
            <FlatList
              data={cart}
              renderItem={({ item }) =>
                renderItem({ cart, updateQuantity, item })
              }
              keyExtractor={item => item.id}
            />
          </View>

          <Title
            style={{
              fontSize: 20,
              color: "white",
              paddingLeft: 32,
              textAlign: "left",
              paddingTop: 1,
              paddingBottom: 10
            }}
          >
            Delivery Fee: $32{" "}
          </Title>

          <Title
            style={{
              fontSize: 20,
              color: "white",
              paddingLeft: 32,
              textAlign: "left",
              paddingTop: 1,
              paddingBottom: 10
            }}
          >
            Total: $600{" "}
          </Title>

          <Button
            title="Proceed to Checkout"
            style={{
              marginBottom: 20,
              width: 300,
              marginTop: 9,
              alignSelf: "center",
              paddingRight: 20,
              height: 100,
              position: "relative",
              paddingLeft: 13
            }}
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
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

  sitch: {
    alignItems: "flex-end",
    paddingTop: 25,
    paddingRight: 12
  }
});
