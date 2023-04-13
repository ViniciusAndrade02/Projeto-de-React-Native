import React from "react";
import { StyleSheet, Text, View,TouchableOpacity,Image,TextInput } from 'react-native';



export default function duolingo(){

    return(

        <View style={styles.duolingo}>

            <View style={styles.inicio}>
                <Image style={styles.logo} source={require('../assets/duolingo/duolingo.png')}></Image>
            </View>

            <View style={styles.meio}>

                <Text style={styles.font_duo}>duolingo</Text>
                <Text style={styles.font_desc}>Learn a language for free.</Text>
                <Text style={styles.font_desc1}>Forever</Text>

            </View>

            <View style={styles.fim}>

                <TouchableOpacity style={styles.btn1}>
                    <Text style={styles.text_bnt1}>GET STARTED</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn2}>
                <Text style={styles.text_bnt2}>I ALREADY HAVE AN ACCOUNT</Text>               
                </TouchableOpacity>

            </View>

        </View>


    );
}

const styles = StyleSheet.create({


    duolingo:{

        display:'flex',
        height:'100%',
        width:'100%',
        backgroundColor:'#FFFFFF'

    },

    inicio:{

        height:'46%',
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-end'
    },

    logo:{

        height:'33%',
        width:'35%',
        position:'relative',
        top:-14,
        left:0

    },

    meio:{

        height:'30%',
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-start'
    },

    font_duo:{

        fontSize:30,
        color:'#60B31B',
        position:'relative',
        top:20,
        left:0
    },

    font_desc:{

        fontSize:18,
        color:'#CAC5C5',
        position:'relative',
        top:38,
        left:0 
    },

    font_desc1:{

        fontSize:18,
        color:'#CAC5C5',
        position:'relative',
        top:48,
        left:0 
    },

    fim:{

        height:'25%',
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-start'

    },

    btn1:{

        alignItems:'center',
        justifyContent:'center',

        position:'relative',
        top:40,
        left:0, 

        height:'30%',
        width:'90%',
        backgroundColor:'#58CC02',
        borderRadius:19,
        borderWidth:2,
        borderColor:'#56801C',
        borderBottomColor:'#56801C',
        borderBottomWidth: 5,

    },

    text_bnt1:{

        fontWeight:'700',
        fontSize:16,
        color:'#E3F4BE',
    },

    btn2:{

        alignItems:'center',
        justifyContent:'center',

        position:'relative',
        top:60,
        left:0, 

        height:'30%',
        width:'90%',
        backgroundColor:'transparent',
        borderRadius:19,
        borderWidth:2,
        borderColor:'#CAC5C5',
        borderBottomColor:'#CAC5C5',
        borderBottomWidth: 5,

    },

    text_bnt2:{

        fontWeight:'700',
        fontSize:16,
        color:'#58CC02',

    }
});