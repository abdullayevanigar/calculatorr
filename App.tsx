import React, {useEffect, useState} from "react";
import { StyleSheet, Text, TouchableOpacity, View, } from "react-native";

 const App = () => {
  const [result, setResult] = useState('');
  const [firstNumber, serFirstNumber] = useState('0');
  const [operator, setoperator] = useState(null);

  const setNumber = (number) => {
    if (result === 0) {
      setResult(number);
    } else {
   setResult(result + number);
    }
};

const operand = (arq:String) => {
  setoperator(arq);
serFirstNumber(parseInt(result));
setResult('');
};
useEffect( () => {
  if(result === Infinity) {
    setResult(('error'))
  }
}, [result]);

const equal = () => {
  switch (operator) {
case '+':
  setResult((firstNumber) + parseInt(result));
  break;
  case '-' :
  setResult(parseInt(firstNumber) - parseInt(result));
  break;
  case '*':
  setResult(parseInt(firstNumber) * parseInt(result));
  break;
  case '/':
  setResult(parseInt(firstNumber) / parseInt(result));
  break;
  case '%':
  setResult(parseInt(firstNumber) % parseInt(result));
  break;
  default:
   setResult(0);
   break;
}
}

  return(
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.text}>{result}</Text>
      </View>

    
    
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.operatorButton}
     onPress={operand}>
      <Text style={styles.buttonText1}>C</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton}
      onPress={operand}>
      <Text style={styles.buttonText1}>( )</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton}
      onPress={operand}>
      <Text style={styles.buttonText1}>%</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton}
      onPress={() => operand('/')}>
      <Text style={styles.buttonText1}>/</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => setNumber(7)}>
      <Text style={styles.buttonText}>7</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => setNumber(8)}>
      <Text style={styles.buttonText}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => setNumber(9)}>
      <Text style={styles.buttonText}>9</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton} 
      onPress={() => operand('*')}>
      <Text style={styles.buttonText1}>x</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => setNumber(4)}>
      <Text style={styles.buttonText}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => setNumber(5)}>
      <Text style={styles.buttonText}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => setNumber(6)}>
      <Text style={styles.buttonText}>6</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton}
      onPress={() => operand('-')}>
      <Text style={styles.buttonText1}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => setNumber(1)}>
      <Text style={styles.buttonText}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => setNumber(2)}>
      <Text style={styles.buttonText}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => setNumber(3)}>
      <Text style={styles.buttonText}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton}
     onPress={() => operand('+')}>
      <Text style={styles.buttonText1}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton}
     onPress={() => equal()}>
      <Text style={styles.buttonText1}>+/-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => setNumber(0)}>
      <Text style={styles.buttonText}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton}
      onPress={() => setNumber(',')}>
      <Text style={styles.buttonText}>,</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton2}
      onPress={equal}>
      <Text style={styles.buttonText}>=</Text>
      </TouchableOpacity>

  </View>
    </View>
   
  );
 }

 export default App;

 const styles = StyleSheet.create({
      container: {
      flex: 1,
      
   },
  text: {
      fontSize: 50,
      fontWeight:'bold',
      
   },
  operatorContainer:{
      flexDirection:'row' ,
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center',
      gap:10,
      marginVertical:10,
      
   },

   buttonContainer: {
      flexDirection:'row',
      gap:5,
      justifyContent:'center',
      alignItems:'center',
      flexWrap:'wrap',
      paddingHorizontal:4
      
      
   },
  resultContainer: {
      flex: 1,
      gap:30,
      alignItems:'flex-end',
   },
   button: {
      backgroundColor:'black',
      borderRadius:25,
      justifyContent:'center',
      alignItems:'center',
      width:'22%',
      height:80,
        },
   operatorButton: {
      backgroundColor:'black',
      borderRadius:25,
      justifyContent:'center',
      alignItems:'center',
      width: '22%',
      height:80,

   },
   operatorButton2: {
      backgroundColor:'blue',
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center',
      width:'22%',
      height:80,
   },
   buttonText: {
      color:'white',
      fontSize: 30,
   },
   buttonText1: {
      color:'blue',
      fontSize: 30,
   },
   
 } );

