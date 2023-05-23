import { useState } from "react"
import { View, Text } from "react-native"
import {Style} from "../../Contexts/Theme"
import {ButtonCuston} from '../Button'
import { ImageCuston } from "../Imagem"

export const Card = (props) => {
    const [qtd,setQtd] = useState(0)
    const addItem = () => {
        setQtd(qtd + 1)
     }
    const removeItem = () => { 
        setQtd(qtd-1)
    }
    return(
    <View style = {[Style.card, Style.row]}>
        <ImageCuston img={props.img}/>
        <Text onPress = {()=> {
            props.navigation.navigate('Details',props)
        }}
            style = {Style.text}>
                Mais Informação

        </Text>

        
        
        <View style= {[Style.column]}>
            <Text style = {Style.title}>{props.tittle}</Text>
            <Text style = {Style.text}>{props.descrition}</Text>
            <Text style = {Style.title}>R${props.price}</Text>
            <Text style = {Style.title}>Quantidade {qtd}</Text>
            <View style= {[Style.card]}>

                <View style = {Style.botao}>
                <ButtonCuston onPress={addItem} placeholder= '+'/>
                <View/>
                
                <View> 
                <ButtonCuston onPress={removeItem} placeholder= '-'/>
                </View>
            </View>
        </View>
    </View>
    </View>
)}