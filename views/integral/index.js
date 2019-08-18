import React, { Fragment, Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';
import Footer from '../footer/index';
import Dialog, {
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogButton,
} from 'react-native-popup-dialog';
import Toast, {DURATION} from 'react-native-easy-toast';

const imageObj = {
  tree: require('./tree.jpg'),
  tent: require('./tent.jpg'),
  lunch: require('./lunch.png'),
}

const likeObj = {
  like: require('./like.png'),
  like_active: require('./like-active.png'),
}

class integral extends Component {

  constructor() {
    super()
    this.state = {
      tabs: [ '公益活动', '公益簿', '公益排行榜', ],
      activeTab: Actions.currentScene === 'score_record' ? '公益簿' : '公益活动',
      showDialog: false,
      score: 12425,
      recordInfo: [
        { score: 50000, unit: '棵', hasDonated: 4, type: 'tree' },
        { score: 9000, unit: '份', hasDonated: 2, type: 'tent' },
        { score: 100000, unit: '个', hasDonated: 1, type: 'lunch' },
      ],
      usersList: [
        { username: '海绵宝宝', donated: 93000 },
        { username: '蟹老板', donated: 90000 },
        { username: '章鱼哥', donated: 87000 },
        { username: '珊迪', donated: 82000 },
        { username: '珍珍', donated: 65000 },
        { username: '凯伦', donated: 42000 },
        { username: '小蜗', donated: 4000 },
        { username: '痞老板', donated: 3000 },
      ],
      hasLike: [],
    }
  }

  routerChange(name) {
    Actions[name]()
  }

  changeTab(activeTab) {
    this.setState({ activeTab })
  }

  joinActivity(status) {
    if (status) {
      if (this.state.score < 9000) {
        this.refs.toast.show('积分不足', 500, () =>{})
        return false
      }
    }
    this.setState({ showDialog: !!status })
  }

  confirmJoinActivity() {
    this.setState({
      showDialog: false
    })
    this.refs.toast.show('捐赠成功', 500, () => {
      this.setState({
        score: this.state.score - 9000
      })
    })
  }

  scoreRecord() {
    Actions.score_record()
  }

  likeUser(username) {
    const { hasLike } = this.state
    const index = hasLike.indexOf(username)
    if (index < 0) {
      hasLike.push(username)
      this.refs.toast.show('点赞成功', 500, () =>{})
    }else {
      hasLike.splice(index, 1)
      this.refs.toast.show('取消点赞', 500, () =>{})
    }
    this.setState({ hasLike })
  }

  render() {
    return (
      <Fragment>
        <View style={styles.scoreRoot}>
          <View style={styles.topTab}>
            {this.state.tabs.map(item => (
              <Text
                style={{ ...styles.tabInfo, borderBottomWidth: this.state.activeTab === item ? 4 : 0 }}
                onPress={() => this.changeTab(item)}
              >{item}</Text>
            ))}
          </View>
          <ScrollView style={{ flex: 1 }}>
          {this.state.activeTab === '公益活动' &&
            <ImageBackground style={styles.activityTab} source={require('./integral-lunch-bg.png')} imageStyle={{ borderRadius: 10 }}>
              <View style={styles.activityTabBg}>
                <Text style={styles.activityTitle}>甘肃省小学生公益午餐</Text>
                <View style={styles.activityProcess}>
                  <View style={styles.activityProcessDone}></View>
                </View>
                <View style={styles.activityProcessTex}>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                      <Text style={{ color: contentColor, fontSize: 12, marginTop: 5 }}>本期已捐赠</Text>
                      <Text style={{ color: contentColor, fontWeight: 'bold' }}>5,123份</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={{ color: contentColor, fontSize: 12, marginTop: 5 }}>本期目标</Text>
                      <Text style={{ color: contentColor, fontWeight: 'bold' }}>6,000份</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={styles.joinActivity} onPress={() => this.joinActivity(true)}>我要参与</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          }
          {this.state.activeTab === '公益簿' &&
            <View>
              <View style={styles.userInfo}>
                <Image style={styles.avatar} source={require('../user-center/avatar-two.jpg')}></Image>
                <View style={{ flex: 1 }}>
                  <Text style={styles.nickName}>派派派大⭐</Text>
                  <Text style={styles.scoreInfo}>当前积分 {this.state.score.toLocaleString('en-IN')} </Text>
                </View>
                <Text style={styles.scoreRecord} onPress={() => this.scoreRecord()}>积分记录&gt;</Text>
              </View>
              <View>
                <Text style={styles.subTitle}>已捐赠项目</Text>
              </View>
              <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 10 }}>
                {this.state.recordInfo.map(item => (
                  <View style={{ flex: 1, padding: 10 }}>
                    <View style={styles.recordInfo}>
                      <Image source={imageObj[item.type]} style={{ width: 50, height: 50, borderRadius: 25, marginBottom: 20 }}></Image>
                      <Text style={{ color: txtColor, fontSize: 14, marginBottom: 5 }}>
                        {item.score.toLocaleString('en-IN')}分/{item.unit}
                      </Text>
                      <Text style={{ color: txtColor }}>
                        已捐赠&nbsp;
                        <Text style={{ color: txtColor, fontSize: 18 }}>{item.hasDonated}</Text>
                        &nbsp;{item.unit}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          }
          {this.state.activeTab === '公益排行榜' &&
            <View>
              <View style={{ flexDirection: 'row', padding: 10, paddingLeft: 20, paddingRight: 20 }}>
                <Text style={{ fontSize: 18, flex: 1 }}>
                  好友排行
                  <Text style={{ fontSize: 12 }}> 仅含已添加好友</Text>
                </Text>
                <Text style={{ marginTop: 4 }}>
                  <Text style={{ fontSize: 14, marginTop: 4, color: '#55cbff' }}>区域排行榜 </Text>
                  <Text style={{ fontSize: 14, marginTop: 4, color: '#55cbff' }}>| 总榜</Text>
                </Text>
              </View>
              <View
                // style={style.userList}
              >
                <View style={{ flexDirection: 'row', borderStyle: 'solid', borderColor: '#CCC', borderBottomWidth: 1 }}>
                  <Text style={styles.userListInfo} numberOfLines={1} ellipsizeMode="middle">排名</Text>
                  <Text style={styles.userListInfo} numberOfLines={1} ellipsizeMode="middle">用户</Text>
                  <Text style={{...styles.userListInfo, flex: 1}} numberOfLines={1} ellipsizeMode="middle">已捐赠积分</Text>
                  <Text style={styles.userListInfo} numberOfLines={1} ellipsizeMode="middle">点赞</Text>
                </View>
                {this.state.usersList.map((item, i) => (
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.userListInfo} numberOfLines={1} ellipsizeMode="middle">{i + 1}</Text>
                    <Text style={styles.userListInfo} numberOfLines={1} ellipsizeMode="middle">{item.username}</Text>
                    <Text style={{...styles.userListInfo, flex: 1}} numberOfLines={1} ellipsizeMode="middle">{item.donated.toLocaleString('en-IN')}</Text>
                    <View style={styles.userListInfo} numberOfLines={1} ellipsizeMode="middle">
                      <TouchableWithoutFeedback onPress={() => this.likeUser(item.username)}>
                        <Image
                          source={this.state.hasLike.includes(item.username) ? likeObj.like_active : likeObj.like}
                          style={{ width: 20, height: 20 }}
                        ></Image>
                      </TouchableWithoutFeedback>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          }
          </ScrollView>
        </View>
        <Footer active={'integral'}></Footer>
        <Dialog
          width="80%"
          visible={this.state.showDialog}
          onTouchOutside={() => this.joinActivity(false)}
          dialogTitle={<DialogTitle title="捐赠" />}
          footer={
            <DialogFooter>
              <DialogButton
                text="取消"
                onPress={() => this.joinActivity(false)}
              />
              <DialogButton
                text="确定"
                onPress={() => this.confirmJoinActivity()}
              />
            </DialogFooter>
          }
        >
          <DialogContent>
            <Text style={{...styles.dialogDesc, marginTop: 10 }}>您当前拥有 {this.state.score.toLocaleString('en-IN')} 积分。</Text>
            <Text style={styles.dialogDesc}>捐赠一份午餐需要消耗 9,000 积分。</Text>
            <View
              style={{ alignItems: 'center', marginTop: 10 }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Text style={{...styles.dialogDesc, marginLeft: -32, marginRight: 10 }}>捐赠</Text>
                <Text style={{...styles.btnStyle, ...styles.leftBtnStyle}}>-</Text>
                <Text style={{...styles.btnStyle, ...styles.btnContent}}>1</Text>
                <Text style={{...styles.btnStyle, ...styles.rightBtnStyle}}>+</Text>
              </View>
            </View>
          </DialogContent>
        </Dialog>
        <Toast ref="toast" />
      </Fragment>
    )
  }
}

const contentColor = '#eee'

const bgColor = '#252E37'
const panelBg = '#313C46'
const iconColor = '#F8F9FB'
const txtColor = '#F8F9FB'

const styles = StyleSheet.create({
  scoreRoot: {
    flex: 1,
    backgroundColor: bgColor,
  },
  topTab: {
    flexDirection: 'row',
    borderBottomColor: '#fff',
    borderStyle: 'solid',
    backgroundColor: panelBg,
  },
  tabInfo: {
    height: 40,
    fontSize: 18,
    lineHeight: 30,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    paddingBottom: 10,
    color: txtColor,
    borderBottomColor: '#CCC',
    borderStyle: 'solid',
  },
  activityTab: {
    height: 120,
    margin: 10,
    borderRadius: 10,
  },
  activityTabBg: {
    padding: 10,
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.45)',
    borderRadius: 10,
  },
  activityTitle: {
    fontSize: 18,
    marginTop: 25,
    fontWeight: 'bold',
    color: contentColor,
  },
  activityProcess: {
    height: 3,
    width: '70%',
    backgroundColor: '#fff',
    marginTop: 10
  },
  activityProcessDone: {
    height: 3,
    width: '80%',
    backgroundColor: '#ff0000'
  },
  activityProcessTex: {
    flexDirection: 'row'
  },
  joinActivity: {
    color: contentColor,
    fontSize: 16,
    lineHeight: 24,
    height: 26,
    borderRadius: 12,
    borderStyle: 'solid',
    borderColor: contentColor,
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 10,
  },
  dialogDesc: {
    color: '#000',
    fontSize: 16,
    lineHeight: 24,
    height: 24,
  },
  btnStyle: {
    color: '#000',
    height: 32,
    width: 32,
    lineHeight: 30,
    fontSize: 22,
    borderStyle: 'solid',
    borderColor: contentColor,
    borderWidth: 1,
    textAlign: 'center'
  },
  leftBtnStyle: {
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
  rightBtnStyle: {
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  btnContent: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  // 公益簿
  userInfo: {
    margin: 20,
    marginBottom: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    borderStyle: 'solid',
    borderColor: '#CCC',
    borderBottomWidth: 1,
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
  scoreInfo: {
    color: '#e6e6e6',
    fontSize: 16,
    marginTop: 10,
  },
  scoreRecord: {
    position: 'absolute',
    fontSize: 14,
    right: 0,
    marginTop: 50,
    color: txtColor,
    zIndex: 1000,
  },
  subTitle: {
    color: '#CCC',
    fontSize: 14,
    marginLeft: 20,
    marginBottom: 10,
  },
  recordInfo: {
    backgroundColor: panelBg,
    paddingTop: 20,
    paddingBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  userListInfo: {
    padding: 10,
    fontSize: 16,
    width: 80,
    textAlign: 'center',
    alignItems: 'center'
  }
})

export default integral