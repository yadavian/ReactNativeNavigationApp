
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName='DrawerTwoScreen'>
      <Drawer.Screen name="DrawerOneScreen" component={DrawerOneScreen} />
      <Drawer.Screen name="DrawerTwoScreen" component={DrawerTwoScreen} />
    </Drawer.Navigator>
  );
}



function DrawerOneScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>DrawerOneScreen</Text>
    </View>
  );
}

function DrawerTwoScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>DrawerTwoScreen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabOneScreen" component={TabOneScreen} />
      <Tab.Screen name="TabTwoScreen" component={TabTwoScreen} />
    </Tab.Navigator>
  );
}

function TabOneScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>TabOne</Text>
    </View>
  );
}

function TabTwoScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>TabTwo</Text>
    </View>
  );
}

function FirstScreen({ navigation }) {
  const id = 50;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Third" onPress={() => navigation.push('Third', {
        id: id
      })} />
      <Button title="Go to Second" onPress={() => navigation.navigate('Second')} />
      <Button title="Go to HomeTab" onPress={() => navigation.navigate('HomeTab')} />
      <Button title="MyDrawer Component" onPress={() => navigation.navigate('MyDrawer')} />
    </View>
  );
}

function SecondScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go to First" onPress={() => navigation.push('First')} />
      <Button title="Go to Third" onPress={() => navigation.navigate('Third')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function ThirdScreen({ route, navigation }) {
  const { id } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen Id =  {id}</Text>
      <Button title="Go to First" onPress={() => navigation.push('First')} />
      <Button title="Go to Second" onPress={() => navigation.navigate('Second')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First" screenOptions={{
        headerStyle: {
          backgroundColor: '#f45188',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="First" component={FirstScreen} initialParams={{ id: 20 }}
          options={({ navigation, route }) => ({
            headerTitle: (props) => <Button title="Update count" />,
            // Add a placeholder button without the `onPress` to avoid flicker
            headerRight: () => (
              <Button title="Update count" />
            ),
          })} />

        <Stack.Screen name="Second" component={SecondScreen} options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

        <Stack.Screen name="Third" component={ThirdScreen} />

        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen name="MyDrawer" component={MyDrawer} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;