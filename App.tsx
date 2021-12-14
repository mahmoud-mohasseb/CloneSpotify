import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './Hooks/useCachedResources';
import useColorScheme from './Hooks/useColorScheme';
import Navigation from './navigation/Navigation';
import PlayerWidgets from './components/PlayerWidget/PlayerWidget';
import { Provider } from 'react-redux';
import { store } from './reducer/store';

import { AppContext } from './AppContext';

function App() {
  const [songId, setSongId] = useState<number | null>(null);
  const [imageId, setImageId] = useState<string | null>(null);
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppContext.Provider
          value={{
            songId,
            imageId,
            setSongId: (id: number) => setSongId(id),
            setImageId: (image: string) => setImageId(image),
          }}>
          <Provider store={store}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
            <PlayerWidgets />
          </Provider>
        </AppContext.Provider>
      </SafeAreaProvider>
    );
  }
}
export default App;
