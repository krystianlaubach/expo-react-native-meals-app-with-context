import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
    navigation: NativeStackNavigationProp<any>,
};

export default function CategoriesScreen({ navigation }: Props): JSX.Element {
    const keyExtractor = (category: Category): string => {
        return category.id;
    };

    const renderItem = (itemData: ListRenderItemInfo<Category>): JSX.Element => {
        const category: Category = itemData.item;

        const pressHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryId: category.id,
                categoryTitle: category.title,
            });
        };

        return (
            <CategoryGridTile title={ category.title } color={ category.color } onPress={ pressHandler } />
        );
    };

    return (
        <FlatList
            data={ CATEGORIES }
            keyExtractor={ keyExtractor }
            renderItem={ renderItem }
            numColumns={2}
        />
    );
}

const styles = StyleSheet.create({

});
