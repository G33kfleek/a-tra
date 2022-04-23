import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert,Button } from 'react-native';
const Mpesa = require('mpesa-node')
const mpesaApi = new Mpesa({ consumerKey: 'PMF2qGOtr5aYyJGeJrhIi6V8o4eq0QxC', consumerSecret: 'CcA7IeLMuERtSBJQ' })
// another instance
// const instance = new Mpesa({ consumerKey: 'test', consumerSecret: 'test', environment: 'production' })
const { shortCode } = mpesaApi.configs
var m_node = 2









export default function App() {

  const createTwoButtonAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
  return (
    <View style={styles.container}>
        <View style={styles.button_test}>
          <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />
       </View>
      <Text>
        mpesaApiss
        text{m_node}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    button_test: {
      flex: 1,
      justifyContent: "space-around",
      alignItems: "center"
  },
});
