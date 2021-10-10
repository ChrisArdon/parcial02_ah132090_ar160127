import React, {useState} from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Sumatoria(){
    const [Num1, guardarNum1] = useState('');




    const factorial = () => {
        var N1 = parseInt(Num1);
        var respuesta = 1;        
        if(N1 < 0){
            alert('Ingresar numeros positivos!')
        }
        else if(N1 <= 1){
            alert(respuesta);
        }
        else{
            for(var i = 1; i<=N1; i++){
                respuesta = respuesta * i;
            }
            alert(respuesta);
        }       
    }
    return(
        <View>
            <TextInput style={styles.input} placeholder='Numero 1' onChangeText={texto => guardarNum1(texto)}></TextInput>            
            <Button title='Factorizar' onPress={factorial}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        borderWidth:2,
        margin:10,
    },
});