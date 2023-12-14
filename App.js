import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AllStore from './screens/AllStore';
import DetailStore from './screens/DetailStore';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf')
      });
      setIsFontLoaded(true);
    }
    loadFonts();
  }, []);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <DetailStore />
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
