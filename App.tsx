import {StyleSheet, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colours } from './assets/styles/Colours';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import DrawerNavigator from './navigation/DrawerNavigator';

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
    return (
        <>
            <StatusBar style='light' />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: { backgroundColor: Colours.raspberry },
                    headerTintColor: Colours.white,
                    contentStyle: { backgroundColor: Colours.vanilla }
                }}>
                    <Stack.Screen name='DrawerNavigator' component={ DrawerNavigator } options={{ headerShown: false }} />
                    <Stack.Screen name='MealsOverview' component={ MealsOverviewScreen } />
                    <Stack.Screen name='MealDetails' component={ MealDetailsScreen } />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({

});
