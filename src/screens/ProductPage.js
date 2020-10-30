import React, { useContext } from "react";
import { View, ImageBackground, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Tile } from "react-native-elements";
import { Title, Subtitle, Text, Icon } from "native-base";
import { Button } from "react-native-elements";
import {
  AddCartContext,
  AddPagedContext,
  AddSavedContext
} from "../screens/CartContext";

//

export default function ProductPage({ route, navigation }) {
  {
    /*} const {updateCart} = useContext(AddCartContext)
const {updateSaved} = useContext(AddSavedContext)
const {updatePaged} = useContext(AddPagedContext)

const { paged } = useContext(AddPagedContext)

const useCart = updateCart
const useSaved = updateSaved
const usePaged = updatePaged*/
  }

  console.log(29, route.params);

  return (
    <View>
      {/*} {paged.map(({ name, count, image, price})=> ( */}

      <ScrollView scrollEventThrottle={200} style={{ paddingBottom: 300 }}>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            decelerationRate="fast"
            pagingEnabled
          >
            <ImageBackground
              source={require("../img/rie.jpg")}
              style={{
                height: 400,
                width: 395,
                position: "relative", // because it's parent

                marginTop: 0,
                marginRight: 0,
                marginLeft: 0
              }}
            >
              <Button
                type="clear"
                style={{
                  paddingLeft: 9,
                  position: "relative",
                  paddingRight: 329,
                  paddingTop: 30
                }}
                icon={
                  <Ionicons
                    name="ios-arrow-round-back"
                    size={30}
                    color="black"
                  />
                }
                onPress={() => navigation.goBack()}
              />
            </ImageBackground>
          </ScrollView>
        </View>

        <ImageBackground
          source={require("../rmg/tyr.jpg")}
          imageStyle={{ borderRadius: 21 }} //For reshaping the image.
          style={{
            height: 450,
            width: 377,
            position: "absolute", // because it's parent
            marginBottom: 300,

            marginRight: 0,
            marginLeft: 0,
            top: 380,
            left: 0
          }}
        >
          <Button
            type="clear"
            style={{
              //right:0,
              top: 0,
              marginTop: 7,
              paddingLeft: 275
            }}
            icon={<Feather name="heart" size={23} color="black" />}
            onPress={() => updateSaved({ name, price, description, image })}
          />

          <Title style={{ fontSize: 25, textAlign: "left", top: 1, left: 18 }}>
            {route.params.name}
          </Title>
          <Title style={{ fontSize: 20, textAlign: "left", top: 5, left: 18 }}>
            $300
          </Title>
          <Subtitle
            style={{ fontSize: 12, textAlign: "left", top: 13, left: 18 }}
          >
            Product Information
          </Subtitle>
          <Text
            style={{
              fontSize: 12,
              textAlign: "left",
              top: 21,
              left: 20,
              marginRight: 30
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </Text>

          <Subtitle
            style={{
              fontSize: 12,
              textAlign: "left",
              top: 39,
              left: 15,
              marginRight: 30
            }}
          >
            Vendor Name
          </Subtitle>
          <Text
            style={{
              fontSize: 15,
              textAlign: "left",
              top: 43,
              left: 19,
              marginRight: 30
            }}
          >
            Mr Jon Snow
          </Text>

          <Button //Checkout Button
            title="Add to Cart"
            style={{
              marginBottom: 20,
              width: 300,
              marginTop: 65,
              marginBottom: 50,
              alignSelf: "center",
              paddingRight: 20,
              height: 100,
              position: "relative",
              paddingLeft: 13
            }}
            onPress={() => updateCart({ name, price, image })}
          />
        </ImageBackground>
      </ScrollView>

      {/*}))} */}
    </View>
  );
}
