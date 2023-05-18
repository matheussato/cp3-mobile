import { useState, useEffect } from "react"
import { Text, View } from "react-native"
import { setData, getData } from '../../Contexts/Data'
import { TextCuston } from "../../Components/TextInput"
import { ButtonCuston } from "../../Components/Button"
import { Style } from "../../Contexts/Theme"

export const Login = ({ navigation }) => {
    const [form, setForm] = useState({})
    const [error, setError] = useState('')
    var user = {}
    useEffect(() => {
        const FindUser = (value) => {
            user = value
        }
        getData(FindUser, 'user')
    })

    const CallBack = (key, value) => {
        var clone = Object.assign({}, form)
        clone[key] = value
        setForm(clone)
    }
    const Validated = () => {
        return (form.name && form.pass)
            ? true : false
    }//Validar via banco de dados
    const Next = () => {
        user.login = true
        setData('user', user)
        navigation.navigate('Home')
    }
    const onPress = () => {
        (Validated())
            ? Next()
            : setError('preencha o formulario corretamente')
    }
    return (<View style={Style.container}>
        <Text style={Style.title}>Login</Text>
        <TextCuston
            name='name'
            value={form.name}
            placeholder='Nome'
            CallBack={CallBack} />
        <TextCuston
            name='pass'
            value={form.pass}
            placeholder='Senha'
            CallBack={CallBack} />
        <Text style={Style.error}>{error}</Text>
        <ButtonCuston onPress={onPress} placeholder='Cadastrar' />
    </View>)
}