import React from 'react';
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../Screens/Home";
import { Login } from "../Screens/Login";
import { RecoverPassword } from "../Screens/RecoverPassword";
import { SignUp } from '../Screens/SignUp'
import { Footer } from "../Components/Footer";
import { useAuth, AuthProvider } from '../contexto/auth'; // Importar o contexto de autenticação
import { RegistrationGroup } from '../Screens/RegistrationGroup';

const routes = createNativeStackNavigator();
const tab = createBottomTabNavigator();

export type RoutesNavigationType = {
    Home: undefined;
    Login: undefined;
    RecoverPassword: undefined;
    SignUp: undefined;
    RegistrationGroup: undefined;
}

export type routesType = NativeStackNavigationProp<RoutesNavigationType>

// function TabNavigator() {
//     return (
//         <tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }} tabBar={Footer}>
//             <tab.Screen name="Home" component={Home} />
//             <tab.Screen name="RegistrationGroup" component={RegistrationGroup} />
//         </tab.Navigator>
//     )
// }

// function AuthenticatedRoutes() {
//     return (
//         <routes.Navigator screenOptions={{ headerShown: false }}>
//             {/* <routes.Screen name="Tabs" component={TabNavigator} /> */}
//         </routes.Navigator>
//     )
// }

function GuestRoutes() {
    return (
        <routes.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <routes.Screen name="Login" component={Login} />
            <routes.Screen name="RecoverPassword" component={RecoverPassword} />
            <routes.Screen name="SignUp" component={SignUp} />
            <routes.Screen name="Home" component={Home} />
            <routes.Screen name="RegistrationGroup" component={RegistrationGroup} />
        </routes.Navigator>
    )
}

export function Routes() {
    const { user } = useAuth();

    return (
        <AuthProvider>
            {/* {user ? <AuthenticatedRoutes /> : <GuestRoutes />} */}
            <GuestRoutes />
        </AuthProvider>
    )
}
