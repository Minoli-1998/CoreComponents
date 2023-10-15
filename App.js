import { View, Text, Image, ScrollView } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          officia et animi ullam possimus alias voluptates velit dolorem modi.
          Id sunt illo itaque unde ex explicabo ipsam eum modi dolorum? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Molestias, delectus
          enim at, voluptatum saepe suscipit mollitia reprehenderit culpa
          ratione, obcaecati ea libero hic modi perferendis laboriosam rerum qui
          corrupti. Inventore. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Itaque labore dolores placeat, minima eligendi
          molestias porro odio ad? Voluptatum facilis praesentium optio tempora
          maxime voluptate amet dolore in, inventore minus!
        </Text>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </ScrollView>
    </View>
  );
}
