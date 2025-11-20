import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  Image,
  Button,
} from "react-native";
import test from "./styled.js";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(6);
  console.log(value);

  const increase = () => {
    setValue((prev) => prev + 1);
  };

  const decrease = () => {
    setValue((prev) => prev - 1);
  };
  return (
    // <ScrollView horizontal={true}>
    //   <View style={styles.container}>
    //     <StatusBar backgroundColor="red" barStyle="dark-content" />

    //     <Text style={[styles.box, styles.boxOne]}>CLASS ONE</Text>
    //     <Text style={[styles.box, styles.boxTwo]}>CLASS TWO</Text>
    //     <Text style={[styles.box, styles.boxThree]}>CLASS THREE</Text>
    //   </View>
    // </ScrollView>
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <TextInput placeholder="Hello" style={styles.input} />
        <TextInput
          style={styles.textarea}
          multiline={true}
          numberOfLines={5}
          placeholder="Write your message Please..."
          value={value}
          onChangeText={(val) => setValue(val)}
        />
        <TextInput
          style={styles.input}
          maxLength={6} //
          placeholder="Type heresjakjaskjkasj..."
        />
        <Image
          source={require("./assets/favicon.png")}
          style={{ hieght: 200, width: 200 }}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          gap: 30,
        }}
      >
        <Button title="+" onPress={() => setValue((prev) => prev + 1)} />

        <Text>{value}</Text>
        <Button title="-" onPress={() => setValue((prev) => prev - 1)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 200,

    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    gap: 100,

    // flexDirection: "row",
  },
  box: {
    fontSize: 20,
    color: "black",
    width: 100,
    // flex: 1,
    // height: "",
  },
  boxOne: {
    backgroundColor: "red",
  },
  boxTwo: {
    backgroundColor: "blue",
  },
  boxThree: {
    backgroundColor: "pink",
  },
  input: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: "yellow",
    color: "white",
  },
});
