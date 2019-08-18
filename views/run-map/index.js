import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
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

class RunMap extends React.Component {
  constructor() {
    super();
    this.state = {
      location: {
        latitude: 30.291374,
        longitude: 120.114241,
      }
    }
    this.setLocation = this.setLocation.bind(this)
  }

  setLocation(location) {
    this.setState({ location })
  }

  render () {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <MapView
          mapType="night"
          showsBuildings
          showsCompass
          rotateEnabled={false}
          showsLocationButton
          style={styles.mapView}
          zoomLevel={17}
          locationEnabled
          coordinate={{
            latitude: 30.291374,
            longitude: 120.114241,
          }}
          onLocation={({ nativeEvent }) => this.setLocation(nativeEvent)}
        >
          <MapView.Marker
            draggable
            title='这是一个可拖拽的标记'
            onDragEnd={({ nativeEvent }) =>
              console.log(`${nativeEvent.latitude}, ${nativeEvent.longitude}`)}
            coordinate={this.state.location}
          />
          <MapView.Polygon
            coordinates={[
              {
                latitude: 30.292053,
                longitude: 120.115378,
              },
              {
                latitude: 30.290253,
                longitude: 120.115378,
              },
              {
                latitude: 30.290142,
                longitude: 120.113565,
              },
              {
                latitude: 30.291262,
                longitude: 120.113393,
              },
              {
                latitude: 30.292171,
                longitude: 120.113747,
              },
              {
                latitude: 30.29206,
                longitude: 120.115271,
              },
            ]}
            strokeWidth={1}
            strokeColor={'#01BFC0'}
            fillColor={'rgba(238, 215, 207, .74)'}
          ></MapView.Polygon>
        </MapView>

        {/* <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
            >
            <Header />
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One 1</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change this
                  screen and then come back to see your edits.
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
                </Text>
              </View>
              <LearnMoreLinks />
            </View>
          </ScrollView>
        </SafeAreaView> */}
        <Footer active={'run-map'}></Footer>
      </Fragment>
    );
  }
};

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
});

export default RunMap;
