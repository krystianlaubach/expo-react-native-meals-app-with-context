import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import Meal from '../models/meal';
import { Colours } from '../assets/styles/Colours';
import MealDetails from './MealDetails';

type Props = {
    meal: Meal,
    onPress: () => void,
};

export default function MealItem({ meal, onPress }: Props): JSX.Element {
    return (
        <View style={ styles.mealItem }>
            <Pressable style={ ({pressed}) => pressed ? styles.pressed : null } onPress={ onPress }>
                <View style={ styles.innerContainer }>
                    <Image source={{ uri: meal.imageUrl }} style={ styles.image } />
                    <Text style={ styles.title }>{ meal.title }</Text>
                    <MealDetails meal={ meal } />
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: Colours.white,
        elevation: 5,
        shadowColor: Colours.black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.3,
    },
    pressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
});
