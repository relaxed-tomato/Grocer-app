import hus from "../img/hus.png";
import Image from "react-native";

//Was formerly const but constant cant be changed, so used let.
let data = [
  {
    id: "344455dg",
    name: "Orange",
    price: 250,
    description: "fresh from the farms",
    quantity: 3,
    vendor: "pa salieu",
    image: require("../img/veg.png")
  },

  {
    id: "293384dj",
    image: { hus },
    name: "banana",
    price: 500,
    quantity: 2,
    description: "fresh from the oguns",
    image: require("../img/pat.png"),
    vendor: "pa salieu"
  },

  {
    id: "292933xc",
    image: { hus },
    name: "Pineapple",
    price: 300,
    quantity: 7,
    description: "fresh from the seas",
    image: require("../img/spi.png"),
    vendor: "pa salieu"
  },

  {
    id: "233446yu",
    image: { hus },
    name: "Guava",
    price: 450,
    quantity: 4,
    description: "fresh from the seas",

    vendor: "pa salieu"
  },

  {
    id: "531159bu",
    image: { hus },
    name: "Mango",
    price: 190,
    quantity: 6,
    description: "fresh from the seas",

    vendor: "pa salieu"
  },

  {
    id: "531159hy",
    image: { hus },
    name: "Paw-Paw",
    price: 250,
    quantity: 3,
    description: "fresh from the seas",

    vendor: "pa salieu"
  },

  {
    id: "12222449000000",
    name: "Grape",
    price: 300,
    quantity: 5,
    description: "blacker the berry"
  }
];
export default data;
