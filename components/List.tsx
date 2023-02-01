import { StyleSheet, Text, View } from 'react-native';
import {Colours} from '../assets/styles/Colours';

type Props = {
    items: Array<string>,
};

export default function List({ items }: Props): JSX.Element {
    return (
        <>
            {
                items.map((item: string) =>
                    <View key={ item } style={ styles.listItem }>
                        <Text style={ styles.text }>{ item }</Text>
                    </View>
                )
            }
        </>
    );
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 7,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginHorizontal: 24,
        marginVertical: 4,
        backgroundColor: Colours.white,
    },
    text: {
        fontSize: 12
    },
});
