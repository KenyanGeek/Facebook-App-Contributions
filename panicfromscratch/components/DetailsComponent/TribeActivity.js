import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import { tribes } from '../data/dataArrays';
import { getNumberOfRecipes } from '../data/MockDataAPI';
import { useNavigation } from '@react-navigation/native';




export default function HomeScreen() {

  const navigation = useNavigation();

  onPressTribe = item => {
    const title = item.name;
    const tribe = item;

    navigation.navigate("Add", { tribe, title });
  };
  
  renderTribe = ({ item }) => (
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPresstribe(item)}>
          <View style={styles.tribesItemContainer}>
            <Image style={styles.tribesPhoto} source={{ uri: item.photo_url }} /> 
            <Text style={styles.tribesName}>{item.name} Tribe </Text>
            <Text style={styles.tribesInfo}>{getNumberOfRecipes(item.id)} recipes</Text>
          </View>
        </TouchableHighlight>
      );

  
  return (
    <View>
        <FlatList
          data={tribes}
          renderItem={this.renderTribe}
          keyExtractor={item => `${item.id}`}
          horizontal={true}
        />
      </View>
  );

  }
