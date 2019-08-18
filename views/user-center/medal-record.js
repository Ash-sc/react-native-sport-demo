import React, { Fragment, Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableHighlight,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

const medalImages = {
  a: require('../user-center/medal-a.png'),
  b: require('../user-center/medal-b.png'),
  c: require('../user-center/medal-c.png'),
}

class MedalRecord extends Component {

  constructor() {
    super()
    this.state = {
      recordList: [
        { date: '2019-08-08', label: '打卡30天', type: 'a' },
        { date: '2019-08-05', label: '累积运动100公里', type: 'a' },
        { date: '2019-07-29', label: '累积运动5小时', type: 'c' },
        { date: '2019-07-11', label: '杭州半马', type: 'b' },
        { date: '2019-07-05', label: '累积运动50公里', type: 'b' },
        { date: '2019-07-05', label: '累积运动2小时', type: 'c' },
        { date: '2019-06-21', label: '累积运动10公里', type: 'c' },
        { date: '2019-06-18', label: '累积运动1小时', type: 'c' },
        { date: '2019-05-03', label: '第一次跑步', type: 'a' },
      ]
    }
  }

  routerChange(name) {
    Actions[name]()
  }

  render() {
    return (
      <Fragment>
        <View style={styles.recordRoot}>
        <View style={styles.topBar}>
          <Text style={styles.topBarTxt}>勋章记录</Text>
          <TouchableHighlight style={styles.imageTouchable} onPress={() => this.routerChange('user_center')}>
            <Image source={require('./back.png')} style={styles.backImage}></Image>
          </TouchableHighlight>
        </View>
        <ScrollView style={{ flex: 1, paddingTop: 20, paddingBottom: 40 }}>
          {this.state.recordList.map((item, i) => (
            <View>
              <View style={styles.recordItem}>
                <Image source={medalImages[item.type]} style={styles.medal}></Image>
                <View style={{ flex: 1, marginLeft: 20 }}>
                  <Text style={{ color: txtColor, fontSize: 16, marginBottom: 10, }}>{item.label}</Text>
                  <Text style={{ color: '#999', fontSize: 12 }}>{item.date}获得</Text>
                </View>
              </View>
              <View style={{ ...styles.line, borderRightWidth: this.state.recordList.length !== i + 1 ? 1 : 0 }}></View>
            </View>
          ))}
          <Text style={{ paddingBottom: 40, width: '100%', textAlign: 'center', color: '#627484' }}>没有更多了</Text>
        </ScrollView>
        </View>
      </Fragment>
    )
  }
}

const bgColor = '#252E37'
const panelBg = '#313C46'
const iconColor = '#F8F9FB'
const txtColor = '#F8F9FB'

const styles = StyleSheet.create({
  recordRoot: {
    flex: 1,
    backgroundColor: bgColor,
  },
  topBar: {
    height: 50,
    margin: 20,
    marginBottom: 0,
    borderColor: '#EEE',
    borderStyle: 'solid',
    borderBottomWidth: 2
  },
  topBarTxt: {
    color: txtColor,
    height: 50,
    lineHeight: 38,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  imageTouchable: {
    position: 'absolute',
    top: 10,
    left: 0,
  },
  backImage: {
    width: 24,
    height: 24,
  },
  recordItem: {
    flexDirection: 'row',
  },
  medal: {
    width: 50,
    height: 50,
    marginLeft: 30,
  },
  line: {
    marginTop: 2,
    height: 50,
    width: 1,
    borderStyle: 'dotted',
    borderColor: 'rgba(255,255,255, 0.3)',
    borderRightWidth: 1,
    marginLeft: 55
  }
})

export default MedalRecord