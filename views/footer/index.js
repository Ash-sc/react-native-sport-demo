import React, { Fragment, Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

class Footer extends Component {

  routerChange(name) {
    if (Actions.currentScene === name) return false
    Actions[name]()
  }

  render() {
    const { active } = this.props
    return (
      <Fragment>
        <View style={styles.footerView}>
          <Text
            style={{ ...styles.Section }}
            onPress={() => this.routerChange('run_map')}
          >
            <Image source={active === 'run-map' ? require('./run-active.png') : require('./run.png')} style={{ ...styles.imageSize }}></Image>
          </Text>
          <Text
            style={{ ...styles.Section }}
            onPress={() => this.routerChange('integral')}
          >
            <Image source={active === 'integral' ? require('./score-active.png') : require('./score.png')} style={{ ...styles.imageSize }}></Image>
          </Text>
          <Text
            style={{ ...styles.Section }}
            onPress={() => this.routerChange('user_center')}
          >
            <Image source={active === 'user-center' ? require('./user-active.png') : require('./user.png')} style={{ ...styles.imageSize }}></Image>
          </Text>
        </View>
      </Fragment>
    )
  }
}

const bgColor = '#252E37'
const panelBg = '#313C46'
const panelActive = '#7d8994'
const iconColor = '#F8F9FB'
const txtColor = '#F8F9FB'

const styles = StyleSheet.create({
  footerView: {
    height: 50,
    backgroundColor: panelBg,
    flexDirection: 'row'
  },
  Section: {
    color: txtColor,
    width: '33.3333%',
    textAlign: 'center',
    backgroundColor: panelBg,
  },
  imageSize: {
    width: 30,
    height: 30,
    marginTop: 10,
  },
})

export default Footer;