import React from 'react';
import { ExpoConfigView } from '@expo/samples';

import {

  AppRegistry, 
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Dimensions,
  ListView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


import { Card, ListItem, Button, Icon, Header } from 'react-native-elements';

// import Icon from 'react-native-vector-icons/FontAwesome';

const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
];


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={styles.container}>
        
		<Card title="Details">
		  {
		    users.map((u, i) => {
		      return (
		        <View key={i}>
		          <Image
		            resizeMode="cover"
		            source={{ uri: u.avatar }}
		          />
		          <Text>{u.name}</Text>
		        </View>
		      );
		    })
		  }
		</Card>

      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
