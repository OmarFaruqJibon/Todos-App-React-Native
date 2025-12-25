import useTheme from '@/hooks/useTheme';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const settings = () => {
  const {toggleDarkMode} = useTheme();
  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={toggleDarkMode}>
        
      <Text>Change Theme</Text>
      </TouchableOpacity>
    </View>
  )
}

export default settings;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})