import React, {
  StatusBarIOS,
  Component,
  Text,
  View,
  PropTypes,
} from 'react-native';
import NavbarButton from './NavbarButton';
import NavbarContainer from './NavbarContainer';
import NavbarContent from './NavbarContent';
import NavbarStatusBar from './NavbarStatusBar';
import styles from './styles';

const ButtonShape = {
  title: PropTypes.string.isRequired,
  style: PropTypes.object,
  handler: PropTypes.func,
};

const TitleShape = {
  title: PropTypes.string.isRequired,
  tintColor: PropTypes.string,
};

const StatusBarShape = {
  style: PropTypes.oneOf(['light-content', 'default', ]),
  hidden: PropTypes.bool,
  tintColor: PropTypes.string,
  hideAnimation: PropTypes.oneOf(['fade', 'slide', 'none', ]),
  showAnimation: PropTypes.oneOf(['fade', 'slide', 'none', ]),
};

export default class NavigationBar extends Component {
  render() {
    const customTintColor = this.props.tintColor ?
      { backgroundColor: this.props.tintColor, } : null;

    const navbarTitleStyle = [
      styles.navBarTitleText,
      { color: this.props.title.tintColor, },
    ];

    const leftButtonStyle = [
      { marginLeft: 8, },
      this.props.leftButton.style,
    ];

    const rightButtonStyle = [
      { marginRight: 8, },
      this.props.leftButton.style,
    ];

    return (
      <NavbarContainer style={customTintColor}>
        <NavbarStatusBar {...this.props.statusBar}/>
        <NavbarContent>
          <Text style={navbarTitleStyle}>{this.props.title.title}</Text>
          <NavbarButton {...this.props.leftButton} style={leftButtonStyle} />
          <NavbarButton {...this.props.rightButton} style={rightButtonStyle} />
        </NavbarContent>
      </NavbarContainer>
    );
  }

  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    tintColor: PropTypes.string,
    statusBar: PropTypes.shape(StatusBarShape),
    leftButton: PropTypes.oneOfType([
      PropTypes.shape(ButtonShape),
      PropTypes.element,
    ]),
    rightButton: PropTypes.oneOfType([
      PropTypes.shape(ButtonShape),
      PropTypes.element,
    ]),
    title: PropTypes.oneOfType([
      PropTypes.shape(TitleShape),
      PropTypes.element,
    ]),
  }
}
