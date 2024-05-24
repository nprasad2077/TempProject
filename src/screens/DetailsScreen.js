import React from 'react';

import {View, Text, Button} from 'react-native';
import CustomButton from '../components/CustomButton';
import tw from 'twrnc';

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={tw`text-4xl font-bold text-center px-4`}>
        Hi Priya
      </Text>
      <Text style={tw`text-sm text-slate-300 font-bold text-center px-4 my-2`}>
        Android is Better
      </Text>

      <View style={tw `m-6`}>
        <CustomButton title='Go Back' style='m-2' onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

export default DetailsScreen;
