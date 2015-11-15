import React, {
  Component,
  View,
  PropTypes,
} from 'react-native';

export default class NavigatorContainer extends Component {
  static propTypes = {
    style: PropTypes.object,
  }

  render() {
    return (
      <View style={[{ paddingBottom: 5, }, this.props.style, ]}>
        {this.props.children}
      </View>
    );
  }
}
