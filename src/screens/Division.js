import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Division() {
    const [Num1, guardarNum1] = useState('');
    const [Num2, guardarNum2] = useState('');

    const Dividir = () => {
        var N1 = parseInt(Num1);
        var N2 = parseInt(Num2);
        if (N2==0) {
            alert('Division entre cero invalida.')
        } else {
            var R = N1 / N2;
            alert(R);
        }
        
    }
    return (
        <View>
            <TextInput style={styles.input} placeholder='Numero 1' onChangeText={texto => guardarNum1(texto)}></TextInput>
            <TextInput style={styles.input} placeholder='Numero 2' onChangeText={texto => guardarNum2(texto)}></TextInput>
            <Button title='Dividir' onPress={Dividir}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        margin: 10,
    },
});