import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/78802209?v=4';
const urlToMyGithub = 'https://github.com/jefflovis';

const App = () => {

    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        console.log('Link aprovado');
        console.log('Abrindo link...');
        if(res){
           await Linking.openURL(urlToMyGithub);
        }
    };
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
            <View style={style.content}>
                <Image 
                accessibilityLabel="Busto de jefferson lovis com efeito"
                style={style.avatar} 
                source={{uri: imageProfileGithub}} 
                />
                <Text
                accessibilityLabel="Nome: Jefferson Lovis" 
                style={[style.defaultText, style.name]}>
                Jefferson Lovis
                </Text>
                <Text
                accessibilityLabel="Nickname: jefflovis" 
                style={[style.defaultText, style.nickname]}>
                jefflovis
                </Text>
                <Text 
                accessibilityLabel="Descrição: Estudante de Análise e Desenvolvimento de Sistemas | Front-end Developer em formação | Estudando JavaScript, React e React Native" 
                style={[style.defaultText, style.description]}>Estudante de Análise e Desenvolvimento de Sistemas | Front-end Developer em formação | Estudando JavaScript, React e React Native 
                </Text>
                <Pressable onPress={handlePressGoToGithub}>
                <View style={style.button}>
                    <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
                </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1, // Expandir para a tela inteira
        justifyContent: 'center',
    },

    content: {
        alignItems: 'center',
        padding: 20,
    },

    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 3,
    },

    defaultText: {
        color: colorFontGithub,
    },
    name: {
        marginTop: 20,
        fontSize: 26,
        fontWeight: 'bold',
    },
    nickname: {
        fontSize: 20,
        color: colorDarkFontGithub,
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
    },
  
});