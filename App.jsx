import { ScreenStack } from "./src/Contexts/Routes"
import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const options = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false
}

const { Navigator, Screen } = createSharedElementStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={options}>
        {
          ScreenStack.map((item, index) => (
            <Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{ item: item }}
            />
          ))
        }
      </Navigator>
    </NavigationContainer>
  )
}
