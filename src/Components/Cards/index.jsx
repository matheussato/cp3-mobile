import { useState } from "react"
import { View } from "react-native"
import {Style} from "../../Contexts/Theme"
import {ButtonCuston} from '../Button'
import { ImageCuston } from "../Imagem"

export const Card = (props) => {
    const [qtd,setQtd] = useState(0)
    const addItem = () => { }
    const removeItem = () => { }
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
                <View>
                <ButtonCuston onPress={addItem} placeholder= '+'/>
                <View/>
                <View style = {[Style.column]}> 
                <ButtonCuston onPress={removeItem} placeholder= '-'/>
                </View>
            </View>
        </View>
    </View>
    </View>
)}