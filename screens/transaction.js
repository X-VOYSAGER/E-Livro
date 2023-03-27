import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions"
import { BarCodeScanner } from "expo-barcode-scanner";

export default class TransactionScreen extends Component{

    constructor() {
        super()
        this.state = {
            domState: 'normal',
            hasCameraPermission: null,
            scanned: 'false',
            scannedData: ''
        }
        
    }
    getCameraPermissions = async (domState) => {
        const{status} = await Permissions.askAsync(Permissions.CAMERA)
            this.setState({
                hasCameraPermission: status == 'granted',
                domState: domState,
                scanned: false
            })
    }

    handleBarCodeScanned = async ({type, data}) => {
        this.setState({
            scannedData: data,
            domState: "normal",
            scanned: true
        })

    }

    render(){
      
        const{domState, hasCameraPermission, scannedData, scanned} = this.state
        if (domState === "scanner") { 
            return(
                <BarCodeScanner
                onBarCodeScanned={scanned ? undefined: this.handleBarCodeScanned}
                style = {StyleSheet.absoluteFillObject}

                />

            )

        }
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>
                    {hasCameraPermission? scannedData: "Ei! Como eu vou scannear o qr code sem a permissão da câmera?"}   
                </Text>
                <TouchableOpacity onPress = {() => this.getCameraPermissions("scanner")} style = {styles.button}>
                    <Text style = {styles.buttonText}>Ei amigo! digitalize aqui :D</Text>
                </TouchableOpacity>
            </View>
        )
        

    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#5653D4"
    },
    text: {
      color: "#ffff",
      fontSize: 15
    },
    button: {
      width: "43%",
      height: 55,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F48D20",
      borderRadius: 15
    },
    buttonText: {
      fontSize: 15,
      color: "#FFFFFF"
    }
  });
  