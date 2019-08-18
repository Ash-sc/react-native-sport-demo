import React, { Fragment, Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class JoinActivity extends Component {

  render() {
    return (
      <Fragment>
        <View style={styles.JoinActivityRoot}>

        </View>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  JoinActivityRoot: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#ccc',
    position: 'absolute',
    bottom: -200
  }
})

export default JoinActivity