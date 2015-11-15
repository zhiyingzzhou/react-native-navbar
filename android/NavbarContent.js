import React, {
  Component,
  View,
  PropTypes,
} from 'react-native';
import { NAV_BAR_HEIGHT, } from './styles';

const defaultNavbarContentStyle = {
  height: NAV_BAR_HEIGHT,
  flexDirection: 'row',
  justifyContent: 'space-between',
};

export default class NavbarContent extends Component {
  render() {
    return (
      <View style={[defaultNavbarContentStyle, this.props.style, ]}>
        {this.props.children}
      </View>
    );
  }
}
