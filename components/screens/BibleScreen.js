import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default class BibleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };

    this.onPress = function() {
      this.setState({ text: "" });
    }
  }

  componentDidMount(oldProps, oldState) {
    this.setState({ text: "loading" });
    fetch(`https://api.esv.org/v3/passage/text/?q=${'Genesis 1'}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Token 3a3655e4b73e3ab6193c26f0f540a3e33b134602',
      }
    }).then(res => res.json())
      .then(
        (data) => {
          this.setState({ text: data.passages[0].trim() })
        },
        (error) => {
          this.setState({ text: "error" + JSON.stringify(error) })
        }
      );
  }

  render() {
    const goals = this.props.goals;
    const text = this.state.text;

    return (
      <ScrollView style={{ flex: 1 }}>
        <Text>{text}</Text>
        <Button
          onPress={() => this.onPress()}
          title="Start"
        />
      </ScrollView>
    );
  }
}
