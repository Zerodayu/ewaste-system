import { sBtn } from "@/styles/buttons-styles";
import { styles } from "@/styles/landing-styles";
import { sText } from "@/styles/texts-styles";
import { Link } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export default function SecondPage() {

  return (
    <View style={styles.container}>
      <View style={styles.skeleton} />
      <Text style={sText.mono}>Second Screen on Startup</Text>
      <Text style={sText.link}>Second Screen on Startup</Text>

      <TouchableOpacity style={sBtn.ghost}>
        <Text style={sText.link}>Skip</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Link href={"/"} asChild>
        <TouchableOpacity style={styles.buttonOutline}>
          <Text style={styles.textSecondary}>Skip</Text>
        </TouchableOpacity>
        </Link>

        <Link href={"/(auth)"} asChild>
          <TouchableOpacity style={sBtn.primary}>
            <Text style={sText.black}>
              Login
            </Text>
              <ChevronRight size={20} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
