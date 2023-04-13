import React from "react";
import { StyleSheet, Text, View,TouchableOpacity,Image,TextInput } from 'react-native';

export default function google(){

    return(

        <View style={styles.google}>

            <View style={styles.inicio}>

                <Image style={styles.camera}  source={require('../assets/google/camera.png')}></Image>
                <Image style={styles.pontinhos} source={require('../assets/google/tres-pontinhos.png')}></Image>
            </View>

            <View style={styles.meio}>

                <Image style={styles.logo}  source={require('../assets/google/logo-google.png')}></Image>
                <TextInput placeholder="Search or type URL" style={styles.input}></TextInput>
            </View>


        </View>



    );
}


const styles = StyleSheet.create({

    google:{

        display:'flex',
        height:'100%',
        width:'100%',
        backgroundColor:'#FFFFFF'
    },

    inicio:{

        height:'12%',
        width:'100%',
        alignItems:'flex-end',
        flexDirection:'row',
        justifyContent:'flex-end'
    },

    camera:{

        position:'relative',
        left:-30
    },

    pontinhos:{

        height:'25%',
        position:'relative',
        top:-11,
        left:-15
    },

    meio:{

        height:'80%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
    },

    logo:{

        height:'11.6%',
        width:'56%',
        position:'relative',
        top:-65,
        left:0
    },

    input:{

        height:64,
        width:'90%',
        backgroundColor:'#FFFFFF',
        padding: 10,
        fontSize:17,
        position:'relative',
        top:-20,
        borderRadius:3,
        borderColor:'#E2DDDD',
        borderWidth: 2
    }
});