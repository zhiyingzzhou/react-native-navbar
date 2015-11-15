import React, {
  Component,
  View,
  StatusBarIOS,
  PropTypes,
} from 'react-native';

import { STATUS_BAR_HEIGHT, } from './styles';

const defaultStatusBarStyle = {
  height: STATUS_BAR_HEIGHT,
};

/**
 * Customize StatusBar based on passed options
 * @param  {Boolean} hidden If StatusBar should be hidden
 * @param  {String} type Type of StatusBar ('light-content' or 'default')
 * @param  {String} hideAnimation Hide animation type ('fade', 'slide', 'none')
 * @param  {String} showAnimation Show animation type ('fade', 'slide', 'none')
 * @return {Void}
 */
function customizeStatusBar({hidden, type, hideAnimation, showAnimation, }) {
  if (type) {
    StatusBarIOS.setStyle(type, true);
  }

  StatusBarIOS.setHidden(hidden, hidden ? hideAnimation : showAnimation);
}

export default class NavbarStatusBar extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['light-content', 'default', ]),
    hidden: PropTypes.bool,
    hideAnimation: PropTypes.oneOf(['fade', 'slide', 'none', ]),
    showAnimation: PropTypes.oneOf(['fade', 'slide', 'none', ]),
  }

  static defaultProps = {
    type: 'default',
    hidden: false,
    hideAnimation: 'none',
    showAnimation: 'none',
  }

  componentDidMount() {
    customizeStatusBar(this.props);
  }

  componentWillReceiveProps(props) {
    customizeStatusBar(props);
  }

  render() {
    return <View style={[defaultStatusBarStyle, this.props.style, ]} />;
  }
}
