import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";

export function PasswordItem({ data, removePassword }) {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <Pressable onLongPress={removePassword}>
        <Text style={styles.text}>{visible ? data : "*******"}</Text>
      </Pressable>
      <Pressable onPress={toggleVisibility}>
        <FontAwesome5
          size={20}
          color="white"
          name={visible ? "eye" : "eye-slash"}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    padding: 14,
    width: "100%",
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#FFF",
  },
});
