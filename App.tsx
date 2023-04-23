import React, {useState} from "react";
import { StyleSheet, Text, TouchableOpacity, View, } from "react-native";

 const App = () => {
  const [result, setResult] = useState('0');
  const [firstNumber, serFirstNumber] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const setNumber = number => {
    if (result === '0') {
      setResult(number);
    } else {
   setResult(result + number);
    };
};

const addOperand = () => {
serFirstNumber(parseInt(result));
setResult('');
};

const equal = () => {
  setResult(firstNumber + parseInt(result));
};

const suptract = () => {
  serFirstNumber(parseInt(result));
  setResult('');

};
  return(
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.text}>{result}</Text>
      </View>

     <View style={styles.operatorContainer}>
     <TouchableOpacity style={styles.operatorButton}
     onPress={addOperand}>
      <Text style={styles.buttonText1}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton}
      onPress={suptract}>
      <Text style={styles.buttonText1}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton}>
      <Text style={styles.buttonText1}>/</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton}>
      <Text style={styles.buttonText1}>*</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.operatorButton2}
      onPress={equal}>
      <Text style={styles.buttonText}>=</Text>
      </TouchableOpacity>
    </View>
    
      <View style={styles.buttonContainer}>
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
      <TouchableOpacity style={styles.button}
      onPress={() => setNumber(0)}>
      <Text style={styles.buttonText}>0</Text>
      </TouchableOpacity>

  </View>
    </View>
   
  );
 }

 const styles = StyleSheet.create({
      container: {
      flex: 1,
    
   },
  text: {
      fontSize: 50,
      fontWeight:'bold',
   },
  operatorContainer:{
      flexDirection:'row',
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center',
      gap:10,
      marginVertical:10,
      paddingHorizontal:30
   },
  resultContainer: {
      flex: 1,
      gap:10,
      justifyContent:'flex-end',
      alignItems:'flex-end',
   },
   button: {
      backgroundColor:'black',
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center',
      width:'30%',
      height:90,
   },
   operatorButton: {
      backgroundColor:'black',
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center',
      width:'20%',
      height:70,
   },
   operatorButton2: {
      backgroundColor:'blue',
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center',
      width:'20%',
      height:70,
   },
   buttonText: {
      color:'white',
      fontSize: 30,
   },
   buttonText1: {
      color:'blue',
      fontSize: 30,
   },
   buttonContainer: {
      flexDirection:'row',
      gap:10,
      justifyContent:'center',
      flexWrap:'wrap',
   },
 } );

export default App;