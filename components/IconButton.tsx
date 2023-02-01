import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
    icon: 'star'|'star-outline',
    size: number,
    color: string,
    onPress: () => void,
};

export default function IconButton({ icon, size, color, onPress }: Props): JSX.Element {
    return (
        <Pressable style={({pressed}) => pressed && styles.pressed} onPress={ onPress }>
            <Ionicons name={ icon } size={ size } color={ color } />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    },
});
