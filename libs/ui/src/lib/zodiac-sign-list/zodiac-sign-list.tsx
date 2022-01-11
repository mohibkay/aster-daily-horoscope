// @ts-nocheck
import {
  AdhZodiacSignItem,
  AdhZodiacSignList,
} from '@aster-daily-horoscope/models';
import React from "react"
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';


import {
  ZodiacSignListProps,
  mapDispatchToProps,
} from './zodiac-sign-list.props';

export function ZodiacSignList({ setUserZodiacSignItem }: ZodiacSignListProps) {
  const navigation = useNavigation();
  const keyExtractor = (item: AdhZodiacSignItem) => item.zodiacSign;
  const zodiacListItemPress = (item: AdhZodiacSignItem) => {
    navigation.navigate('Horoscope Card')
    setUserZodiacSignItem(item)
  } 

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={AdhZodiacSignList}
      renderItem={({ item }) => (
        <ListItem
        onPress={() => zodiacListItemPress(item)}
         bottomDivider hasTVPreferredFocus={undefined} tvParallaxProperties={undefined}>
          <Icon name={item.icon} />
          <ListItem.Content>
            <ListItem.Title>{item.zodiacSign}</ListItem.Title>
          </ListItem.Content>
          {/* @ts-ignore */}
          <ListItem.Chevron />
        </ListItem>
      )}
    />
  );
}

export const ZodiacSignListContainer = connect(
  null,
  mapDispatchToProps
)(ZodiacSignList);