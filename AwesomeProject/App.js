import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, TouchableOpacityBase } from 'react-native';
export const ButtonPersonalized = ({name, action}) => {
  return (
    <TouchableOpacity onPress={action} style={styles.button_st}>
      {name}
      </TouchableOpacity>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text >Ecran1</Text>
      <TextInput placeholder="Ecrir ici" style={styles.input_colors}/>
      <TouchableOpacity onPress={() => {
    console.log('bonjour');
  }} style={styles.button_st}>Press moi</TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_colors: {
    border: "2px solid #00ffbb",
    borderRadius: "4px",
    backgroundColor: "#00ffbb",
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_st : {
    border: "2px solid #fff",
    borderRadius: "4px",
    backgroundColor: "#e89999",
    alignItems: 'center',
    justifyContent: 'center',
  }
});
