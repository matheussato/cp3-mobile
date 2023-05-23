import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { getData } from '../Contexts/Data'
import { Style } from '../Contexts/Theme';
import { ButtonCuston } from "../Components/Button"

export const Home = ({ navigation }) => {

    useEffect(() => {
        const CallBack = (user) => {
            if (!user) {
                navigation.navigate('Register')
                return false
            }
            if (!user.login) {
                navigation.navigate('Login')
                return false
            }
        }
        
        getData(CallBack, 'user')
    })
    const onPress = () => {
        navigation.navigate('Logoff')
    }
    return (
        <View style={Style.container}>
            <Text>Bem-Vindo</Text>
            <ButtonCuston onPress={onPress} placeholder='Logoff' />
            <StatusBar style="auto" />
        </View>
    );
}
