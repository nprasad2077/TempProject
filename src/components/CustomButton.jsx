// src/components/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc';

const CustomButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[tw`bg-blue-500 py-2 px-4 rounded`, style]}
      onPress={onPress}
    >
      <Text style={tw`text-white text-center text-lg`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
