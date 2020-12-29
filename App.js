import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from './Navigation'

export default function App() {
  return (
    <>
    <StatusBar hidden={true}/>
    <Navigation/>
    </>
  );
}

