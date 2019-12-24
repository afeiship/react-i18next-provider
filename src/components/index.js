import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import i18next from 'i18next';

const CLASS_NAME = 'react-i18next-provider';
const I18nContext = React.createContext();

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    children: PropTypes.func,
    resources: PropTypes.object.isRequired,
  };

  static defaultProps = {
    value: 'en'
  };

  constructor(inProps) {
    super(inProps);
    this.state = { loaded: false };
  }

  componentDidMount() {
    const { resources, value } = this.props;
    i18next.init(
      {
        lng: value,
        debug: true,
        fallbackLng: 'en',
        resources
      },
      () => {
        this.setState({ loaded: true });
      }
    );
  }

  render() {
    const { className, resources, children, value, ...props } = this.props;
    const { loaded } = this.state;

    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        {loaded &&
          React.createElement(
            I18nContext.Provider,
            { value: { i18next } },
            children(i18next)
          )}
      </div>
    );
  }
}
