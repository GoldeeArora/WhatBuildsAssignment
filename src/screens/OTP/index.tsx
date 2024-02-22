import { View, Text, StyleSheet, TouchableOpacity,Alert,ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react'
import OTPTextView from 'react-native-otp-textinput'
import { useNavigation, useRoute } from '@react-navigation/native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
export default function OTP() {
    const navigation = useNavigation();
    const [otp,setOtp] = useState<string>("");
    const [loader,setLoader] = useState<Boolean>(false);
    const route = useRoute<any>();
    let {confirm}= route.params;
    // confirm = JSON.parse(confirm);
    // console.log( confirm);
      async function confirmCode() {
    try {
      setLoader(true);
      await confirm.confirm(otp).then(()=>{
        setLoader(false);
        Alert.alert("Code is correct")
        navigation.navigate("Home");
      });
    } catch (error) {
      console.log(error.message)
      setLoader(false);
      Alert.alert('Invalid code.');
    }
  }

  return (
    <>
    {
      loader ?
      (
        <ActivityIndicator size={40} color="007bff" style={{flex:1}}/>
        )
        :
        
        (
          <View style={styles.container}>
      
      <OTPTextView inputCount={6} ref={(e)=>otp} handleTextChange={(e)=>setOtp(e)} tintColor="#007bff"></OTPTextView>
      <TouchableOpacity onPress={confirmCode} style={styles.button}>
      {/* <TouchableOpacity > */}
      <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      
      </View>
      )
    }
    </>
      )
    }
    const styles = StyleSheet.create({
      container:{
        // width: "100%",
        flex:1,
        alignItems:  "center",
        justifyContent: "center",
        gap: 50,
    },
    textInput:{
        color:"#007bff"
    },
    button:{
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,

    },
    buttonText:{
        color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    }
});