import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
const Mpesa = require('mpesa-node')
const mpesaApi = new Mpesa({ consumerKey: 'PMF2qGOtr5aYyJGeJrhIi6V8o4eq0QxC', consumerSecret: 'CcA7IeLMuERtSBJQ' })
// another instance
// const instance = new Mpesa({ consumerKey: 'test', consumerSecret: 'test', environment: 'production' })
const { shortCode } = mpesaApi.configs
var m_node = 2
mpesaApi
    .c2bSimulate(
        254798362712,
        500,
        'h6dk0Ue2'
    )
    .then((result) => {
        m_node = 1
    })
    .catch((err) => {
        // retry?
    })
export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        mpesaApi
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
});
