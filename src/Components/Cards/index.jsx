import { useState } from "react"
import { View } from "react-native"
import {Style} from "../../Contexts/Theme"
import {ButtonCuston} from '../Button'

export const Card = (props) => {
    const [qtd,setQtd] = useState(0)
    const addItem = () => { }
    const removeItem = () => { }
    return(<View style = {Style.container}>
            <Text>{props.tittle}</Text>
            <Text>{props.descrition}</Text>
            <Text>R${props.price}</Text>
            <Text>Quantidade {qtd}</Text>
            <ButtonCuston onPress={addItem} placeholder= '+'/>
            <ButtonCuston onPress={removeItem} placeholder= '-'/>
        </View>)
}