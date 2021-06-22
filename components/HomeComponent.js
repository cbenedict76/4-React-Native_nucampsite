import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { CAMPSITES } from "../shared/campsites";
import { PROMOTIONS } from "../shared/promotions";
import { PARTNERS } from "../shared/partners";

function RenderItem({ item }) {
  if (item) {
    return (
      <Card
        featuredTitle={item.name}
        image={require("./images/react-lake.jpg")}
      >
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
}
class Home extends Component {
  static navigationOptions = {
    title: "Home",
  };

  render() {
    return (
      <View>
        <Text>Home Component</Text>
      </View>
    );
  }
}

export default Home;
