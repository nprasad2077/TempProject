import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {View, Text, Button, ScrollView} from 'react-native';
import tw from 'twrnc';
import CustomButton from '../components/CustomButton';
import axios from 'axios';

const StyledView = styled.View`
  background-color: papayawhip;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const query = `
query {
  playerTotals(name: "LeBron James", ordering: "-season") {
    playerName
    position
    season
    team
    games
  }
}`;

const url = 'https://nbaapi.com/graphql/';

function TestScreen({navigation}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .post(url, {query})
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <StyledView>
      <ScrollView>
        <Text style={tw `text-2xl font-semibold text-center p-4`}>Test Screen</Text>
        <View style={tw`m-6`}>
          <CustomButton
            title="Go Back"
            style={tw`m-2`}
            onPress={() => navigation.goBack()}
          />
        </View>
        {data && (
          <View style={tw`p-4`}>
            <Text style={tw`text-lg`}>Response Data:</Text>
            <Text>{JSON.stringify(data.data.playerTotals)}</Text>
          </View>
        )}
      </ScrollView>
    </StyledView>
  );
}

export default TestScreen;
