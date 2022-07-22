import React from 'react'
import { Provider } from 'react-redux'
import store from './src/redux-stack/store'
import Navigation from './src/navigation'
import { Provider as PaperProvider } from 'react-native-paper'
import 'react-native-gesture-handler'

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </Provider>
  );
}
