import React, { useRef } from 'react'
import Toast from 'react-native-easy-toast'
import { StyleSheet, Text, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AddRestaurantForm from '../../components/restaurants/AddRestaurantForm'
import { set } from 'react-native-reanimated'

export default function AddRestaurants() {
    const toastRef =useRef()
    const [Loading, setLoading] = useState(false)
    return (
        <KeyboardAwareScrollView>
            <AddRestaurantForm toastRef ={toastRef} setLoading={setLoading}/>
            <Loading isVisible={Loading} text="Creando resturante..."/>
            <Toast ref={toastRef} position="center" opacity={0.9}/>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({})
