import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const TareaScreen = () => {

    return (
        <View style={ styles.container }>
            <View style={ styles.cajaMorada } />
            <View style={ styles.cajaNaranja } />
            <View style={ styles.cajaAzul } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'center', // ejemplo 2, 3, 7, 8, 9, 10
        //justifyContent: 'space-between', // ejemplo 4, 5
        flexDirection: 'row', // ejemplo 5, 10
        alignItems: 'center' // ejemplo 7, 8, 9, 10
    },
    cajaMorada: {
        width: 100,
        //width: '100%', // ejemplo 6
        height: 100,
        //height: '100%', // ejemplo 5
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        //alignSelf: 'flex-end', // ejemplo 3, 4
        //flex: 2, // ejemplo 6
        //top: 100, // ejemplo 9
    },
    cajaNaranja: {
        // flex: 1, // ejemplo 1
        width: 100,
        //width: '100%', // ejemplo 6
        height: 100,
        //height: '100%', // ejemplo 5
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        //alignSelf: 'center', // ejemplo 4
        //flex: 2, // ejemplo 6
        //left: 100, // ejemplo 8, 9
        top: 50, // ejemplo 10
    },
    cajaAzul: {
        //width: '100%', // ejemplo 2, 6
        width: 100,
        height: 100,
        //height: '100%', // ejemplo 5
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        //alignSelf: 'center' // ejemplo 3
        //flex: 4, // ejemplo 6
    }
})