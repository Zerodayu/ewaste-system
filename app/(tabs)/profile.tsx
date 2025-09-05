import { COLORS } from '@/themes'
import { Bell, ChevronRight, CircleUser, Eclipse } from 'lucide-react-native'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileCard}>
          <Image 
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPIDVRt_Urc9z-y4fGrOmRV7DZQTztfc95Qw&s' }}
            style={styles.avatar}
          />
        <View style={styles.userInfoBox}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>johndoe@example.com</Text>
        </View>
      </View>

      <View style={styles.userSettingsBox}>
        <Text style={styles.title}>Profile</Text>
        
        <View style={styles.userSettingsItem}>
            <View style={styles.userTitleBox}>
                <View style={styles.iconBox1}>
                    <CircleUser size={25} color={COLORS.text} />
                </View>
                <Text style={styles.userSettingsTitle}>Manage user</Text>
            </View>
            <ChevronRight size={25} color={COLORS.text} />
        </View>
      </View>

      <View style={styles.userSettingsBox}>
        <Text style={styles.title}>Settings</Text>
        
        <View style={styles.userSettingsItem}>
            <View style={styles.userTitleBox}>
                <View style={styles.iconBox2}>
                    <Bell size={25} color={COLORS.text} />
                </View>
                <Text style={styles.userSettingsTitle}>Notifications</Text>
            </View>
            <ChevronRight size={25} color={COLORS.text} />
        </View>

        <View style={styles.userSettingsItem}>
            <View style={styles.userTitleBox}>
                <View style={styles.iconBox3}>
                    <Eclipse size={25} color={COLORS.text} />
                </View>
                <Text style={styles.userSettingsTitle}>Theme</Text>
            </View>
            <ChevronRight size={25} color={COLORS.text} />
        </View>
      </View>

      <View style={styles.signOutBox}>
        <Pressable style={styles.signOut} onPress={null}>
            <Text style={styles.title}>Sign out</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderWidth: 1.5,
    borderColor: COLORS.accent,
    borderRadius: 100,
  },
  name: {
    fontSize: 24,
    color: COLORS.text,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    fontFamily: "monospace",
    fontWeight: 'bold',
    color: COLORS.text,
  },
  email: {
    fontSize: 16,
    color: COLORS.text + '80',
  },
  userInfoBox: {
    justifyContent: 'center',
  },
  userSettingsBox: {
    padding: 20,
    gap: 10,
  },
  userSettingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userTitleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconBox1: {
    backgroundColor: COLORS.accent,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    padding: 6,
  },
  iconBox2: {
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    padding: 6,
  },
  iconBox3: {
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    padding: 6,
  },
  userSettingsTitle: {
    fontFamily: "monospace",
    fontWeight: 'bold',
    color: COLORS.text,
  },
  signOutBox: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 50,
  },
  signOut: {
    borderWidth: 1,
    borderColor: COLORS.destructive,
    backgroundColor: COLORS.destructive + '20',
    width: '50%',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  }
})