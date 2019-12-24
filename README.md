# react-i18next-provider
> I18next provider for next.

## installation
```shell
npm install -S @feizheng/react-i18next-provider
```
## properties
| property        | type | description |
| --------------- | ---- | ----------- |
| className       | -    | -           |
| value           | -    | -           |
| onChange        | -    | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-i18next-provider/dist/style.scss";

  // customize your styles:
  $react-i18next-provider-options: ()
  ```
2. import js
  ```js
  import ReactAntI18n from '../src/main';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

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
                  {value.t('hello')} - {value.t('world')}
                </p>
              );
            }}
          </ReactAntI18n>
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
