import React, { Fragment, Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

class Share extends Component {

  routerChange(name) {
    Actions[name]()
  }

  render() {
    return (
      <Fragment>
        <ImageBackground source={require('./birdNest.jpeg')} style={{width: '100%', height: '100%' }}>
          <View
            style={{
            position: 'absolute',
            width: '100%',
            top: 0, height: '100%',
            backgroundColor: 'rgba(0, 0, 0, .6)',
            alignItems: 'center'
          }}
          >
            <Image style={styles.avatar} source={require('./avatar-two.jpg')}></Image>
            <Text style={{ marginTop: 20, fontSize: 20 }}>派派派大⭐</Text>
            <View style={{ width: '100%', padding: 20, alignItems: 'flex-start' }}>
              <Text style={{ marginTop: 20, fontSize: 18 }}>
                <Text style={{ fontSize: 26 }}>个行 </Text>
                已陪伴我走过92天~
              </Text>
              <Text style={{ fontSize: 16, marginTop: 10 }}>
                在这段时间里，我已
              </Text>
              <Text style={{ fontSize: 16, marginTop: 10 }}>
                获得徽章 <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#01b5c7' }}>7</Text> 枚
              </Text>
              <Text style={{ fontSize: 16, marginTop: 10 }}>
                累计完成任务 <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#01b5c7' }}>42</Text> 次
              </Text>
              <Text style={{ fontSize: 16, marginTop: 10 }}>
                解锁 <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#01b5c7' }}>45</Text> 个路线，完成 <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#01b5c7' }}>2</Text> 个区域
              </Text>
              <Text style={{ fontSize: 16, marginTop: 10 }}>
              累计运动里程 <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#01b5c7' }}>232.63</Text> 公里
              </Text>
              <Text style={{ fontSize: 16, marginTop: 10 }}>
                相当于环绕鸟巢体育馆 <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#01b5c7' }}>105</Text> 圈。
              </Text>
              <Text style={{ fontSize: 16, marginTop: 10 }}>
              参与公益项目 <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#01b5c7' }}>4</Text> 次，帮助过 <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#01b5c7' }}>18</Text> 人
              </Text>
              <Text style={{ fontSize: 16, marginTop: 10 }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#01b5c7' }}>
                  我，在
                  <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#01b5c7' }}> 个行 </Text>
                等你！</Text>
              </Text>
            </View>
          </View>
        </ImageBackground>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  avatar: {
    marginTop: 60,
    width: 80,
    height: 80,
    borderRadius: 100,
  },
})

export default Share