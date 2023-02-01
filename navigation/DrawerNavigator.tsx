import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Colours } from '../assets/styles/Colours';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from '../screens/CategiriesScreen';
import FavouritesScreen from '../screens/FavouritesScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(): JSX.Element {
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: Colours.raspberry },
            headerTintColor: Colours.white,
            sceneContainerStyle: { backgroundColor: Colours.vanilla },
            drawerActiveBackgroundColor: Colours.raspberry,
            drawerActiveTintColor: Colours.white,
            drawerStyle: { backgroundColor: Colours.vanilla },
            drawerInactiveTintColor: Colours.raspberry
        }}>
            <Drawer.Screen name='Categories' component={ CategoriesScreen } options={{
                drawerIcon: ({color, size}) => <Ionicons name='list' color={color} size={size} />,
                title: 'All Categories'
            }} />
            <Drawer.Screen name='Favourites' component={ FavouritesScreen } options={{
                drawerIcon: ({color, size}) => <Ionicons name='star' color={color} size={size} />,
            }} />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({});
