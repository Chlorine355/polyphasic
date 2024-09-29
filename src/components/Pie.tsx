import styles from '../styles.tsx'
import {View, TouchableWithoutFeedback} from 'react-native';
import PieSlice from './PieSlice'


export default function Pie(props) {
    const {slices = []} = props;
    return (
        <View style={styles.pieCircle}>
            {slices.map( (slice, idx) => <PieSlice key={idx} angle={slice.angle} rotation={slice.rotation} color={slice.color} popupText={slice.popupText} />)}
      </View>)
      }