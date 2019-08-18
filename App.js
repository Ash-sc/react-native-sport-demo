import React, { Component } from 'react';
import Login from './views/login/index';
import UserCenter from './views/user-center/index';
import MedalRecord from './views/user-center/medal-record';
import RunRecord from './views/user-center/run-record';
import ScoreRecord from './views/integral/score-record';
import RunMap from './views/run-map/index';
import Integral from './views/integral/index';
import {
  Scene,
  Router,
  Stack,
  Actions,
} from 'react-native-router-flux';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import SplashScreen from "rn-splash-screen";

class App extends Component {
  render() {
    setTimeout(() => {
      SplashScreen.hide()
    }, 10)

    return (
      <Router>
        <Scene key="root">
          <Scene key="run_map" component={RunMap} hideNavBar={true} />
          <Scene key="login" component={Login} hideNavBar={true} />
          <Scene key="integral" component={Integral} hideNavBar={true} />
          <Scene key="user_center" component={UserCenter} hideNavBar={true} />
          <Scene key="run_record" component={RunRecord} hideNavBar={true} />
          <Scene key="medal_record" component={MedalRecord} hideNavBar={true} />
          <Scene key="score_record" component={ScoreRecord} hideNavBar={true} />
        </Scene>
      </Router>
    )
  }
}

console.disableYellowBox = true;

export default App;
