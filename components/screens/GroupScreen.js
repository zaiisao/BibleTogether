import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import GoalItem from '../GoalItem.js';

export default class GroupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: {
        items: [
          { book: "book_PSA", numberOfChapters: 5, },
          { book: "book_PRO", numberOfChapters: 1, },
          { book: "any", numberOfChapters: 5, },
        ]
      },
    };

    this.onStartPress = function() {
      const navigation = this.props.navigation;
      const goals = this.state.goals;
      navigation.navigate("Bible", {
        goals: goals,
      });
    }
  }

  render() {
    const goal = this.state.goal;

    let goalItems = [];

    for (let i = 0; i < goal.items.length; i++) {
      goalItems.push(
        <GoalItem
          books={goal.items[i].book}
          numberOfChapters={goal.items[i].numberOfChapters}
          key={i}
        />
      );
    }

    return (
      <ScrollView style={{ flex: 1 }}>
        <Text>오늘의 목표</Text>
        { goalItems }

        <Button
          onPress={() => this.onStartPress()}
          title="Start"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </ScrollView>
    );
  }
}
