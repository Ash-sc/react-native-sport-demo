import React, { Fragment, Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

class runRecord extends Component {

  routerChange(name) {
    Actions[name]()
  }

  render() {
    return (
      <Fragment>
        <Text>111222333</Text>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
})

export default runRecord