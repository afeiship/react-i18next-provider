import ReactAntI18n from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';
import i18next from 'i18next';

class App extends React.Component {
  state = {
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

  render() {
    return (
      <div className="app-container">
        <ReactAntI18n value="zhTw" resources={this.state.resources}>
          {(value) => {
            return (
              <p>
                {i18next.t('hello')} - {i18next.t('world')}
              </p>
            );
          }}
        </ReactAntI18n>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
