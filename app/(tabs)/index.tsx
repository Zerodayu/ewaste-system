import { COLORS } from "@/themes";
import { router } from "expo-router";
import { Ellipsis, History, MapPinned, ScanSearch, Sparkle, Target } from 'lucide-react-native';
import { Image, Pressable, StyleSheet, Text, View } from "react-native";


export default function Index() {
  const goToProfile = () => {
    router.navigate('/profile');
  };

  return (
    <View style={styles.body}>

      {/* header */}
      <View style={styles.headerBox}> 
        <View style={styles.HeaderTitle}> 
          <Target size={25} color={COLORS.text} />
          <Text style={styles.header}>AppName</Text> 
        </View>
        <Pressable onPress={goToProfile}>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPIDVRt_Urc9z-y4fGrOmRV7DZQTztfc95Qw&s' }} style={styles.pfp} />
        </Pressable>
      </View>

      {/* content */}
      <View style={styles.contentBox}>
        <Text style={styles.helloTxt}>Hello User</Text>
        <Text style={styles.secondaryText}>Whats the plan for today?</Text>
      </View>

      {/* bento box */}
      <View style={styles.masonryBox}>
        <View style={styles.masonryRow}>

          <Pressable style={styles.masonryBtn1}>
            <View style={styles.iconContainer}>
              <Sparkle size={25} color={COLORS.text} />
            </View>
            <View>
              <Text style={styles.text}>Total Points:</Text>
              <Text style={styles.points}>100</Text>
            </View>
          </Pressable>

          <View style={styles.columnContainer}>
            <Pressable style={styles.masonryBtn2}>
              <View style={styles.iconContainer}>
                <MapPinned size={25} color={COLORS.text} />
              </View>
              <Text style={styles.text}>Scan nearest shop</Text>
            </Pressable>
            <Pressable style={styles.masonryBtn3}>
              <View style={styles.iconContainer}>
                <ScanSearch size={25} color={COLORS.text} />
              </View>
              <Text style={styles.text}>Search by image</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* footer */}
      <View style={styles.footerBox}>
        <View style={styles.footerHead}>
          <View style={styles.headBox}>
            <History size={25} color={COLORS.text} />
            <Text style={styles.footerTitle}>Recent Activity</Text>
          </View>
          <Text style={styles.footerText}>See All</Text>
        </View>

        <View style={styles.historyBox}>
          <View style={styles.historyItem}>
            <View style={styles.historyTitleBox}>
              <View style={styles.historyIconBox}>
                <ScanSearch size={25} color={COLORS.text} />
              </View>
              <Text style={styles.text}>Image Search</Text>
            </View>
            <Pressable>
              <Ellipsis size={25} color={COLORS.text} />
            </Pressable>
          </View>

          <View style={styles.historyItem}>
            <View style={styles.historyTitleBox}>
              <View style={styles.historyIconBox}>
                <ScanSearch size={25} color={COLORS.text} />
              </View>
              <Text style={styles.text}>Image Search</Text>
            </View>
            <Pressable>
              <Ellipsis size={25} color={COLORS.text} />
            </Pressable>
          </View>
        </View>
        
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.background,
    flex: 1,
    justifyContent: 'flex-start',
  },
  text: {
    color: COLORS.text,
    fontFamily: "monospace",
    fontWeight: 'bold',
  },
  secondaryText: {
    color: COLORS.accent,
    fontFamily: "monospace",
  },
  header: {
    color: COLORS.text,
    fontFamily: "monospace",
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1.5,
  },
  points: {
    color: COLORS.accent,
    fontWeight: 'bold',
    fontSize: 30,
    letterSpacing: 2,
  },
  helloTxt: {
    color: COLORS.text,
    fontFamily: "monospace",
    fontWeight: 'bold',
    fontSize: 30,
    letterSpacing: 1.5,
  },
  footerTitle: {
    color: COLORS.text,
    fontFamily: "monospace",
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerText: {
    color: COLORS.text + '80',
    fontFamily: "monospace",
  },
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flex: 0.3,
  },
  HeaderTitle: {
    flexDirection: 'row',
    gap: 10,
  },
  pfp: {
    borderWidth: 1.5,
    borderColor: COLORS.accent,
    borderRadius: 100,
    width: 45,
    height: 45 
  },
  contentBox: {
    flex: 0.2,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  masonryBox: {
    flex: 0.7,
    padding: 20,
  },
  masonryRow: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  columnContainer: {
    flex: 1,
    gap: 10,
  },
  masonryBtn1: {
    backgroundColor: COLORS.accent + '50',
    borderRadius: 14,
    padding: 20,
    justifyContent: "space-between",
  },
  masonryBtn2: {
    flex: 1,
    borderRadius: 14,
    backgroundColor: COLORS.secondary + '50',
    padding: 15,
    gap: 20,
    justifyContent: "space-between",
  },
  masonryBtn3: {
    flex: 1,
    borderRadius: 14,
    backgroundColor: COLORS.primary + '50',
    padding: 15,
    gap: 20,
    justifyContent: "space-between",
  },
  iconContainer: {
    padding: 15,
    borderRadius: 100,
    alignSelf: 'flex-start',
    backgroundColor: COLORS.text + '50',
  },
  footerBox: {
    flex: 0.5,
  },
  footerHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  historyBox: {
    paddingHorizontal: 20,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    justifyContent: 'space-between',
  },
  historyIconBox: {
    borderRadius: 100,
    padding: 8,
    alignSelf: 'flex-start',
    backgroundColor: COLORS.primary + '50',
  },
  historyTitleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  }
})


