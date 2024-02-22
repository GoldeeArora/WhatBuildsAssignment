// import React, { useState, useEffect } from 'react';
// import { Button, TextInput,Alert } from 'react-native';
// import auth from '@react-native-firebase/auth';

// const App = ()=> {
//   // If null, no SMS has been sent
//   const [confirm, setConfirm] = useState<any>(null);
  
//   // verification code (OTP - One-Time-Passcode)
//   const [code, setCode] = useState<any>('');

//   // // Handle login
//   // function onAuthStateChanged(user: any) {
//   //   if (user) {
//   //     // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
//   //     // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
//   //     // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
//   //     // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
//   //   }
//   // }

//   // useEffect(() => {
//   //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//   //   return subscriber; // unsubscribe on unmount
//   // }, []);

//   // Handle the button press
//   async function signInWithPhoneNumber(phoneNumber: string) {
//     console.log("is method getting called")
//     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//     console.log(confirmation);
//     setConfirm(confirmation);
//   }

//   async function confirmCode() {
//     try {
//       await confirm.confirm(code).then(()=>{
//         console.log("Code is correct")
//       });
//     } catch (error) {
//       Alert.alert('Invalid code.');
//     }
//   }

//   if (!confirm) {
//     return (
//       <Button
//         title="Phone Number Sign In"
//         onPress={() => signInWithPhoneNumber('+91-6306653440')}
//       />
//     );
//   }

//   return (
//     <>
//       <TextInput value={code} onChangeText={text => setCode(text)} />
//       <Button title="Confirm Code" onPress={() => confirmCode()} />
//     </>
//   );
// }
// export default App;

// import { View, Text, Alert } from 'react-native';
// import React, { useState } from 'react';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import WebView from 'react-native-webview';

// export default function App() {
//   const [link, setLink] = useState<string>('');

//   return (
//     <>
      
//       {link === '' ? (
//         <QRCodeScanner
//         onRead={({ data }) => {
//           setLink(data);
//         }}
//         reactivate={true}
//         reactivateTimeout={500}
//       />
        
//       )
//     :
//     (
//       <WebView source={{ uri: link }} style={{ flex: 1 }} />
//     )
//     }
//     </>
//   );
// }

import { View, Text } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from "./screens/Login"
import OTP from './screens/OTP';
import Home from './screens/Home';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="OTP" component={OTP} />
    <Stack.Screen name="Home" component={Home} />
    {/* <Stack.Screen name="Notifications" component={Notifications} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} /> */}
  </Stack.Navigator>
    </NavigationContainer>
  )
}