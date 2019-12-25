# react-i18next-provider
> I18next provider for next.

## installation
```shell
npm install -S @feizheng/react-i18next-provider
```
## properties
| property    | type | description |
| ----------- | ---- | ----------- |
| className   | -    | -           |
| value       | -    | -           |
| onChange    | -    | -           |
| resources   | -    | -           |
| i18nOptions | -    | -           |
| children    | -    | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-i18next-provider/dist/style.scss";

  // customize your styles:
  $react-i18next-provider-options: ()
  ```
2. import js
  ```js
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
  ```

## documentation
- https://afeiship.github.io/react-i18next-provider/


## resources
- https://github.com/i18next/react-i18next
- https://github.com/i18next/react-i18next/blob/master/src/I18nextProvider.js
- https://react.i18next.com/latest/translation-render-prop
