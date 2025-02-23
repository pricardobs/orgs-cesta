import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AddItemScreen from './src/screens/AddItemScreen';
import ItemDetailsScreen from './src/screens/ItemDetailsScreen';
import ViewItemsScreen from './src/screens/ViewItemsScreen';
import EditItemScreen from './src/screens/EditItemScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Início">
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Adicionar Item" component={AddItemScreen} />
        <Stack.Screen name="Detalhes do Item" component={ItemDetailsScreen} />
        <Stack.Screen name="Ver Itens" component={ViewItemsScreen} />
        <Stack.Screen name="Editar Item" component={EditItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}