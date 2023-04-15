import React from "react";
import {Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

const App = () => {
  return (
     <SafeAreaView>
       <Text style={{fontSize:30, color: 'rgba(7, 18, 42, 1)', left: 120, top: 358}}>Hey Leslee,</Text>
       <Text style={{fontSize:29, color:'rgba(7, 18, 42, 1)', left:30, top:350}}>there's a new course about</Text>
       <Text style={{fontSize:29, color:'rgba(7, 18, 42, 1)', left:150, top:344}}>Figma</Text>
       <Text style={{fontSize:21, left:150, top:530}}>not now</Text>
       <Text style={{fontSize:20, left:40, top:320}}>Find out how our new matching tool</Text>
       <Text style={{fontSize:20, left:55, top:315}}>can help you learn  another way</Text>
       <View style={{backgroundColor:'rgba(7, 18, 42, 1)', width:327, height:56, left:36, top:360}}/>
       <Text style={{fontSize:25, left:85, top:313, color:'white'}}>Discover the course</Text>
       <Image source={require('./profil.png')} style={{left:50, top:-280}}/>
     </SafeAreaView>
     
  );

  };


  ///////////////////////////////////////////////////////////////////////////

 /* const App = () => {
  return(
    <SafeAreaView>
    <Text style={{fontSize: 22, 
      color: 'rgba(7, 18, 42, 1)',
      left: 100,
      fontWeight:700,
      top: 30,
      width:600,
      height:28,}}>Credit / Debit Card</Text>
    
  <TouchableOpacity style={{width: 42,
      height: 42,
      left: 40,
      top:0,
      backgroundColor:' rgba(7, 18, 42, 0.15)'}}></TouchableOpacity>
      <Image source={require('./geriduymesi.png')} style={{left:57, top:-28, width:5,height:11}}/>
      <Image source={require('./debet.png')} style={{left:35, top:10, width:327,height:214}}/>
      <Image source={require('./Ellipse.png')} style={{left:140,top:-204, width:222,height:214}}/>
      <Text style={{fontSize:22, color:'white', top:-260, left:50}}>LESLEE HARRON</Text>
      <Text style={{fontSize:28, color:'white', left:55, top:-360, width:277,height:30.32}}>4242 4242 4242 4242</Text>
      <Text style={{fontSize:20, color:'white', left:270, top:-320, width:55,height:31}}>04/22</Text>
      <Image source={require('./Vectororta.png')} style={{left:300, top:-478, width:16.83,height:28.04}}/>
      <Image source={require('./Vectorsol.png')} style={{left:280, top:-510, width:28.29, height:35.66}}/>
      <Image source={require('./vektorsag.png')} style={{left:310,top:-546, width:28.29, height:35.66}}/>
      <Image source={require('./kameraninkenari.png')} style={{left:180, top:-375, width:34, height:29}}/>
      <Image source={require('./kamera.png')} style={{left:186, top:-400, width:22, height:18}}/>
      <Image source={require('./bosduzbucaq2.png')} style={{left:30,top:-360, width:327, height:56}}/>
      <Text style={{fontSize:14, left:35, top:-438, width:96, height:22}}>Name on card</Text>
      <Text style={{fontSize:22, color:'rgba(7, 18, 42, 1)', left:45, top:-430, width:139, height:30}}>Leslee Harron</Text>
      <Image source={require('./bosduzbucaq2.png')} style={{left:30,top:-380, width:327, height:52}}/>
      <Text style={{fontSize:22, color:'rgba(7, 18, 42, 1)', left:45, top:-420, width:215, height:26}}>4242 4242 4242 4242</Text>
      <Text style={{fontSize:14, left:35, top:-480, width:91, height:16}}>Card number</Text>
      <Image source={require('./bosduzbucaq.png')} style={{left:33,top:-375, width:150, height:55}}/>
      <Text style={{fontSize:14, left:35, top:-455, width:73, height:22}}>Expiry date</Text>
      <Text style={{fontSize:20, color:'rgba(7, 18, 42, 1)', left:45, top:-440, width:55, height:22}}>04/22</Text>
      <Image source={require('./bosduzbucaq.png')} style={{left:200,top:-475, width:155, height:56}}/>
      <Text style={{fontSize:14, left:205, top:-550, width:31, height:22}}>CVC</Text>
      <Text style={{fontSize:20, color:'rgba(7, 18, 42, 1)', left:210, top:-540, width:35, height:22}}>474</Text> 
      <View style={{backgroundColor:'rgba(7, 18, 42, 1)', left:30, top:-490, width:327, height:56 }}></View>
      <Text style={{fontSize:22, color:'white', left:130, top:-535, width:130,height:24}}>Use this card</Text>


    </SafeAreaView>
  );

  };*/

export default App

