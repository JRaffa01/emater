import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert, } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default function ForgotPassword({ navigation }) {

    const Stack = createStackNavigator();
    const [CPF, setCPFForgotPassword] = useState ('')

    function handlerRecuperar(){
        if(CPF === ''){
            Alert.alert('Oh não','Você esqueceu de preecher')
        }
        else{
            Alert.alert('Sucesso','Recuperado com sucesso verifique seu email')
        }
    }

    return (
    

        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 34,
        }}>

            <Image source={require('../../assets/LogoSigaEmater.png')}
                style={styles.ForgotPassword}>


            </Image>
            <TextInput style={styles.CPFForgotPassword}
                placeholder={'Digite seu CPF'}
                placeholderTextColor='#87DA5F'
                onChangeText={setCPFForgotPassword}>

            </TextInput>

            <TouchableOpacity style={styles.ForgotPasswordButton} 
                onPress={handlerRecuperar}
                >
                <Text style={styles.TextForgotPasswordButton}>
                    Recuperar
                </Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.ReturnLogin} 
                 onPress={() => navigation.navigate('Login')}>
                <Text style={styles.TextReturnLogin}>
                    Retornar ao inicio
                </Text>

            
            </TouchableOpacity>



        </View>
    )
}
const styles = StyleSheet.create({
    ForgotPassword: {
        marginTop: 132,

    },
    CPFForgotPassword: {
        backgroundColor: '#D8F1CC',
        fontSize: 18,
        marginTop: 56,
        borderRadius: 10,
        width: '100%',
        paddingHorizontal: 24,
        padding: 14,
    },
    ForgotPasswordButton:{
        backgroundColor:'#5F9747',
        padding:20,
        width:'100%',
        marginTop:37,
        borderRadius:20,
        alignItems:'center',
    },
    TextForgotPasswordButton:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',


    },
    ReturnLogin:{
        backgroundColor:'#5F9747',
        padding:20,
        width:'100%',
        marginTop:18,
        borderRadius:20,
        alignItems:'center',

    },
    TextReturnLogin:{
        color:'white',
        fontSize:16,
        fontWeight:'bold',

    }

})
