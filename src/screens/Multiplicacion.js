import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Multiplicacion() {
    const [Num1, guardarNum1] = useState('');
    const [Num2, guardarNum2] = useState('');
    const Multiplicar = () => {
        var N1 = parseInt(Num1);
        var N2 = parseInt(Num2);
        var R = N1 * N2;
        alert(R);
    }
    return (
        <View>
            <TextInput style={styles.input} placeholder='Numero 1' onChangeText={texto => guardarNum1(texto)}></TextInput>
            <TextInput style={styles.input} placeholder='Numero 2' onChangeText={texto => guardarNum2(texto)}></TextInput>
            <Button title='Multiplicar' onPress={Multiplicar}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        margin: 10,
    },
});