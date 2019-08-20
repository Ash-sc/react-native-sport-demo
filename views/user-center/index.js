import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Footer from '../footer/index';
import {
  Actions,
} from 'react-native-router-flux';

const medalImages = {
  a: require('./medal-a.png'),
  b: require('./medal-b.png'),
  c: require('./medal-c.png'),
}

class UserCenter extends Component {
  constructor() {
    super()
    this.state = {
      statusInfo: [
        { name: '好友', num: 22, styles: { borderRightWidth: 1 } },
        { name: '解锁路线', num: 45 },
        { name: '完成区域', num: 2 },
      ],
      medalInfo: [
        { name: '连续打卡', type: 'a', num: '33', util: '天' },
        { name: '累积里程', type: 'a', num: '100', util: '公里' },
        { name: '累积运动', type: 'c', num: '5', util: '小时' },
        { name: '半马', type: 'b', num: '2019', util: '' },
      ]
    }
  }

  toMedalSection() {
    // alert('hhh')
    Actions.medal_record()
  }

  toRunRecord() {
    Actions.run_record()
  }

  shareDetail() {
    Actions.share()
  }

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <ScrollView style={styles.userCenter}>
          <View>
            <View style={{ backgroundColor: panelBg, borderRadius: 10, padding: 20, margin: 20, marginBottom: 0 }}>
              <View style={styles.userInfo}>
                <Image style={styles.avatar} source={require('./avatar-two.jpg')}></Image>
                <View style={{ flex: 1 }}>
                  <Text style={styles.nickName}>派派派大⭐</Text>
                  <View style={{ flexDirection: 'row' }}>
                    {/* <Text style={styles.userTag}>#夜跑骚年</Text> */}
                    <Text style={styles.userTag}>#拱墅区运动达人</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                {this.state.statusInfo.map(item => (
                  <View style={{...styles.statusInfo, ...item.styles }}>
                    <Text style={styles.statusNum}>{item.num}</Text>
                    <Text style={styles.statusName}>{item.name}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={{ height: 20 }}></View>
            <TouchableOpacity onPress={this.toMedalSection}>
              <View style={{ backgroundColor: panelBg, borderRadius: 10, padding: 20, paddingTop: 10, marginLeft: 20, marginRight: 20 }}>
                <Text style={{ color: txtColor, fontSize: 14, marginBottom: 10 }}>最近获得</Text>
                <View style={{ flexDirection: 'row' }}>
                {this.state.medalInfo.map(item => (
                  <View style={styles.medalInfo}>
                    <ImageBackground source={medalImages[item.type]} style={{width: 50, height: 50 }}>
                    </ImageBackground>
                    <Text style={styles.medalNum}>
                        {item.num}
                        <Text style={styles.medalUnit}>{item.util}</Text>
                      </Text>
                    <Text style={styles.medalName}>{item.name}</Text>
                  </View>
                ))}
                </View>
              </View>
            </TouchableOpacity>
            <View style={{ height: 20 }}></View>
            <TouchableOpacity onPress={this.toRunRecord}>
              <View
                style={{ flexDirection: 'row', backgroundColor: panelBg, borderRadius: 10, padding: 20, paddingBottom: 10, paddingRight: 10, marginLeft: 20, marginRight: 20 }}
              >
                <View style={{ flex: 1, paddingLeft: 10 }}>
                  <View><Text style={{ fontSize: 20, marginBottom: 10, color: txtColor, }}>完成23次任务</Text></View>
                  <View><Text style={{ fontSize: 18, marginBottom: 10, color: txtColor, }}>超越拱墅区83%的用户</Text></View>
                </View>
                <Image source={require('./jump.png')} style={{ width: 24, height: 24, marginTop: 20 }}></Image>
              </View>
            </TouchableOpacity>
            <View style={{ height: 20 }}></View>
            <TouchableOpacity onPress={this.shareDetail}>
              <View
                style={{ flexDirection: 'row', backgroundColor: panelBg, borderRadius: 10, padding: 20, paddingBottom: 10, paddingRight: 10, marginLeft: 20, marginRight: 20 }}
              >
                <View style={{ flex: 1, paddingLeft: 10 }}>
                  <View><Text style={{ fontSize: 20, marginBottom: 10, color: txtColor, }}>运动报告</Text></View>
                  <View><Text style={{ fontSize: 16, marginBottom: 10, color: txtColor, }}>分享至社交圈 最高可获500积分</Text></View>
                </View>
                <Image source={require('./jump.png')} style={{ width: 24, height: 24, marginTop: 20 }}></Image>
              </View>
            </TouchableOpacity>
            <View style={{ height: 20 }}></View>
          </View>
        </ScrollView>
        <Footer active={'user-center'}></Footer>
      </Fragment>
    )
  }
}

const bgColor = '#252E37'
const panelBg = '#313C46'
const iconColor = '#F8F9FB'
const txtColor = '#F8F9FB'

const styles = StyleSheet.create({
  userCenter: {
    flex: 1,
    backgroundColor: bgColor,
  },
  userInfo: {
    margin: 0,
    marginBottom: 20,
    flexDirection: 'row',
  },
  avatar: {
    width: 80,
    height: 80,
    marginRight: 40,
    borderRadius: 100,
  },
  nickName: {
    color: txtColor,
    fontSize: 20,
    marginTop: 10,
  },
  userTag: {
    color: txtColor,
    marginTop: 10,
    fontSize: 14,
    borderStyle: 'solid',
    backgroundColor: '#515A62',
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 8,
    marginRight: 10,
  },
  statusInfo: {
    width: '33.333%',
    borderStyle: 'solid',
    borderColor: '#ddd',
    borderWidth: 0,
  },
  statusNum: {
    color: txtColor,
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  statusName: {
    color: txtColor,
    fontSize: 18,
    textAlign: 'center',
  },
  medalInfo: {
    width: '25%',
    alignItems: 'center',
  },
  medalNum: {
    color: txtColor,
    width: 60,
    height: 20,
    lineHeight: 20,
    fontSize: 14,
    textAlign: 'center',
  },
  medalUnit: {
    color: txtColor,
    fontSize: 10,
  },
  medalName: {
    color: txtColor,
    fontSize: 14,
    textAlign: 'center',
  }
})

export default UserCenter;