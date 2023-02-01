import { StyleSheet, Text, View } from 'react-native'
import { Colours } from '../assets/styles/Colours';

type Props = {
    children: string,
};

export default function Subtitle({ children }: Props): JSX.Element {
    return (
        <View style={ styles.subtitleContainer }>
            <Text style={ styles.subtitle }>{ children }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    subtitleContainer: {
        marginHorizontal: 24,
        marginVertical: 4,
        padding: 6,
        borderBottomWidth: 2,
        borderBottomColor: Colours.raspberry,
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: Colours.raspberry,
    },
});
