import { View } from "react-native"
import { Style } from "../../Contexts/Theme"
import { CardStyleInterpolators } from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { getProducts } from "../../Contexts/Data";

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
    return(<View style={Style.container}>
        {getProducts().map(
            (item)=> (<Card {...item}/>)
            )}
    </View>)
}

const Details = ({navigation})=> {
    return(<View style={Style.container}></View>)
}