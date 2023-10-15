import { useState } from "react";
import { View, StatusBar, Button } from "react-native";

export default function App() {
  const [isStatusBarVisible, setIsStatusBarVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar
        backgroundColor="lightgreen"
        barStyle="dark-content"
        hidden={isStatusBarVisible}
      />
      <Button
        title="Show/Hide"
        onPress={() => setIsStatusBarVisible(!isStatusBarVisible)}
      />
    </View>
  );
}
