import React from 'react';

import {View, Text, Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to TestScreen"
        onPress={() => navigation.navigate('TestScreen')}
      />
    </View>
  );
}

export default HomeScreen;
