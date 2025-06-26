import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

interface Props {
  onSubmit: (data: { email: string; password: string }) => void;
  buttonTitle: string;
}

export default function AuthForm({ onSubmit, buttonTitle }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button
        title={buttonTitle}
        onPress={() => onSubmit({ email, password })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 6
  }
});
