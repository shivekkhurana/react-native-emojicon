import React, {Component, PropTypes} from 'react';
import {Text, Platform} from 'react-native';
import Mapper from 'react-native-emojicon/mapper';

class Emojicon extends Component {
  render() {
    return (
      <Text 
        style={[{
          fontSize: this.props.size,
          height: this.props.size + (Platform.OS === 'ios' ? 8 : 20)
        }, this.props.style]}
      >
        {Mapper[this.props.name].replace('_', '-')}
      </Text>
    );
  }
}

Emojicon.propTypes = {
  style: PropTypes.object,
  size: PropTypes.number,
  name: PropTypes.string.isRequired
};

Emojicon.defaultProps = {
  size: 20
}

export default Emojicon;