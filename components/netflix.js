import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,TextInput } from 'react-native';
import Styles from '../style/Styles'

export default function netflix(props){

    return(

        <View style={styles.netflix}>

                <View style={styles.logo}>

                        <Image style={styles.imagemnetflix} source={require('../assets/netflix.png')}></Image>

                </View>

                <View style={styles.meio}>

                        <TextInput placeholder='Email' style={styles.inputs}>
                        </TextInput>

                        <TextInput placeholder='Password' style={styles.inputs2}>
                        </TextInput>

                        <TouchableOpacity style={styles.botao}>
                            <Text style={styles.botaodentroinput}>Sigh In</Text>
                        </TouchableOpacity>
                </View>

                <View style={styles.fim}>

                    <Text style={styles.edittexto_forgot}>Forgot Your Passoword</Text>

                </View>

       </View>
    );
}

// <Text style={Styles.TextoNetflix}>NETFLIX - {props.filme}</Text>

const styles = StyleSheet.create({
  
        netflix:{

            display:'flex',
            height:'100%',
            width:'100%',
            backgroundColor:'#B9090B'
        },

        logo:{

            height:'35%',
            width:'100%',
            alignItems:'center',
            justifyContent:'center'
        },

        imagemnetflix:{

            height:68,
            width:'100%',
            resizeMode:'contain',
            position:'relative',
            top:'20%'
        },

        meio:{

            height:'50%',
            width:'100%',
            alignItems:"center",
            justifyContent:'flex-start'
        },

        inputs:{

            height:70,
            width:'75%',
            position:'relative',
            top:'14%',
            backgroundColor:'#F8E7E7',
            borderBottomColor:'#E7D6D6',
            borderBottomWidth: 3,
            padding: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            fontSize:20,

           
            
        },

        inputs2:{

            height:70,
            width:'75%',
            position:'relative',
            top:58,
            backgroundColor:'#F8E7E7',
            padding: 10,
            borderBottomRightRadius:10,
            borderBottomLeftRadius:10,
            fontSize:20
        },

        botao:{

            height:78,
            width:'75%',
            backgroundColor:'transparent',
            position:'relative',
            top:'21%',
            borderRadius:10,
            borderColor:'#F8E7E7',
            borderWidth:2,
            alignItems:"center",
            justifyContent:'center',

        },

        botaodentroinput:{

            fontSize:20,
            color:'#BCAAAA'

        },

        fim:{

            height:'15%',
            width:'100%',
            alignItems:"center",
            justifyContent:'center',

        },

        edittexto_forgot:{

            fontSize:20,
            color:'#F8E7E7'
        }
  });
  
  













