import React from 'react';
import {View,StyleSheet} from 'react-native';
import Netflix from './netflix';
import Google from './google'
import Duolingo from './duolingo'


export default function caixas(){

    return(

        <View style={styles.paginas}>

                <View style={styles.netflix}>
                    <Netflix/>
                </View>

                <View style={styles.netflix_login}>
                    
                </View>

                <View style={styles.google}>
                    <Google/>
                </View>

                <View style={styles.duolingo}>
                    <Duolingo/>
                </View>
        </View>

    );
}

const styles = StyleSheet.create({
  
    paginas:{

        height:'100%',
        width:'100%',
        backgroundColor:'blue'

    },

    netflix:{

        display:'none',
        height:'100%',
        width:'100%',
        backgroundColor:'#B9090B'
    },

    netflix_login:{

        display:'none',
        height:'100%',
        width:'100%',
        backgroundColor:'orange'
    },

    google:{

        display:'flex',
        height:'100%',
        width:'100%',
        backgroundColor:'#fff'
    },

    duolingo:{

        display:'none',
        height:'100%',
        width:'100%',
        backgroundColor:'purple'
    }
  });
  
  



