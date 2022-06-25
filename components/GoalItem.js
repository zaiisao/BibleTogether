import React from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class GoalItem extends React.Component {
  render() {
    let books = this.props.books;
    let numberOfChapters = this.props.numberOfChapters;
    return (
      <View>
        <Text>{numberOfChapters} chapters of {books}</Text>
      </View>
    )
  }
}
