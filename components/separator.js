import React from "react";
import { View } from "react-native";

const Separator = (props) => {
  return <View style={{ height: props.height, backgroundColor: props.backgroundColor }}></View>;
};

export default Separator;
