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

class RunRecord extends Component {

  constructor() {
    super()
    this.state = {
      timeTags: [
        { label: '全部', value: 'all' },
        { label: '8月', value: '2019-08' },
        { label: '7月', value: '2019-07' },
        { label: '6月', value: '2019-06' },
        { label: '5月', value: '2019-05' },
      ],
      currentTime: 'all',
      recordList: [
        { date: '2019-08-08', location: '拱墅区·环城西银泰线', length: '1.3', speed: '5\'13\'\'', time: '00:06:34' },
        { date: '2019-08-07', location: '拱墅区·浙大紫金港线', length: '3.5', speed: '5\'22\'\'', time: '00:22:15' },
        { date: '2019-08-04', location: '西湖区·西湖苏堤线', length: '2.4', speed: '5\'51\'\'', time: '00:15:45' },
        { date: '2019-07-31', location: '西湖区·西湖苏堤线', length: '2.4', speed: '5\'51\'\'', time: '00:15:45' },
        { date: '2019-07-22', location: '拱墅区·浙大紫金港线', length: '3.5', speed: '5\'22\'\'', time: '00:22:15' },
      ]
    }
  }

  routerChange(name) {
    Actions[name]()
  }

  changeTime(currentTime) {
    this.setState({ currentTime })
  }

  statistics() {
    alert('TO BE CONTINUED')
  }

  render() {
    const recordList = this.state.recordList.filter(item => {
      if (this.state.currentTime === 'all') return true
      else return item.date.startsWith(this.state.currentTime)
    })
    return (
      <Fragment>
        <View style={styles.recordRoot}>
        <View style={styles.topBar}>
          <Text style={styles.topBarTxt}>任务记录</Text>
          <TouchableHighlight style={styles.imageTouchable} onPress={() => this.routerChange('user_center')}>
            <Image source={require('./back.png')} style={styles.backImage}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={styles.statisticsTouchable} onPress={() => this.statistics()}>
            <Text style={{ color: txtColor, fontSize: 18, }}>统计</Text>
          </TouchableHighlight>
          <View style={styles.timeTags}>
            {this.state.timeTags.map(item => (
              <Text
                style={{ ...styles.timeTagInfo, borderBottomWidth: this.state.currentTime === item.value ? 2 : 0 }}
                onPress={() => this.changeTime(item.value)}
              >{item.label}</Text>
            ))}
          </View>
        </View>
        <ScrollView style={{ flex: 1, paddingTop: 20, paddingBottom: 40 }}>
          {recordList.map((item, i) => (
            <View>
              <View style={styles.recordItem}>
                <Image source={require('./run-record.jpg')} style={styles.medal}></Image>
                <View style={{ flex: 1, marginLeft: 20 }}>
                  <Text style={{ color: txtColor, fontSize: 14, marginBottom: 10 }}>
                    {item.date} {item.location}
                  </Text>
                  <Text style={{ color: txtColor, fontSize: 16, marginBottom: 10 }}>
                    {item.length} <Text style={{ fontSize: 12 }}>公里</Text>
                  </Text>
                  <Text style={{ color: txtColor, fontSize: 12 }}>
                    {item.time}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.speed}
                  </Text>
                </View>
              </View>
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
    margin: 20,
    marginBottom: 0,
    borderColor: '#EEE',
    borderStyle: 'solid',
    borderBottomWidth: 1
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
  statisticsTouchable: {
    position: 'absolute',
    top: 10,
    right: 0,
  },
  backImage: {
    width: 24,
    height: 24,
  },
  timeTags: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  timeTagInfo: {
    color: txtColor,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
    lineHeight: 40,
    height: 40,
    borderStyle: 'solid',
    borderColor: txtColor,
  },
  recordItem: {
    flexDirection: 'row',
    backgroundColor: panelBg,
    borderRadius: 10,
    margin: 20,
    marginBottom: 20,
    marginTop: 0,
    padding: 20,
  },
  medal: {
    width: 80,
    height: 80,
  },
})

export default RunRecord