import { createStore, createEvent } from "effector";
import { useStore, useEvent } from "effector-react";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const $naps = createStore([]); // [ {id: number, time: [number, number], duration: [number, number]} ]
export const setNaps = createEvent();
export const addNap = createEvent();
export const removeNap = createEvent();

$naps.watch( (state) => {AsyncStorage.setItem('naps', JSON.stringify(state)); console.log(state)} ); // тут же менять алармы

$naps.on( setNaps, (state, newNaps) => newNaps )
.on(addNap, (state, newNap) => [...state, newNap] )
.on(removeNap, (state, napIdToRemove) => state.filter( (item) => item.id !== napIdToRemove ))
