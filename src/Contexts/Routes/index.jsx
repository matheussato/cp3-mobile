import { Home } from "../../Screens/home"
import { Register } from "../../Screens/Login/register"
import { Logoff } from "../../Screens/Login/Logoff"
import { Login } from "../../Screens/Login"
import { Icons } from "../../Components/Icon"
import { Routes } from "../../Screens/routes";

export const ScreenArray = [
    {
        route: 'Home',
        label: 'Home',
        typeIcon: Icons.Feather,
        icon: 'home',
        component: Home,
        notification: 0
    },{
    route : 'Loja',
    label: 'Loja',
    typeIcon: Icons.Feather,
    icon : 'home',
    component : Store,
    notification : 0
    }
]

export const ScreenStack = [
    {
        route: 'Routes',
        label: 'Routes',
        component: Routes
    }, {
        route: 'Register',
        label: 'Register',
        component: Register
    }, {
        route: 'Logoff',
        label: 'Logoff',
        component: Logoff
    }, {
        route: 'Login',
        label: 'Login',
        component: Login
    }
]

