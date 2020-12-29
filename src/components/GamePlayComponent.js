import React from 'react';
import { ImageBackground, Image, Dimensions, FlatList } from 'react-native';

const Field = require('../../assets/field.png')
const f1 = require('../../assets/icon1.png');
const f2 = require('../../assets/icon2.png');
const f3 = require('../../assets/icon3.png');
const f4 = require('../../assets/icon4.png');
const f5 = require('../../assets/icon5.png');
const f6 = require('../../assets/icon6.png');
const getIcon = (num) => {
    switch (num) {
        case 1: return f1
        case 2: return f2
        case 3: return f3
        case 4: return f4
        case 5: return f5
        case 6: return f6
    }
}

const GamePlayComponent = ({data}) => {  
    const renderGameField = ({item}) => {
        const Icon = getIcon(item.value);
        return <ImageBackground source={Field} style={{height: (Dimensions.get('window').width - 50) / 5, width: (Dimensions.get('window').width - 50) / 5}}>
            <Image source={Icon} style={{height: (Dimensions.get('window').width - 50) / 5, width: (Dimensions.get('window').width - 50) / 5}}/>
        </ImageBackground>
    }
    return (
        <FlatList
        data={data}
        numColumns={5}
        keyExtractor={item => item.id}
        renderItem={renderGameField}
        scrollEnabled={false}
        />
    )
}

export default GamePlayComponent
