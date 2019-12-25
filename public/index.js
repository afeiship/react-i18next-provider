import ReactI18nextProvider from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';
import i18next from 'i18next';

class App extends React.Component {
  state = {
    lang: 'zhCn',
    resources: {
      zhCn: {
        translation: require(`./assets/locale/zh_CN.json`)
      },
      zhTw: {
        translation: require(`./assets/locale/zh_TW.json`)
      },
      en: {
        translation: require(`./assets/locale/en.json`)
      }
    }
  };

  onLangChange = (inEvent) => {
    console.log('lang:', inEvent.target.value);
  };

  onSelectChange = (inEvent) => {
    const { value } = inEvent.target;
    this.setState({ lang: value });
  };

  render() {
    const { lang } = this.state;
    return (
      <div className="app-container">
        <select value={lang} onChange={this.onSelectChange}>
          <option value="zhCn">Chinese</option>
          <option value="zhTw">Chinese TW</option>
          <option value="en">English</option>
        </select>
        <ReactI18nextProvider
          value={lang}
          onChange={this.onLangChange}
          resources={this.state.resources}>
          {() => {
            return (
              <p>
                {i18next.t('hello')} - {i18next.t('world')}
              </p>
            );
          }}
        </ReactI18nextProvider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
