import React, {useState} from "react";
import { StyleSheet, Image, Text, TouchableOpacity, View, } from "react-native";


/*const App = () => {
    return(
<View style={styles.container}>
    
<Image source={require('./profil.png')} style={styles.profil}/> 
<Text style={styles.text}>Hey Leslee, </Text>
<Text style={styles.text2}>there’s a new course about</Text>
<Text style={styles.text3}>Figma</Text>
 <Text style={styles.text4}>Find out how our new matching tool {'\n'} can help you learn another way</Text>
 <TouchableOpacity  style={styles.button}> 
    <Text style={styles.buttonText}>Discover the course</Text>
    </TouchableOpacity>
</View>

    );
}

export default App;

const styles = StyleSheet.create({
container:{
flex:1,

},
profil:{
    marginTop:40,
    marginLeft:60, 
},
text:{
    fontSize:22,
    fontWeight:'bold',
    color:'rgba(7, 18, 42, 1)',
    marginLeft:140,
},
text2:{
    fontSize:22,
    fontWeight:'bold',
    color:'rgba(7, 18, 42, 1)',
    marginLeft:60,
},
text3:{
    fontSize:22,
    fontWeight:'bold',
    color:'rgba(7, 18, 42, 1)',
    marginLeft:160,
},
textContainer:{
alignItems:'baseline'
},
text4:{
    fontSize:16,
    marginLeft:70,
    marginTop:20
},
button:{
    width:284,
    height:57,
    backgroundColor:'#0B152D',
    marginTop:50,
    marginLeft:50,
    borderRadius:7,
    justifyContent:'center',
alignItems:'center'
},
buttonText:{
fontSize:17,
color:'white',
},
});*/






 const App = () => {
    return(
        <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
            <Image source={require('./geriduymesi.png')}/>
            </TouchableOpacity>
            <View>
            <Text style={styles.text}>Credit / Debit Card </Text> 
             </View>
             </View>
        <View style={styles.debet}>
        <Image source={require('./Ellipse.png')} style={styles.ellipse}/>
        <Image source={require('./Vectorsol.png')} style={styles.vektorsag}/>
        <Image source={require('./Vectororta.png')} style={styles.vektororta}/>
        <Image source={require('./vektorsag.png')} style={styles.vektorsol}/>
        <Text style={styles.number}>4242 4242 4242 4242</Text>
        <Text style={styles.text2}>LESSEE HARRON</Text>
        <Text style={styles.text3}>04/22</Text>
        </View>
        <View>
        <Image source={require('./kamera.png')} style={styles.kamera}/>
        <Image source={require('./kameraninkenari.png')} style={styles.kameraninkenari}/> 
        </View>
        <View style={styles.duzbucaq}>
          <Text style={styles.text4}>Name on card</Text> 
          <Text style={styles.buttonText}>LESSEE HARRON</Text>  
        </View>
        <View style={styles.duzbucaq2}>
        <Text style={styles.text5}>Card number</Text>   
        </View>
        <Text style={styles.buttonText2}>4242 4242 4242 4242</Text>
        <View style={styles.duzbucaq3}>
            <Text style={styles.text6}>Expiry date</Text>
            <Text style={styles.buttonText3}>04/22</Text>
        </View>
        <View style={styles.duzbucaq4}>
            <Text style={styles.text8}>CVC</Text>
            <Text style={styles.buttonText4}>474</Text>
        </View>
        <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText5}>Use this card</Text>
        </TouchableOpacity>
        </View>
    );
 }
 export default App;

 const styles = StyleSheet.create({
      container: {
       flex: 1,
     },
     buttonContainer:{
      flexDirection:'row',
      gap:20,
      marginTop:20,
      marginLeft:35,
     },
     button: {
      width:42,
      height:42,
      borderRadius:8,
      backgroundColor:'rgba(7, 18, 42, 0.15)',
      justifyContent:'center',
        alignItems:'center',
    
     },
     text: {
        fontSize:28,
        fontWeight:'bold',
        color:'rgba(7, 18, 42, 1)',  
     },
     debet: {
     width: 327,
     height: 214,
     backgroundColor:'rgba(7, 18, 42, 1)', 
     borderRadius:8,
     marginLeft:30,
     marginTop:40,
     },
     ellipse:{
        marginLeft:107,
     },
     vektorsag:{
      marginTop:-190,
      marginLeft:245
     },
     vektororta: {
        marginLeft:265,
        marginTop:-35
     },
     vektorsol:{
      marginLeft:270,
      marginTop:-31,     
     },
     number:{
      color:'white',
      fontSize:26,
      marginLeft:20,
      marginTop:20,
     },
     text2:{
        fontSize:20,
        color:'white',
        marginTop:40,
        marginLeft:20
     },
     text3:{
        fontSize:20,
        color:'white',
        marginLeft:230,
        marginTop:-26
     },
     kameraninkenari:{
        marginLeft:165,
        marginTop:-25
     },
     kamera:{
        marginLeft:171,
        marginTop:25
     },
     duzbucaq: {
        width: 327,
        height: 48,
        backgroundColor:'rgba(134, 152, 168, 1)1', 
        borderRadius:8,
        marginLeft:30,
        marginTop:40,
  },
     duzbucaq2: {
        width: 327,
        height: 48,
        backgroundColor:'rgba(134, 152, 168, 1)1',          
        borderRadius:8,
        marginLeft:30,
        marginTop:40,
    },
     
      text4:{
        marginTop:-30,
        marginLeft:10,
        fontSize:15,
      },
      buttonText: {
        color:'#0B152D',
        fontSize:17,
        fontWeight:'bold',
        marginLeft:15,
        marginTop:20
      },
      text5:{
       fontSize:14,
       marginTop:-25,
       marginLeft:15
      },
      buttonText2: {
        color:'#0B152D',
        fontSize:17,
        fontWeight:'bold',
        marginLeft:40,
        marginTop:-35
      },
      duzbucaq3: {
        width: 154,
        height: 48,              
        backgroundColor:'rgba(134, 152, 168, 1)1', 
        borderRadius:8,
        marginLeft:36,
        marginTop:50,
  },
      text6:{
        marginTop:-25,
        marginLeft:8
      },
      buttonText3:{
        marginTop:15,
        marginLeft:8,
        color:'#0B152D',
        fontSize:17,
        fontWeight:'bold',
      },
     duzbucaq4: {
        width: 154,
        height: 48,
        backgroundColor:'rgba(134, 152, 168, 1)1', 
        borderRadius:8,
        marginLeft:200,
        marginTop:-49, 
      },
      text8:{
        marginLeft:7,
        marginTop:-25
      },
      buttonText4:{
        marginTop:15,
        marginLeft:8,
        color:'#0B152D',
        fontSize:17,
        fontWeight:'bold',
      },
      button2:{
        width:327,
        height:56,
        backgroundColor:'#0B152D',
        marginTop:25,
        marginLeft:30,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
    
      },
      buttonText5:{
        fontSize:17,
        color:'white',
        fontWeight:'bold',
      },
});