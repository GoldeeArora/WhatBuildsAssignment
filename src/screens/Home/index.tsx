import { View, Text,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import QRCodeScanner from 'react-native-qrcode-scanner';
import WebView from 'react-native-webview';

export default function Home() {
    const [scanning,setScanning] = useState<Boolean>(false);
    const [link,setLink] = useState<string>('');
    const [loader,setLoader] = useState<Boolean>(false);
  return (
    // < style={styles.container}>
    // <View style={styles.container}>
    <>
        {
          scanning ? 
          (
            link === '' ? (
              <QRCodeScanner
              onRead={({ data }) => {
                console.log(data)
                setLoader(true);
                setLink(data);
              }}
              // reactivate={true}
              // reactivateTimeout={500}
              />
              
              )
              :
              (
                
                <WebView source={{ uri: link }} style={{ flex: 1 }} />
                )
                )
                :
                
                (
                  <View style={styles.container}>
                    
                  <TouchableOpacity onPress={()=>setScanning(true)} style={styles.button}>
      <Text style={styles.buttonText}>Start Scanning</Text>
        </TouchableOpacity>
                  </View>
)
}
</>
// </View>

  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
        
    },
    button:{
        // flex:1,
        backgroundColor: '#007bff',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 5,
        // width:"50%",
        // height:"25%"
    },
    buttonText:{
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    }
})