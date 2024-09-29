import { React } from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import styles, { blue } from "../styles.tsx";


const Log = () => (
  <View style={{ flex: 1 }} >
    <TouchableOpacity
              style={{backgroundColor: "white", position: "absolute", zIndex: 2, right: 30, bottom: 30, width: 70, height: 70, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 35, elevation: 4}}
              onPress={() => {
                console.log("тут ничево нет")
              }}

            >
            <Icon name="plus" size={30} color={blue}/>
            </TouchableOpacity>
  </View>
);

export default Log;