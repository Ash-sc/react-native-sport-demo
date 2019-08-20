import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';
import { MapView } from 'react-native-amap3d';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Footer from '../footer/index';
import {
  Actions,
} from 'react-native-router-flux';

class RunMap extends React.Component {
  constructor() {
    super();
    this.state = {
      location: {
        latitude: 30.298254,
        longitude: 120.105818,
      },
      showDetail: false,
    }
    this.setLocation = this.setLocation.bind(this)
  }

  setLocation(location) {
    // this.setState({ location })
  }

  selectPoint() {
    this.setState({ showDetail: true })
  }

  startTask() {
    Actions.start_task()
  }

  render () {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <MapView
          mapType="night"
          showsBuildings
          showsZoomControls={false}
          // showsCompass
          rotateEnabled={false}
          // showsLocationButton
          style={styles.mapView}
          zoomLevel={16}
          locationEnabled
          coordinate={{
            latitude: 30.299504,
            longitude: 120.107621,
          }}
          onLocation={({ nativeEvent }) => this.setLocation(nativeEvent)}
        >
          <MapView.Marker
            // draggable
            title='城西银泰线'
            onDragEnd={({ nativeEvent }) =>
              console.log(`${nativeEvent.latitude}, ${nativeEvent.longitude}`)}
            coordinate={this.state.location}
            onPress={() => this.selectPoint()}
          />
          <MapView.Polygon
            coordinates={[
              {
                latitude: 30.298254,
                longitude: 120.105818,
              },
              {
                latitude: 30.300153,
                longitude: 120.105754,
              },
              {
                latitude: 30.300356,
                longitude: 120.107503,
              },
              {
                latitude: 30.301051,
                longitude: 120.109359,
              },
              {
                latitude: 30.299921,
                longitude: 120.109423,
              },
              {
                latitude: 30.298856,
                longitude: 120.109445,
              },
            ]}
            strokeWidth={2}
            strokeColor={'#01BFC0'}
            fillColor={'rgba(238, 215, 207, .74)'}
          ></MapView.Polygon>
        </MapView>

        <View style={{ position: 'absolute', top: 20, width: '100%', left: 0 }}>
          <TextInput
            style={styles.hoverSearch}
            placeholder='搜索行政区或区域内路段'
            placeholderTextColor={txtColor}
            maxLength={20}
          ></TextInput>
        </View>
        <View style={{ position: 'absolute', top: 90, right: 20, alignItems: 'flex-end', padding: 10, backgroundColor: sectionBg, borderRadius: 4 }}>
          <Text style={{ fontSize: 16, marginBottom: 5 }}>本周新增积分</Text>
          <Text style={{ fontSize: 18 }}>3250</Text>
        </View>

        {this.state.showDetail && <View
          style={{ position: 'absolute', bottom: 50, left: 0, padding: 10, width: '100%', backgroundColor: sectionBg, flexDirection: 'row' }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 14, marginBottom: 5 }}>路线名称: 环城西银泰线</Text>
            <Text style={{ fontSize: 14, marginBottom: 5 }}>
            路线长度: 
            <Text style={{ fontSize: 18 }}> 2.2 </Text>
            公里</Text>
            <Text style={{ fontSize: 14 }}>本周完成: 
            <Text style={{ fontSize: 18 }}> 1255 </Text>
            人</Text>
          </View>
          <View style={{ paddingLeft: 20, paddingRight: 20, borderStyle: 'solid', borderColor: txtColor, borderLeftWidth: 2, alignItems: 'center' }}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>900积分</Text>
            <Text style={{ fontSize: 16, padding: 5, backgroundColor: '#01b5c7', borderRadius: 4 }}
              onPress={() => this.startTask()}
            >开始任务</Text>
          </View>
        </View>}

        <Footer active={'run-map'}></Footer>
      </Fragment>
    );
  }
}

const bgColor = '#252E37'
const panelBg = '#313C46'
const iconColor = '#F8F9FB'
const txtColor = '#F8F9FB'
const sectionBg = 'rgba(36, 44, 52, 0.8)'

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  mapView: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  hoverSearch: {
    color: txtColor,
    height: 46,
    lineHeight: 26,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 18,
    backgroundColor: sectionBg,
    borderRadius: 4,
  }
});

export default RunMap;
