import { StyleSheet, Text, View } from 'react-native'
import Meal from '../models/meal';

type Props = {
    meal: Meal,
};

export default function MealDetails({ meal }: Props): JSX.Element {
    return (
        <View style={ styles.details }>
            <Text style={ styles.detailText }>{ meal.duration }m</Text>
            <Text style={ styles.detailText }>{ meal.complexity.toUpperCase() }</Text>
            <Text style={ styles.detailText }>{ meal.affordability.toUpperCase() }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailText: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});
