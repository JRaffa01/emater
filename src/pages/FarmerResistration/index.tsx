import React, { Component, useState } from "react";
import { Picker } from '@react-native-picker/picker';
import { Text, View, TextInput, Image, StyleSheet, TouchableOpacity, Alert, Switch, } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from "react-native-gesture-handler";
export default function FarmerResistration({ navigation }) {


    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [selectedValue, setSelectedValue] = useState("Sexo");

    return (

        <ScrollView>
            <View style={{
                paddingHorizontal: 34,
                alignItems: 'center'
            }} >

                <Image source={require('../../assets/LogoSigaEmater.png')}
                    style={styles.FarmerResistration} >
                </Image>


                <TextInput style={styles.input}
                    placeholder={'Digite seu CPF'}
                    placeholderTextColor='#87DA5F'
                >

                </TextInput>
                <TextInput style={styles.input}
                    placeholder={'Digite seu telefone'}
                    placeholderTextColor='#87DA5F'
                >
                </TextInput>

                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: '100%', backgroundColor: '#D8F1CC' }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker label="Escolha o sexo" value="sexo" />
                    <Picker.Item label="Masculino" value="jmasculino" />
                    <Picker.Item label="Feminino" value="feminino" />
                    <Picker.Item label="Outros" value="outros" />
                </Picker>

                <TextInput style={styles.input}
                    placeholder={'Digite sua data de nascimento'}
                    placeholderTextColor='#87DA5F'
                >
                </TextInput>
                <Text style={styles.TextData}>
                    Apenas numeros
                </Text>
                <TextInput style={styles.input}
                    placeholder={'Digite seu município'}
                    placeholderTextColor='#87DA5F'
                >

                </TextInput>
                <TextInput style={styles.input}
                    placeholder={'Qual a sua categoria'}
                    placeholderTextColor='#87DA5F'
                >
                </TextInput>
                <Text style={styles.TextJatemDAP}> Já tem DAP? </Text>

                <Switch trackColor={{ false: "##D8F1CC", true: "#D8F1CC" }}
                    thumbColor={isEnabled ? "##D8F1CC" : "#5F9747"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={styles.CheckBox} />

                {isEnabled ? (

                    <>

                        <TextInput style={styles.input}
                            placeholder={'Digite seu numero DAP'}
                            placeholderTextColor='#87DA5F'
                        >

                        </TextInput>
                        <TextInput style={styles.input}
                            placeholder={'Digite o modelo DAP'}
                            placeholderTextColor='#87DA5F'
                        >

                        </TextInput>
                        <TextInput style={styles.input}
                            placeholder={'Digite data de cadastro DAP'}
                            placeholderTextColor='#87DA5F'
                        >

                        </TextInput>
                        <TextInput style={styles.input}
                            placeholder={'Digite data de verificação DAP'}
                            placeholderTextColor='#87DA5F'
                        >

                        </TextInput>
                        <TouchableOpacity style={styles.botton} >
                            <Text style={styles.Textbotton}> Cadastrar </Text>
                        </TouchableOpacity>


                        <TouchableOpacity>
                            <Text style={styles.Text}>
                                Já sou agricultor atendido pela EMATER
                            </Text>
                        </TouchableOpacity>
                    </>)

                    : <><TouchableOpacity style={styles.botton}>
                        <Text style={styles.Textbotton}> Cadastrar </Text>
                    </TouchableOpacity><Text style={styles.Text}>Já sou Agricultor</Text></>}


            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    FarmerResistration: {
        marginTop: 100,
        marginBottom: 30,
        alignItems: 'center',
    },
    input: {
        height: 47,
        width: '100%',
        backgroundColor: '#D8F1CC',
        borderRadius: 10,
        marginBottom: 16,
        paddingLeft: 24,
        fontSize: 18,
        marginTop: 18,
    },
    CheckBox: {
        right: 125,
        marginBottom: 24,
    },
    TextCheckbox: {
        color: '#87DA5F',
        right: 65,
        bottom: 25,
        fontWeight: 'bold',
        fontSize: 18,

    },
    TextDAP: {
        height: 47,
        width: '100%',
        backgroundColor: '#D8F1CC',
        borderRadius: 10,
        marginBottom: 16,
        paddingLeft: 24,
        fontSize: 18,
    },
    botton: {
        backgroundColor: '#5F9747',
        padding: 20,
        width: '100%',
        marginTop: 18,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 31,
    },
    Textbotton: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    Text: {
        color: '#5F9747',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 28,
    },
    TextData: {
        color: '#5F9747',
        right: 90,
        fontSize: 12,

    },
    TextJatemDAP: {
        right: 50,
        top: 24,
        fontSize: 15,
        color: '#87DA5F',
        fontWeight:'bold'
    },
})

