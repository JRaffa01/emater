import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Alert  } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from "react-native-gesture-handler";


export default function SingNup({ navigation }) {

    const [CPF, setCPF] = useState ('')
    const [Email, setEmail] = useState ('')
    const [Senha, setSenha] = useState ('')
    const [SenhaC, setSenhaC] = useState ('')

    function handlerCadastrar(){
        if(CPF===''||Email===''||Senha===''||SenhaC===''){
            Alert.alert('Campo não preenchido','Tente novamente')
        }
        else{
            Alert.alert('Cadastro bem sucedido','Bem vindo')
        }
    }

    

    return(
        <ScrollView>
        <View style={{alignItems:"center", paddingHorizontal:34 }}>


                <Image source = {require('../../assets/LogoSigaEmater.png')}
                    style={style.SigNup}>

                </Image>
                <TextInput style={style.CPFSigNup}
                placeholder={'Digite seu CPF'}
                placeholderTextColor='#87DA5F'
                onChangeText={setCPF}>

                </TextInput>


                <TextInput style={style.EmailSigNup}
                placeholder={'Digite seu email'}
                placeholderTextColor='#87DA5F'
                onChangeText={setEmail}>


                </TextInput>


                <TextInput style={style.SenhaSigNup}
                placeholder={'Digite sua senha'}
                placeholderTextColor='#87DA5F'
                onChangeText={setSenha}>
                    
                </TextInput>


                <TextInput style={style.ConfirmarSenhaSigNup}
                placeholder={'Confirme sua senha'}
                placeholderTextColor='#87DA5F'
                onChangeText={setSenhaC}>
                    
                </TextInput>
                <TouchableOpacity style={style.CadastrarButton}
                onPress={handlerCadastrar}> 
                    <Text style={style.TextCadastraButton}>
                        Cadastrar
                    </Text>
                    
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>{navigation.navigate('FarmerResistration')} } >
                <Text style={style.TextAgricultor} >
                    Voçê ainda não é agricultor?
                
                </Text>
                </TouchableOpacity>
            

            </View>
            </ScrollView>
    )
    };

const style = StyleSheet.create({  
        input:{
            height: 47,
            width: '100%',
            backgroundColor: '#D8F1CC',
            borderRadius: 10,
            marginBottom: 16,
            paddingLeft: 24,
            fontSize: 18,

        },

        SigNup:{
            marginTop:80,
        
        },
        CPFSigNup:{
        backgroundColor: '#D8F1CC',
        fontSize: 18,
        marginTop: 26,
        borderRadius: 10,
        width: '100%',
        paddingHorizontal: 24,
        padding: 14,

        },
        EmailSigNup:{
         backgroundColor: '#D8F1CC',
        fontSize: 18,
        marginTop: 26,
        borderRadius: 10,
        width: '100%',
        paddingHorizontal: 24,
        padding: 14,

        },
        SenhaSigNup:{
            backgroundColor: '#D8F1CC',
        fontSize: 18,
        marginTop: 26,
        borderRadius: 10,
        width: '100%',
        paddingHorizontal: 24,
        padding: 14,

        },
        ConfirmarSenhaSigNup:{
            backgroundColor: '#D8F1CC',
        fontSize: 18,
        marginTop: 26,
        borderRadius: 10,
        width: '100%',
        paddingHorizontal: 24,
        padding: 14,
        },
        CadastrarButton:{
            backgroundColor:'#5F9747',
            padding:20,
            width:'100%',
            marginTop:32,
            borderRadius:20,
            alignItems:'center',
            marginBottom:31,

        },
        TextCadastraButton:{
            color:'white',
            fontSize:16,
            fontWeight:'bold',
        },
        TextAgricultor:{
            color:'#5F9747',
            fontSize:18,
            fontWeight:'bold',
            marginBottom:28,
        },
    }     
)   
   