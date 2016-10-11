import React, { Component } from 'react';
import {ScrollView,View, Text} from 'react-native';

import Emojicon from 'react-native-emojicon';
import Mapper from 'react-native-emojicon/mapper';

class App extends Component {
  render() {
    return (
      <View
        style={{
        flex: 1,
        paddingTop: 20,
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <View
          style={{
            paddingTop: 20,
            paddingBottom: 40
          }}
        >
          <Text><Emojicon name='speedboat' />React Native Emojicon</Text>
        </View>
        <ScrollView
          style={{
            flex: 1
          }}
        >
        {
          Object.keys(Mapper).map((emojiName, i) => {
            return (
              <View 
                key={i} 
                style={{
                  flex: 1
                }}
              >
                <Emojicon name={emojiName} size={80}/>
              </View>
            );
          })
        }
        </ScrollView>
      </View>
    );
  }
}

export default App;