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
  constructor(){
    super();
    this.state = {
      TranslateText: '',
      language: 'ru' //default language must be set according to yandex api
    }

  }

  selectLanguage(lang) {
    this.setState({language: lang}, () => {
      console.log(lang);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <LanguageSelect language={this.state.language} onSelect={this.selectLanguage.bind(this)}/>
        <TranslateInput />
        <TranslateOutput />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
