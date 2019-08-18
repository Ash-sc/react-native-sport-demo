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

class ScoreRecord extends Component {

  constructor() {
    super()
    this.state = {
      timeTags: [
        { label: '全部', value: 'all' },
        { label: '运动', value: 'sport' },
        { label: '公益榜点赞', value: 'like' },
        { label: '邀请新用户', value: 'invite' },
      ],
      currentType: 'all',
      recordList: [
        { date: '2019-08-08 19:34:20', location: '拱墅区·环城西银泰线', length: '1.3', type: 'sport', score: 350 },
        { date: '2019-08-03 19:34:02', type: 'like', score: 50 },
        { date: '2019-08-03 19:34:00', type: 'like', score: 50 },
        { date: '2019-08-03 19:33:55', type: 'like', score: 50 },
        { date: '2019-08-02 13:11:42', type: 'like', score: 50 },
        { date: '2019-08-07 20:33:11', location: '拱墅区·浙大紫金港线', length: '3.5', type: 'sport', score: 850 },
        { date: '2019-08-04 22:12:44', location: '西湖区·西湖苏堤线', length: '2.4', type: 'sport', score: 650 },
        { date: '2019-07-31 21:21:33', location: '西湖区·西湖苏堤线', length: '2.4', type: 'sport', score: 650 },
        { date: '2019-07-22 21:44:11', location: '拱墅区·浙大紫金港线', length: '3.5', type: 'sport', score: 850 },
      ]
    }
  }

  routerChange(name) {
    Actions[name]()
  }

  changeType(currentType) {
    this.setState({ currentType })
  }

  render() {
    const recordList = this.state.recordList.filter(item => {
      if (this.state.currentType === 'all') return true
      else return item.type == this.state.currentType
    })
    return (
      <Fragment>
        <View style={styles.recordRoot}>
        <View style={styles.topBar}>
          <Text style={styles.topBarTxt}>积分记录</Text>
          <TouchableHighlight style={styles.imageTouchable} onPress={() => this.routerChange('integral')}>
            <Image source={require('./back.png')} style={styles.backImage}></Image>
          </TouchableHighlight>
          <View style={styles.timeTags}>
            {this.state.timeTags.map(item => (
              <Text
                style={{ ...styles.timeTagInfo, borderBottomWidth: this.state.currentType === item.value ? 2 : 0 }}
                onPress={() => this.changeType(item.value)}
              >{item.label}</Text>
            ))}
          </View>
        </View>
        <ScrollView style={{ flex: 1, paddingTop: 20, paddingBottom: 40 }}>
          {recordList.map((item, i) => (
            <View>
              <View style={styles.recordItem}>
                <View style={{ flex: 1 }}>
                  {item.type === 'sport' ? (
                    <Text style={{ color: txtColor, fontSize: 16, marginBottom: 10 }}>
                      {item.length} 公里
                    </Text>
                  ) : (
                    <Text style={{ color: txtColor, fontSize: 16, marginBottom: 10 }}>
                      公益榜点赞
                    </Text>
                  )
                  }
                  <Text style={{ color: txtColor, fontSize: 14, marginBottom: 10 }}>
                    {item.location || '--'}
                  </Text>
                  <Text style={{ color: txtColor, fontSize: 12 }}>
                    {item.date}
                  </Text>
                </View>
              </View>
              <Text style={styles.scoreAdd}>{item.score > 0 && '+'}{item.score}</Text>
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
  scoreAdd: {
    color: '#a2ffe9',
    position: 'absolute',
    right: 35,
    top: 50,
    fontSize: 20,
  },
})

export default ScoreRecord