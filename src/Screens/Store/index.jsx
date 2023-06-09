import { ScrollView } from "react-native";
import { Text } from "react-native"
import { Style } from "../../Contexts/Theme"
import { CardStyleInterpolators } from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { getProducts } from "../../Contexts/Data";
import { ImageCuston } from "../../Components/Imagem";
import { Card } from "../../Components/Cards";

const options = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false
}

const { Navigator, Screen } = createSharedElementStackNavigator()

export const Store = ({navigation}) => {
    return (<Navigator screenOptions={options}>
        <Screen name="Catalog" component={Catalog}/>
        <Screen name = "Details" component = {Details}/>
            </Navigator>)
}

const Catalog = ({navigation})=> {
    return(<ScrollView>
        {getProducts().map(
            (item)=> (<Card {...item} navigation={navigation}/>)
            )}
         </ScrollView>)
}


const Details = ({navigation,route})=> {
    const product = route.params
    return(<ScrollView>
        <Text>{product.tittle}</Text>
        <ImageCuston img={product.img}/>

        <Text style={Style.text}>{product.descrition}</Text>
        <Text style={Style.title}> R$ {product.price}</Text>
        <Text style={Style.text}>R$ {product.descritionAll}</Text>
    </ScrollView>)
}