import React, {
  Component,
  View,
  PropTypes,
} from 'react-native';

const defaultNavbarContainerStyle = {
  backgroundColor: 'white',
  paddingBottom: 5,
  borderBottomColor: 'rgba(0, 0, 0, .5)',
  borderBottomWidth: 0.5,
};

export default class NavigatorContainer extends Component {
  static propTypes = {
    style: PropTypes.object,
  }

  render() {
    const { style, } = this.props;
    return (
      <View style={[defaultNavbarContainerStyle, style, ]}>
        {this.props.children}
      </View>
    );
  }
}
