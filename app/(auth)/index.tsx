import { COLORS } from "@/styles/themes";
import { Link } from "expo-router";
import { CircleUserRound, LockKeyhole, LogIn, Mail } from "lucide-react-native";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Index() {

  return (
    <View style={style.container}>
      <CircleUserRound size={120} strokeWidth={1.5} color={COLORS.primary} />
          <Text style={style.title}>Login Screen</Text>
      <View style={style.form}>
        <View style={style.inputContainer}>
          <Mail size={24} color={COLORS.primary} />
          <TextInput
            placeholder="Email"
            placeholderTextColor={COLORS.muted}
            style={style.input}
          />
        </View>
        <View style={style.inputContainer}>
          <LockKeyhole size={24} color={COLORS.primary} />
          <TextInput
            placeholder="Password"
            placeholderTextColor={COLORS.muted}
            style={style.input}
            secureTextEntry={true}
          />
        </View>

      </View>
        <Link href="/(root)" asChild>
          <TouchableOpacity style={style.button}>
            <Text style={style.buttonText}>Login</Text>
            <LogIn size={24} color={COLORS.background} />
          </TouchableOpacity>
        </Link>

    </View>
  );
}

const style = StyleSheet.create({
  input: {
    color: COLORS.primary,
    flex: 1,
    padding: 12,
    borderBottomColor: COLORS.primary,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 12,
    gap: 4,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    gap: 4,
  },
  form: {
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.foreground,
  },
  buttonText: {
    color: COLORS.background,
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    padding: 12,
    gap: 8,
    paddingHorizontal: 24,
    alignItems: "center",
  },
});