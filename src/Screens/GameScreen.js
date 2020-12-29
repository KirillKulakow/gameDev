import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
import GamePlayComponent from '../components/GamePlayComponent'

const BGImage = require('../../assets/bsck.png')
const ButtonImage = require('../../assets/button.png')
const Cloud = require('../../assets/cloud.png')
const Score = require('../../assets/score.png')

const DATA = [...Array(30)].map((el, index) => ({
  id: index + 1,
  value: randomInteger(1, 6)
}));

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const GameScreen = () => {
  const [dataImg, setDataImg] = useState(DATA);
  const [score, setScore] = useState(0);
  const reloadApp = () => {
    let newArray = dataImg.map(el => {
        return {id: el.id, value: randomInteger(1, 6)}
    })
    setDataImg(newArray)
    setScore(0)
  }
    return (
        <View style={styles.container}>
          <ImageBackground source={BGImage} style={styles.image}/>
          <Image source={Cloud} style={styles.imageFirstCloud}/>
          <Image source={Cloud} style={styles.imageSecondCloud}/>
          <Image source={Cloud} style={styles.imageThirstCloud}/>
          <ImageBackground source={Score} style={styles.imageScore}>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
              <Text style={styles.textScore}>YOUR SCORE</Text>
              <Text style={styles.textScoreMain}>{score}</Text>
            </View>
          </ImageBackground>
          <View style={styles.gameplay}>
            <GamePlayComponent data={dataImg}/>
          </View>
          <View style={styles.buttonContainer}>
            <ImageBackground source={ButtonImage} style={styles.buttonImage}>
              <TouchableOpacity onPress={reloadApp}
              style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text style={{fontSize: 25, color: "#fff", fontWeight: "bold"}}>RESTART</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
    position: 'relative',
  },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    resizeMode: "cover",
    justifyContent: "center",
    opacity: 0.7,
  },
  imageFirstCloud: {
    position: 'absolute',
    top: '10%',
    right: '-10%',
    height: 130,
    width: 225,
    resizeMode: "cover",
  },
  imageSecondCloud: {
    position: 'absolute',
    top: '70%',
    right: '-15%',
    height: 130,
    width: 225,
    resizeMode: "cover",
  },
  imageThirstCloud: {
    position: 'absolute',
    top: '40%',
    left: '-15%',
    height: 130,
    width: 225,
    resizeMode: "cover",
  },
  imageScore: {
    position: 'absolute',
    top: '2%',
    left: Dimensions.get('window').width * 0.5,
    transform: [
      {translateX: - 115}
    ],
    height: 130,
    width: 230,
    resizeMode: "cover",
  },
  textScore: {
    color: '#fff',
    fontSize: 20,
    justifyContent: "center",
  },
  textScoreMain: {
    color: '#fff',
    fontSize: 28,
    fontWeight: "bold",
    justifyContent: "center",
  },
  gameplay: {
    position: 'absolute',
    top: "24%"
  },
  buttonImage: {
    height: 83,
    width: 230,
    resizeMode: "cover",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "3%"
  },
})