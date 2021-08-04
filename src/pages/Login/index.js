import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView
} from 'react-native';

export default function Login( { navigation } ) {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    function handlenewLogin() {
        if (user === 'rafael' && password === '12345') {
            Alert.alert('Sucesso', 'Bem vindo');
        }
        else {
            Alert.alert('Erro', 'Senha ou email incorreto');
        }


    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#E5E5E5',

        }}>

            <ScrollView style={{ paddingHorizontal: 34, }}>
                <View style={{ alignItems: 'center', marginTop: 56, }}>
                    <Image
                        source={require('../../assets/LogoSigaEmater.png')}
                        style={styles.ImageLogo}
                    />

                    <TextInput style={styles.input}
                        placeholder='Digite seu CPF'
                        placeholderTextColor='#87DA5F'
                        onChangeText={setUser}
                    >
                    </TextInput>
                    <TextInput style={styles.input}
                        placeholder='Digite sua senha'
                        placeholderTextColor='#87DA5F'
                        secureTextEntry
                        onChangeText={setPassword}
                    >
                    </TextInput>
                    <TouchableOpacity
                        // onPress={() => Alert.alert('Atenção', 'CPF ou Senha Incorretos')}
                        onPress={handlenewLogin}
                        style={styles.Button}
                    >
                        <Text style={styles.lbbutton}>Autenticar
                        </Text>


                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} >
                        <Text style={styles.TextoSenha} >
                            Esqueceu a senha?
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() =>navigation.navigate('SigNup') } >
                    <Text style={styles.TextoCadastro}>
                        Ainda não tem conta? Cadastrar-se
                    </Text>
                    </TouchableOpacity>
                    <Image style={styles.ImgEmater}
                        source={require('../../assets/LogoEmater.png')}
                    />
                </View>
            </ScrollView>




        </View>
    )


}
const styles = StyleSheet.create({
    input: {
        height: 47,
        width: '100%',
        backgroundColor: '#D8F1CC',
        borderRadius: 10,
        marginBottom: 16,
        paddingLeft: 24,
        fontSize: 18,



    },
    Button: {
        backgroundColor: '#5F9747',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 24,
        borderRadius: 20,
        marginTop: 20,

    },
    lbbutton: {
        fontSize: 24,
        color: 'white',
    },
    ImageLogo: {
        marginBottom: 56,
    },
    TextoSenha: {
        color: '#5F9747',
        fontSize: 18,
        marginTop: 32,
        fontWeight: 'bold',
    },
    TextoCadastro: {
        color: '#5F9747',
        fontSize: 18,
        marginTop: 8,
        fontWeight: 'bold',
    },
    ImgEmater: {
        marginTop: 56,
        marginVertical: 30,
    },
    test: {
        backgroundColor: 'blue',
        padding: 30,
        color: 'white'
    }

})
