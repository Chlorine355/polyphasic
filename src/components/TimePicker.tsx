import DatePicker from "react-native-date-picker";
import { useUnit } from "effector-react";
import { React, useState, useEffect } from "react";
import { $naps, setNaps, addNap, removeNap } from "../store";
import { View, Button, TouchableOpacity, Text } from "react-native";

export function TimePicker(props) {
  const [naps] = useUnit([$naps]);

  const { time = [12, 0], duration = [0, 30], napId = 0, mode = 'time', textStyle = {}, containerStyle = {} } = props;
  const [date, setDate] = useState(
    new Date(
      2020,
      12,
      31,
      mode === "time" ? time[0] : duration[0],
      mode === "time" ? time[1] : duration[1],
      0
    )
  );
  const [open, setOpen] = useState(false);
  return (
    <View>
      <TouchableOpacity style={containerStyle}
        onPress={() => setOpen(!open)}><Text style={textStyle}>{date.toLocaleTimeString("ru-ru", {hour: "2-digit", minute: "2-digit"})}</Text></TouchableOpacity>
            <DatePicker
        modal
        open={open}
        date={date}
        mode="time"
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
          setNaps(
            naps.map((nap) =>
              napId === nap.id
                ? ( mode === 'time' ? { ...nap, time: [date.getHours(), date.getMinutes()] } : { ...nap, duration: [date.getHours(), date.getMinutes()] } )
                : nap
            )
          );
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
}
