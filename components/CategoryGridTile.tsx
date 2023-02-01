import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Colours } from '../assets/styles/Colours';

type Props = {
    title: string,
    color: string,
    onPress: () => void,
};

export default function CategoryGridTile({ title, color, onPress }: Props): JSX.Element {
    return (
        <View style={ styles.gridItem }>
            <Pressable
                style={ ({pressed}) => [styles.button, { backgroundColor: color }, pressed ? styles.buttonPressed : null] }
                onPress={ onPress }
            >
                <View style={ styles.innerContainer }>
                    <Text style={ styles.title }>{ title }</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
    },
    button: {
        flex: 1,
        borderRadius: 8,
        elevation: 5,
        shadowColor: Colours.black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.3,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});
