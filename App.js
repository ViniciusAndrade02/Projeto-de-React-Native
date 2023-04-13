import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,TextInput } from 'react-native';
import {useState} from "react";
import C1 from './components/netflix'
import Caixas from './components/caixas'

export default function App() {

  const [number, setNumber] = useState(10);

  const clicar = () =>{

    setNumber(number+10)
    alert(' Somou 10')

    

  }

  const [numero1, setNumero1] = useState()
  const [numero2,setNumero2]  = useState()
  const [resultado,setResultado] = useState()
  const somar = () =>{

    let a=numero1
    let b= numero2
    let valornumerico= parseInt(a)
    let valornumerico1= parseInt(b)
    setResultado(valornumerico+valornumerico1)

  }

  return (

    <View style={styles.container}>

      <Caixas/>

    </View>
  );
}

/*
        <C1  filme='tosco'   />
        <C1  filme='aranha' />
        <C1  filme='toalha' />
        <C1  filme= {number} />
*/ 


const styles = StyleSheet.create({
  
  container: {
    flex:1,
  },


  inicio: {
    flex:0.2,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'red',
    flexDirection:'row',
  },

  editarletra1:{

    color:'white',
    marginRight:'20%'
  },

  editbotao: {

    height:30,
    width:100,
    backgroundColor:'white',
    
  },

  editclickaqui: {

    textAlign:'center',
    
  },

  meio: {
    flex:0.6,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'green',

  },

  a: {

    marginBottom:30,
    backgroundColor:'white',
    height:30,
    width:100,
    alignItems:'center',
    justifyContent:'center',
  },

  inputnome:{

    borderColor:'orange',
    backgroundColor:'red',
    width:'20%',
    marginBottom:40,
  },

  fim: {

    flex:0.2,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'blue'
  },

  imagem: {

    borderRadius: 10,
    height:'70%',
    width:'80%'
  }
});



/*

          <View style={styles.inicio}>

                <Text style={styles.editarletra1}>LEITWE</Text>

                <TouchableOpacity style={styles.editbotao} onPress={clicar}>
                    <Text style={styles.editclickaqui}>Clique aqui</Text>
                </TouchableOpacity>

                <Text>{number}</Text>

          </View>

          <View style={styles.meio}>

                <Text>Digite um numero:</Text>

                <TextInput onChangeText={text=>setNumero1(text)} keyboardType='numeric' value={numero1} placeholder='Ex: 10' style={styles.inputnome}>
                </TextInput>

                <Text>Digite outro numero:</Text>

                <TextInput   onChangeText={text=>setNumero2(text)} value={numero2} keyboardType='numeric' placeholder='Ex: 5' style={styles.inputnome}>
                </TextInput>

                <TouchableOpacity style={styles.a} onPress={somar}>
                  <Text >SOMAR</Text>
                </TouchableOpacity>

                <Text >{resultado}</Text>
          </View>

          <View style={styles.fim}>
                <Image style={styles.imagem} source={require('./assets/pesssoas.png')}></Image>
          </View>


*/ 
