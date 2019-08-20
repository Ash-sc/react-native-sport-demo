import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      phone: '',
      password: '',
      verifyCode: '',
      timer: '获取验证码',
    };
  }

  getCode(num = 59) {
    if (num === 59 && this.state.timer !== '获取验证码') return
    this.setState({ timer: `(${num})` })
    if (num === 0) {
      this.setState({ timer: '获取验证码' })
    } else {
      this.timer = setTimeout(() => {
        this.getCode(num - 1)
      }, 1000);
    }
  }

  login() {
    Actions.user_center()
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render () {
    return (
      <Fragment>
        {/* <StatusBar barStyle="dark-content" /> */}
        <ImageBackground source={require('./bg.jpg')} style={{width: '100%', height: '100%' }}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>个行</Text>
            <Text style={styles.sectionDescription}>用行走创造公益价值</Text>
            <TextInput
              type="number"
              keyboardType='numeric'
              style={styles.phoneInput}
              onChangeText={phone => this.setState({ phone })}
              value={this.state.phone}
              placeholder='请输入手机号码'
              placeholderTextColor={txtColor}
              maxLength={11}
            />
            <TextInput
              type="password"
              secureTextEntry={true}
              style={styles.phoneInput}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              placeholder='请输入密码'
              placeholderTextColor={txtColor}
              maxLength={20}
            />
            {/* <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.verifyCodeInput}
                onChangeText={verifyCode => this.setState({ verifyCode })}
                value={this.state.verifyCode}
                placeholder='请输入验证码'
                maxLength={6}
              />
                <TouchableOpacity style={{ width: '30%', height: 60, marginTop: 15, marginLeft: 20 }}>
                  <Text style={styles.verifyCodeTxt} onPress={() => this.getCode()}>{this.state.timer}</Text>
                </TouchableOpacity>
            </View> */}
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#CD2F7C', '#A42C93', '#7B29A7']}
              style={styles.linearGradient}
            >
              <Text style={styles.buttonText} onPress={this.login}>
                登 录
              </Text>
            </LinearGradient>
          </View>
        </ImageBackground>
      </Fragment>
    );
  }
};

const bgColor = '#252E37'
const panelBg = '#313C46'
const iconColor = '#F8F9FB'
const txtColor = '#F8F9FB'

const styles = StyleSheet.create({
  sectionContainer: {
    paddingTop: '10%',
    flex: 1,
  },
  sectionTitle: {
    color: txtColor,
    marginTop: '20%',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
  },
  sectionDescription: {
    color: txtColor,
    textAlign: 'center',
    paddingTop: '10%',
    paddingBottom: '10%',
    fontSize: 22,
    fontWeight: '400',
  },
  phoneInput: {
    color: txtColor,
    height: 46,
    lineHeight: 26,
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 18,
    backgroundColor: 'rgba(36, 44, 52, 0.6)',
    borderRadius: 30,
  },
  verifyCodeInput: {
    marginTop: 10,
    marginLeft: 10,
    height: 50,
    lineHeight: 50,
    width: '60%',
    padding: 0,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ccc'
  },
  verifyCodeTxt: {
    color: '#ffffff',
    backgroundColor: '#04A7F0',
    borderRadius: 4,
    textAlign: 'center',
    height: 40,
    lineHeight: 40,
    fontSize: 16
  },
  loginBtnBg: {
    marginTop: 40,
    marginLeft: 50,
    marginRight: 50,
  },
  linearGradient: {
    margin: 30,
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 40,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    width: '100%',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default Login;
