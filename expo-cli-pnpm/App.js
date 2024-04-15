import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <Text
      style={{
        color: "red",
        fontSize: 20,
      }}
    >
      Open up App.js to start working on your app!
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
