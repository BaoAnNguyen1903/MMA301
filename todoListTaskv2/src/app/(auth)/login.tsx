import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Switch,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type User = {
  email: string;
  password: string;
};

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Lỗi", "Email và mật khẩu không được để trống");
      return;
    }

    const loggedInUser = { email, password };

    if (rememberMe) {
      await AsyncStorage.setItem("savedUser", JSON.stringify(loggedInUser));
    } else {
      await AsyncStorage.removeItem("savedUser");
    }

    setUser(loggedInUser);
    router.replace("/(tabs)");
  };

  const checkSavedLogin = async () => {
    try {
      const saved = await AsyncStorage.getItem("savedUser");
      if (saved) {
        const parsed = JSON.parse(saved) as User;
        setUser(parsed);
        router.replace("/(tabs)");
      }
    } catch (err) {
      console.log("Lỗi auto login:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkSavedLogin();
  }, []);

  if (loading) return null;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <Text style={styles.title}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Login to your account</Text>

      {/* Email */}
      <View style={styles.inputContainer}>
        <Ionicons
          name="mail-outline"
          size={20}
          color="#999"
          style={styles.icon}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.input}
        />
      </View>

      {/* Password */}
      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="#999"
          style={styles.icon}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>

      {/* Remember */}
      <View style={styles.rememberRow}>
        <Text style={{ fontSize: 14 }}>Remember Me</Text>
        <Switch value={rememberMe} onValueChange={setRememberMe} />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
    justifyContent: "center",
    backgroundColor: "#f9f9f9"
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 4,
    textAlign: "center"
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
    textAlign: "center"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  icon: {
    marginRight: 8
  },
  input: {
    flex: 1,
    fontSize: 16
  },
  rememberRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12
  },
  button: {
    backgroundColor: "#8685E7",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    elevation: 2
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600"
  }
});
