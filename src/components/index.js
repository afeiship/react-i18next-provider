import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import i18next from 'i18next';

const CLASS_NAME = 'react-i18next-provider';

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    children: PropTypes.func,
    resources: PropTypes.object.isRequired,
    i18nOptions: PropTypes.object
  };

  static defaultProps = {
    value: 'en',
    onChange: noop
  };

  constructor(inProps) {
    super(inProps);
    this.state = { loaded: false };
  }

  shouldComponentUpdate(inProps) {
    const { value } = inProps;
    if (value !== this.props.value) {
      i18next.changeLanguage(value);
    }
    return true;
  }

  componentDidMount() {
    const { resources, value, i18nOptions } = this.props;
    const options = objectAssign(
      { lng: value, debug: true, fallbackLng: 'en', resources },
      i18nOptions
    );
    i18next.on('initialized', this.onI18nInitialized);
    i18next.on('languageChanged', this.onI18nLanguageChanged);
    i18next.init(options);
  }

  onI18nInitialized = (inEvent) => {
    this.setState({ loaded: true });
  };

  onI18nLanguageChanged = (inEvent) => {
    const { onChange } = this.props;
    onChange({ target: { value: inEvent } });
  };

  render() {
    const { className, resources, children, value, ...props } = this.props;
    const { loaded } = this.state;

    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        {loaded && children()}
      </div>
    );
  }
}
