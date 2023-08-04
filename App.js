import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import TasksScreen from './screens/TasksScreen';
import GetAllTaskslist from './screens/GetAllTaskslist';
import TaskListDetailsScreen from './screens/TaskListDetailsScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Nayyar Tech" component={AppScreen} />
        {/* <Stack.Screen name="Tasks List" component={TasksScreen} /> */}
        <Stack.Screen name="Tasks List" component={GetAllTaskslist} />
        {/* <Stack.Screen name="Tasks List" component={TasksListScreen} /> */}
        <Stack.Screen name="Tasks" component={TaskListDetailsScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AppScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo Application</Text>
      <Button
        title="Go to Task list Screen"
        onPress={() => navigation.navigate('Tasks List')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;