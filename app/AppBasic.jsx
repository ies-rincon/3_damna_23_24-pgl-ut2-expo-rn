import { Image } from "expo-image";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
const handleButtonPress = () => alert("Button pressed!");

export default ({ onLoadRouter }) => (
  <View style={styles.container}>
    <Text style={styles.text}>¡¡¡¡ Hello World 3º DAM - PGL !!!!</Text>
    <Image
      style={styles.image}
      source="https://res.cloudinary.com/practicaldev/image/fetch/s--H6L3JDpH--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://repository-images.githubusercontent.com/65750241/79017180-d4ce-11e9-9955-3f0a7be00c7a"
      placeholder={blurhash}
      transition={1000}
    />
    <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
      <Text style={styles.buttonText}>Alerta</Text>
    </TouchableOpacity>
    <Button title="Activar App con Navegación" onPress={onLoadRouter} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
  },
  image: {
    backgroundColor: "#0553",
    marginVertical: 10,
    height: 125,
    width: 250,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
