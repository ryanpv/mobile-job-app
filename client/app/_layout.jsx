import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
  });
  
  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false}} />
    </Stack>
  )
};


export default RootLayout

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})