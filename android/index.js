import React, {
  Component,
  Text,
  Image,
  View,
  PropTypes,
} from 'react-native';
import NavbarButton from './NavbarButton';
import NavbarContainer from './NavbarContainer';
import NavbarContent from './NavbarContent';
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
    let containerStyle = {
      backgroundColor: this.props.tintColor,
    };

    const titleStyle = [
      styles.title,
      this.props.title.tintColor ?
        { color: this.props.title.tintColor, } : null,
    ];

    const leftButtonStyle = [
      styles.leftButtonStyle,
      this.props.leftButton.style,
    ];

    const rightButtonStyle = [
      styles.rightButtonStyle,
      this.props.rightButton.style,
    ];

    return (
      <NavbarContainer style={containerStyle}>
        <NavbarContent>
          <Text style={titleStyle}>Hello, bitches!</Text>
        </NavbarContent>
      </NavbarContainer>
    );
  }

  static defaultProps = {
    delimiter: true,
    tintColor: styles.container.tintColor,
  }

  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    delimiter: PropTypes.bool,
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
