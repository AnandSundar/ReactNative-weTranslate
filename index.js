import { AppRegistry } from 'react-native';
import App from './App';
import LanguageSelect from './app/components/LanguageSelect/LanguageSelect';
import TranslateOutput from './app/components/TranslateOutput/TranslateOutput';
import TranslateInput from './app/components/TranslateInput/TranslateInput';

AppRegistry.registerComponent('LanguageSelect', () => LanguageSelect);
AppRegistry.registerComponent('TranslateOutput', () => TranslateOutput);
AppRegistry.registerComponent('TranslateInput', () => TranslateInput);
AppRegistry.registerComponent('weTranslate', () => App);
