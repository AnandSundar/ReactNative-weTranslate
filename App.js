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

  translateText(text) {
      //query the api to translate word
      fetch('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20171214T032908Z.d7c982b93716a859.8b81cb08bb7b160a3d01da62283e3ef8e71b96cc&lang='+this.state.language+'&text='+text).then((response) => {
        let res = JSON.parse(response._bodyText);
        this.setState({translatedText: res.text[0]});
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <LanguageSelect language={this.state.language} onSelect={this.selectLanguage.bind(this)}/>
        <TranslateInput onSubmit={this.translateText.bind(this)} />
        <TranslateOutput translation={this.state.translatedText} />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
