import React from 'react'
import { View,Text, StyleSheet } from 'react-native'
import ButtonWithTxt from '../CommonUtils/ButtonWithTxt'


export default function HomeScreen({navigation}){

    const handleLogout = ()=>{
        alert('Signing off byee....');
        navigation.navigate('LoginScreen')
    }
    return(
        <View style={styles.container1} >
            <Text style={styles.textStyle} >Home screen</Text>
            <ButtonWithTxt
                text="Logout"
                press={handleLogout}
                containerStyle={ styles.loginContainer }
                textUpperCase={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container1:{
        margin:"10%",
        alignItems:"center",
        flex:1
    },
    loginContainer:{
        marginTop:"30%",
        flexDirection:"row"
    },
    textStyle:{
        fontWeight:"bold",
        fontSize:20
    }
})