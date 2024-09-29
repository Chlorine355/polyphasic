import styles, {blue} from '../styles.tsx'
import {View, TouchableWithoutFeedback} from 'react-native';


export default function PieSlice(props) {
    const {rotation = 0, angle = 0, popupText = "", color = blue} = props;
    // 30deg = 41 width
    // 45deg = 63 width
    // 72deg = 112 width
    // 90deg = 150 width
    // 120deg = 260 width
    function computeWidth(a) {
        if (a === 0) {
        return 1}
        result = 0.00017495349209423194 * a * a * a
        - 0.02167167388634538838 * a * a
        + 2.37853206667296035448 * a - 15.72316682976088486612;
        if (result >= 10) {
        return result } else return 10;
    }
    const width = computeWidth(angle);



    return (<View style={styles.pieSliceButterflyContainer}>
                            <View style={[styles.pieSliceButterfly, {transform: [{rotateZ: rotation + "deg"}]}]}>
                                <TouchableWithoutFeedback onPress={() => {if (popupText) {console.log(popupText)}}}>
                                    <View style={[styles.pieSlice, {borderTopColor: color, borderLeftWidth: width, borderRightWidth: width}]}/>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>)
}