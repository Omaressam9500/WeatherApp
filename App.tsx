/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  LogBox,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { SeacrhCountries } from './src/screens/SearchCountries';
import { QueryClient, QueryClientProvider } from "react-query";
import FlashMessage from 'react-native-flash-message';
import { Pixel } from './src/constants/styleConstatnts';

LogBox.ignoreAllLogs();


function App(): JSX.Element {
  const queryClient = new QueryClient();



  return (
    <QueryClientProvider client={queryClient}>

      <SafeAreaView>

        <SeacrhCountries />

      </SafeAreaView>
      <FlashMessage
        position="bottom"
        hideOnPress={true}
        style={{
          paddingTop: 5,
        }}
        titleStyle={styles.flashMsgTitle}

        floating
      />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

  flashMsgTitle: {
    paddingTop: Pixel(14),
    alignSelf: "flex-start",
  },
});

export default App;
