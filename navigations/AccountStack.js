import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Account from '../screens/Account'

const Stack = createStackNavigator()

export default function AccountStack() {
    return (
        <Stack.Screen
        name="account"
        component={Account}
        options={{ title: "Cuenta" }}
     />
    )
}
