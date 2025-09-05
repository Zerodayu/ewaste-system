import { COLORS } from "@/themes";
import { IconBrandAppleFilled, IconBrandGithubFilled, IconBrandGoogleFilled } from '@tabler/icons-react-native';
import { router } from 'expo-router';
import { Lock, Mail, SquareUser, UserPlus } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Signup() {
  const goToSignin = () => {
    router.push('/');
  }
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.header}>Sign-up</Text>
        <SquareUser size={40} color={COLORS.text} />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Mail size={20} color={COLORS.text} />
          <TextInput placeholder="uremail@example.com" placeholderTextColor={COLORS.secondary} style={styles.input} />
        </View>
        <View style={styles.inputWrapper}>
          <Lock size={20} color={COLORS.text} />
          <TextInput placeholder="Password" placeholderTextColor={COLORS.secondary} style={styles.input} secureTextEntry />
        </View>

        <Pressable style={styles.button} onPress={null}>
          <Text style={styles.text}>Signup</Text>
          <UserPlus size={18} color={COLORS.text} />
        </Pressable>
        <Text style={styles.text}>--- or ---</Text>

        <View style={styles.socialButtonsContainer}>
          <Pressable style={styles.SecondaryButton} onPress={null}>
            <IconBrandGoogleFilled size={18} color={COLORS.text} />
          </Pressable>
          <Pressable style={styles.SecondaryButton} onPress={null}>
            <IconBrandGithubFilled size={18} color={COLORS.text} />
          </Pressable>
          <Pressable style={styles.SecondaryButton} onPress={null}>
            <IconBrandAppleFilled size={18} color={COLORS.text} />
          </Pressable>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable onPress={null}>
          <Text style={styles.text}>Forgot your password?</Text>
        </Pressable>
        <Pressable onPress={goToSignin}>
          <Text style={styles.secondaryText}>Already have an account? Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  text: {
    color: COLORS.text,
    textAlign: 'center',
    fontFamily: "monospace",
    fontWeight: 'bold',
  },
  secondaryText: {
    color: COLORS.secondary,
    textAlign: 'center',
    fontFamily: "monospace",
    fontWeight: 'bold',
  },
  header: {
    color: COLORS.text,
    fontFamily: "monospace",
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 30,
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  buttonContainer: {
    flex: 0.2,
    justifyContent: 'center',
    marginBottom: 40,
    paddingHorizontal: 28,
    gap: 14,
  },
  button: {
    flexDirection: 'row',
    gap: 4,
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SecondaryButton: {
    flexDirection: 'row',
    gap: 4,
    borderRadius: 14,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: COLORS.secondary,
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: "monospace",
    fontWeight: 'bold',
  },
  iconTitleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  titleContainer: {
    marginVertical: 20,
  },
  inputContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    gap: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.text + '30',
    width: '90%',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: COLORS.primary + '50',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    color: COLORS.text,
    fontFamily: "monospace",
    fontSize: 16,
    paddingLeft: 10,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    width: '80%',
  },
})


