import { COLORS } from "@/themes";
import { ArrowRight } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <View style={styles.image}/>
        <Text style={styles.header}>Title</Text>
        <Text style={styles.subTitle}>Subtitle</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Next</Text>
          <ArrowRight size={8} color={COLORS.white} />
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
    fontSize: 16,
  },
  header: {
    color: COLORS.text,
    fontFamily: "monospace",
    fontWeight: 'bold',
    fontSize: 20,
  },
  subTitle: {
    color: COLORS.accent,
    fontFamily: "monospace",
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    backgroundColor: COLORS.accent + '50',
    alignSelf: 'center',
    height: 200,
    width: 300,
    marginBottom: 20,
  },
  container: {
    borderWidth: 1,
    borderColor: COLORS.accent,
    paddingHorizontal: 38,
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: COLORS.accent,
    flex: 0.1,
    justifyContent: 'center',
    marginBottom: 40,
    paddingHorizontal: 28,
  },
  button: {
    backgroundColor: COLORS.primary + '50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: "monospace",
    fontWeight: 'bold',
  },
})


