import { React } from "react";
import { Button, View, Text } from "react-native";
import { useUnit } from "effector-react";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles.tsx";
import PieSlice from "../components/PieSlice";
import Pie from "../components/Pie"
import {$naps, setNaps, addNap, removeNap } from '../store'
import AsyncStorage from '@react-native-async-storage/async-storage';



function Schedule() {  
  const navigation = useNavigation();
  const [naps] = useUnit([$naps]);

  const currentDate = new Date(); 
  const [hours, mins] = [currentDate.getHours(), currentDate.getMinutes()];
  const slices = naps.map( (nap) =>
                                 { return {popupText: nap.time,
                                           rotation: (nap.time[0] * 60 + nap.time[1]) / 1440 * 360 + (((nap.duration[0] * 60 + nap.duration[1]) / 1440) * 360) / 2,
                                           angle: ((nap.duration[0] * 60 + nap.duration[1]) / 1440) * 360 }
                                           } 
                                     )
   slices.push( {angle: 0, rotation: (hours * 60 + mins) / 1440 * 360, color: "green"} )

  const minutesToSleep = naps.reduce( (acc, current) => acc + current.duration[0] * 60 + current.duration[1], 0 );
  return (
    <View
      style={{ flex: 1, alignItems: "center", gap: 30, paddingTop: 60 }}
    >
    <Text style={{fontSize: 45, fontWeight: 900, color: "#000"}}>My schedule</Text>
         <Pie slices={
            slices
                }/> 
            <Text style={{fontSize: 20}}>Total sleeping time: { (minutesToSleep / 60) > 1 && Math.floor(minutesToSleep / 60) + "h" } {minutesToSleep % 60 + "m"}</Text>
      <Button
        onPress={() => navigation.navigate("Edit schedule")}
        title="Edit schedule"
      ></Button>
    </View>
  );
}

export default Schedule;
