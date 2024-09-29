import {
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
    },
    pieCircle: {
        backgroundColor: "white",
        width: 300,
        height: 300,
        borderRadius: 150,
        overflow: "hidden",
    },
    pieSlice: {
        pointerEvents: "auto",
        backgroundColor: "transparent",
        width: 0,
        height: 0,
        borderTopWidth: 150,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
    },
    pieSliceButterfly: {
    height: 300,
    pointerEvents: "box-none",
    },
    pieSliceButterflyContainer: {
        pointerEvents: "box-none",
        transform: [{rotateZ: "180deg" }],
        position: "absolute",
        width: 300, height: 300,
        display: "flex", justifyContent: "center", alignItems: "center"
    }

});

export default styles;