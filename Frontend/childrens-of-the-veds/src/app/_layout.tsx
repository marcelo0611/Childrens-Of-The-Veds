import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="HomeScreen" options={{ headerShown: false }} />
      <Stack.Screen name="InfanciaScreen" options={{ title: 'Infância' }} />
      <Stack.Screen name="PreAdolescenciaScreen" options={{ title: 'Pré-Adolescência' }} />
    </Stack>
  );
}
