import { View, Image } from "react-native"
import { Style } from "../../Contexts/Theme"

export const ImageCuston = ({ img}) => {
    return (
        <View>
            <Image
            style = {Style.img}
            source = {img}/>
        </View>
    )
}