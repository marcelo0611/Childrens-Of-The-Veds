import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import InfanciaScreen from './InfanciaScreen';

export type RootStackParamList = {
  Home: undefined;
  Infancia: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Infancia"
          component={InfanciaScreen}
          options={{ title: 'Infância' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
