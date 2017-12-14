import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LanguageSelect from './app/components/LanguageSelect/LanguageSelect';
import TranslateOutput from './app/components/TranslateOutput/TranslateOutput';
import TranslateInput from './app/components/TranslateInput/TranslateInput';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <LanguageSelect />
        <TranslateInput />
        <TranslateOutput />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
