import React, { Fragment, Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

const statusObj = {
  start: require('./start.png'),
  pause: require('./pause.png'),
  stop: require('./stop.png'),
}

class StartTask extends Component {

  constructor() {
    super()
    this.state = {
      currentStatus: 'start',
      currentRun: 0,
      currentTime: 0,
    }
    this.runAuto = this.runAuto.bind(this)
  }

  routerChange(name) {
    Actions[name]()
  }

  runAuto () {
    this.setState({
      currentRun: parseFloat((this.state.currentRun + 0.02).toFixed(2)),
      currentTime: this.state.currentTime + 0.1
    })
    this.timer = setTimeout(this.runAuto, 100)
  }

  clickIcon(type) {
    if (type === 'start') {
      this.setState({ currentStatus: 'doing' })
      this.runAuto()
    } else {
      this.setState({ currentStatus: type === 'pause' ? 'pause' : 'stop' })
      this.timer && clearTimeout(this.timer)
    }
  }

  render() {
    const currentRun = () => {
      const arr = this.state.currentRun.toString().split('.')
      return `${arr[0]}.${arr[1] ? arr[1].padEnd(2, 0) : '00'}`
    }
    const currentTime = () => {
      const num = parseInt(this.state.currentTime)
      const min = parseInt(num / 60)
      const second = (num % 60).toString().padStart(2, 0)
      return `${min}'${second}''`
    }
    return (
      <Fragment>
        <ImageBackground source={require('./bg.jpg')} style={{width: '100%', height: '100%' }}>
          <View style={styles.root}>
            <View style={styles.topBar}>
              <Text style={styles.topBarTxt}></Text>
              <TouchableHighlight style={styles.imageTouchable} onPress={() => this.routerChange('run_map')}>
                <Image source={require('../user-center/back.png')} style={styles.backImage}></Image>
              </TouchableHighlight>
            </View>

            <View style={{ alignItems: 'center', marginTop: '10%' }}>
              <Text style={{ fontSize: 20, marginBottom: 20 }}>目标2.2公里</Text>
              <Image source={require('../footer/run.png')} style={{ width: 40, height: 40 }}></Image>
            </View>

            <View style={{ alignItems: 'center', marginTop: '10%' }}>
              <View style={{ width: 200, height: 200, backgroundColor: 'rgba(255, 255, 255, .3)', borderRadius: 100, alignItems: 'center' }}>
                <Text style={{ fontSize: 50, marginTop: 55 }}>
                  {currentRun()}
                  <Text style={{ fontSize: 14 }}>&nbsp;&nbsp;公里</Text>
                </Text>
                <Text style={{ fontSize: 18, marginTop: 5 }}>{currentTime()}</Text>
              </View>
            </View>

            {this.state.currentStatus !== 'stop' && <View style={{ alignItems: 'center', marginTop: 50, flexDirection: 'row' }}>
              {this.state.currentStatus !== 'doing' && <TouchableOpacity
                style={{ width: 40, height: 40, padding: 10, marginRight: 10, backgroundColor: 'rgba(255, 255, 255, .3)', borderRadius: 20 }}
                onPress={() => this.clickIcon('start')}
              >
                <Image
                  source={statusObj.start}
                  style={{ width: 20, height: 20 }}
                ></Image>
              </TouchableOpacity>}
              {this.state.currentStatus !== 'start' && this.state.currentStatus !== 'pause' && <TouchableOpacity
                style={{ width: 40, height: 40, padding: 10, marginRight: 10, backgroundColor: 'rgba(255, 255, 255, .3)', borderRadius: 20 }}
                onPress={() => this.clickIcon('pause')}
              >
                <Image
                  source={statusObj.pause}
                  style={{ width: 20, height: 20 }}
                ></Image>
              </TouchableOpacity>}
              {this.state.currentStatus !== 'start' && <TouchableOpacity
                style={{ width: 40, height: 40, padding: 10, backgroundColor: 'rgba(255, 255, 255, .3)', borderRadius: 20 }}
                onPress={() => this.clickIcon('stop')}
              >
                <Image
                  source={statusObj.stop}
                  style={{ width: 20, height: 20 }}
                ></Image>
              </TouchableOpacity>}
            </View>}
            {this.state.currentStatus === 'stop' &&
              <View style={{alignItems: 'center', marginTop: 50, flexDirection: 'row'}}>
                <Text
                  onPress={() => this.routerChange('run_map')}
                  style={{ padding: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: 'rgba(255, 255, 255, .3)', borderRadius: 20, marginRight: 20 }}
                >返&nbsp;&nbsp;&nbsp;回</Text>
                <Text
                  style={{ padding: 20, paddingTop: 10, paddingBottom: 10, backgroundColor: 'rgba(255, 255, 255, .3)', borderRadius: 20, marginRight: 20 }}
                  onPress={() => this.routerChange('share')}
                >分&nbsp;&nbsp;&nbsp;享</Text>
              </View>
            }
          </View>
        </ImageBackground>
      </Fragment>
    )
  }
}

const bgColor = '#252E37'
const panelBg = '#313C46'
const iconColor = '#F8F9FB'
const txtColor = '#F8F9FB'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  topBar: {
    width: '100%',
    height: 50,
    margin: 20,
    marginBottom: 0,
    borderColor: '#EEE',
    borderStyle: 'solid',
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
    left: 20,
  },
  backImage: {
    width: 24,
    height: 24,
  },
})

export default StartTask