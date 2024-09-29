import { React, useState, useEffect, useRef } from "react";
import { useUnit } from "effector-react";
import { View, Text, Button, ScrollView, TouchableOpacity } from "react-native";
import { $naps, setNaps, addNap, removeNap } from "../store";
import {TimePicker} from '../components/TimePicker'
import Icon from 'react-native-vector-icons/FontAwesome6';


const EditSchedule = () => {
  const [naps] = useUnit([$naps]);
  const scrollViewRef = useRef();
  return (<View style={{flex: 1}}>
  <TouchableOpacity
          style={{backgroundColor: "white", position: "absolute", zIndex: 2, right: 30, bottom: 30, width: 70, height: 70, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 35, elevation: 4}}
          onPress={() => {
            addNap({ id: naps.length ? naps[naps.length - 1].id + 1 : 1, time: [12, 0], duration: [0, 30] });
            scrollViewRef.current?.scrollToEnd();
          }}

        >
        <Icon name="plus" size={30} color={"#2E5266"}/>
        </TouchableOpacity>
    <ScrollView contentContainerStyle={{display: "flex", gap: 10, padding: 10, paddingBottom: 130}} ref={scrollViewRef}>
      {naps.map((item) => {
        return (
          <View key={item.id} style={{display: "flex", flexDirection: "row", padding: 20, gap: 60, alignItems: "center", backgroundColor: "white", borderRadius: 15}}>
                <View style={{display: "flex", flexDirection: "row", gap: 10, alignItems: "center"}}>
                    <Icon name="clock" size={30} color={"#2E5266"}/>
                    <TimePicker mode='time' time={item.time} napId={item.id} textStyle={{fontSize: 25, color: "black"}}/>
                </View>

                                <View style={{display: "flex", flexDirection: "row", gap: 10, alignItems: "center"}}>

                <Icon name="hourglass-half" size={30} color={"#2E5266"}/>
                <TimePicker mode='duration' duration={item.duration} napId={item.id} textStyle={{fontSize: 20, color: "black"}}/>
                                </View>

            <TouchableOpacity style={{padding: 10, marginLeft: "auto"}}
              onPress={() => {
                removeNap(item.id);
              }}
            >
            <Icon name="trash-can" size={30} color={"#f64740"}/>
            </TouchableOpacity>
          </View>
        );
      })}
      <Text style={{paddingHorizontal: 40, paddingTop: 20, textAlign: "center"}}>
        {naps.length ? "Tap the time or duration to edit" : 'Tap "+" to add a nap' }
      </Text>
    </ScrollView>
    </View>
  );
};

export default EditSchedule;
