import React from 'react';
import { TouchableOpacity, Text, ImageBackground, View, Button, StyleSheet } from 'react-native';

const BGImage = require('../../assets/bsck.png')
const ButtonImage = require('../../assets/button.png')

const HomeScreen = ({navigation}) => {
    return (
        <View  style={styles.container}>
          <ImageBackground source={BGImage} style={styles.image}>
            <View style={styles.buttonContainer}>
              <ImageBackground source={ButtonImage} style={styles.buttonImage}>
                  <TouchableOpacity onPress={() =>
                    navigation.navigate('Game')
                  }
                  style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <Text style={{fontSize: 20, color: "#fff", fontWeight: "bold"}}>PLAY</Text>
                  </TouchableOpacity>
              </ImageBackground>
            </View>
          </ImageBackground>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: "cover",
    justifyContent: "center"
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonImage: {
    height: 50,
    width: 140,
    resizeMode: "cover",
  },
})