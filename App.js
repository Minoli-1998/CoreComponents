import { useState } from "react";
import { View, ActivityIndicator, Button } from "react-native";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="midnightblue" />
      <ActivityIndicator
        size="large"
        color="midnightblue"
        animating={isVisible}
      />
      <Button title="Show" onPress={() => setIsVisible(!isVisible)} />
    </View>
  );
}
