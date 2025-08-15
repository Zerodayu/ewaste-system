import { styles } from "@/styles/landing-styles";
import { sText } from "@/styles/texts-styles";
import { Link } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";


export default function Index() {

  return (
    <View style={styles.container}>
      <View style={styles.skeleton} />
      <Text style={styles.title}>First Screen on Startup</Text>
      <Text style={sText.primary}> primary First Screen on Startup</Text>
      <Text style={sText.mono}>Mono First Screen on Startup</Text>
      <Text style={sText.link}>link First Screen on Startup</Text>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonOutline}>
          <Text style={styles.textSecondary}>Skip</Text>
        </TouchableOpacity>
        <Link href="/secondPage" asChild>
          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.textPrimary}>Next</Text>
            <ChevronRight size={20}/>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
