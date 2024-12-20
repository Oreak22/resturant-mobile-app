import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfieBar from '../components/ProfieBar';
const { width, height } = Dimensions.get('window');
const intro = [
  {
    pic: require('../assets/img/intro discover.png'),
    title: 'Discover something new',
    subtitle: 'Special new arrivals just for you',
  },
  {
    pic: require('../assets/img/intro update.png'),
    title: 'Update trendy outfit',
    subtitle: 'Favorite brands and hottest trends',
  },
  {
    pic: require('../assets/img/intro explore.png'),
    title: 'Explore your true style',
    subtitle: 'Relax and let use bring the style to you',
  },
];

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    if (currentIndex < intro.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (currentIndex === intro.length - 1) {
      router.replace('/login/index');
    }
  };
  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <>
      <ProfieBar />
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#ffffff', '#464447']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0.5, 0.5]}
          style={styles.main}>
          <View style={styles.contentcontanier}>
            <Text
              style={[
                styles.textCenter,
                {
                  fontSize: 30,
                  fontWeight: 'bold',
                  fontFamily: 'Product Sans Bold',
                  marginBottom: 15,
                },
              ]}>
              {intro[currentIndex].title}
            </Text>
            <Text
              style={[
                styles.textCenter,
                { marginTop: 15, fontFamily: 'Product Sans Regular' },
              ]}>
              {intro[currentIndex].subtitle}
            </Text>
            {/*  */}
            <View
              style={[
                {
                  width: width * 0.7,
                  paddingTop: 50,
                  backgroundColor: '#E7E8E9',
                  borderRadius: 10,
                  marginVertical: 30,
                },
              ]}>
              <Image
                source={intro[currentIndex].pic}
                style={{
                  marginHorizontal: 'auto',
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '60%',
                marginVertical: 30,
              }}>
              <TouchableOpacity
                onPress={handleBack}
                style={styles.button}
                disabled={currentIndex === 0 ? true : false}>
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
            {/*  */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.replace('/login')}>
              <Text style={styles.buttonText}>Shop Now</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 'auto',
    width: '100%',
  },
  contentcontanier: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 20,
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
  textCenter: {
    textAlign: 'center',
    fontFamily: 'Product Sans Regular',
  },
  button: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    padding: 10,
    borderRadius: 40,
    width: '40%',
    paddingVertical: 20,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
