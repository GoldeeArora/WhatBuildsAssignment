import { View, Text, StyleSheet,TouchableOpacity,ActivityIndicator,Alert } from 'react-native'
import React,{useState} from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

export default function Login() {
    const navigation = useNavigation();
    const [loader,setLoader] = useState<Boolean>(false);
    const [countryCode,setCountryCode] = useState<string>("+91");
    const [phnNo,setPhnNo] = useState<string>("");
    async function signInWithPhoneNumber(phoneNumber: string) {
        try{

            setLoader(true);
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
            setLoader(false);
            navigation.navigate("OTP",{confirm: confirmation})
        }
        catch(e: any | {message: string}){
            setLoader(false);
            Alert.alert(e.message);
            console.log(e.message);
        }

          }
    const sentOtp = ()=>{
        const createPhnNo = countryCode + "-" + phnNo;
        signInWithPhoneNumber(createPhnNo)
    }
  return (
    <>
    {
        loader
        
        ?
        
            (
                <ActivityIndicator size="medium" color="007bff" style={{flex:1}}/>
                ) 
                : 
                
                (
                    <View style={styles.container}>
        <><Text style={styles.text}>Enter your mobile Number</Text><View style={styles.textInputContainer}>
          <TextInput value={countryCode} style={styles.textInput} onChangeText={(e) => setCountryCode(e)} textAlign='center' />
          <Text style={styles.subText}>-</Text>
          <TextInput
              value={phnNo}
              onChangeText={(e) => setPhnNo(e)}
              style={[styles.textInput, styles.phnTextInput]}
              keyboardType="phone-pad" // This will show the numeric keypad on mobile devices
              maxLength={10} />
      </View><TouchableOpacity style={styles.button} onPress={sentOtp}>
              <Text style={styles.buttonText}>Send OTP</Text>
          </TouchableOpacity></>
        </View>
        )
    }
    </>
    )
    }
    const styles = StyleSheet.create({
        container:{
            // backgroundColor:'red',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        gap:35,


    },
    text:{
        // backgroundColor:'white',
        fontSize: 20,
    },
    textInputContainer:{
        // backgroundColor: 'green',
        flexDirection:'row',
        width: "90%",
        alignItems:"center",
        justifyContent:'space-between'
    },
    textInput:{
        width:"18%",
        borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,

        // paddingLeft: "15%",
    },
    phnTextInput:{
        width: "80%",
        borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    },
    subText:{
        fontSize: 25,
        padding: 5,
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