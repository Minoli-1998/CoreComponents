import { View, Button, Image, Text, Pressable } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Press"
        onPress={() => console.log("Button pressed")}
        color="midnightblue"
      />
      <Pressable onPress={() => console.log("Image pressed")}>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </Pressable>
      <Pressable onPress={() => console.log("Text pressed")}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          recusandae officiis minus consequatur accusantium molestiae neque
          quidem cum deserunt, earum assumenda perspiciatis omnis natus culpa
          voluptas atque voluptate quam debitis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Minima, harum assumenda. Cum fugit
          aliquid, doloribus quam atque accusantium! A ipsa magni et sequi
          laudantium culpa atque ut consectetur dolorem ea. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Distinctio delectus suscipit
          itaque? Veniam beatae eligendi quod dignissimos quo maiores
          voluptatibus atque quidem, consequuntur at perspiciatis tempore,
          officiis, expedita voluptatum natus!
        </Text>
      </Pressable>
    </View>
  );
}
