import React, { useEffect } from 'react';
import MainNavigation from './src/services/navigation';
import { SafeAreaView } from 'react-native';
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainNavigation />
    </SafeAreaView>
  );
};
export default App;
