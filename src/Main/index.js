import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator, Platform, PermissionsAndroid } from 'react-native';
import { ViroARSceneNavigator } from '@viro-community/react-viro';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import DroneScene from './components/DroneScene';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Geolocation from '@react-native-community/geolocation';

MapboxGL.setAccessToken('pk.eyJ1IjoiZmFiaW9hYnJldWl0IiwiYSI6ImNsNDRjdXRlcTA1cTQza25peTk5Ym82OHcifQ.5-d9ftQB2bUWpkzs3anXlA');

export default function Main() {
  const [currentLatitude, setCurrentLatitude] = useState('');
  const [currentLongitude, setCurrentLongitude] = useState('');
  const [watchID, setWatchID] = useState(0);
  const [isObjLoad, setisObjLoad] = useState(false);
  const [reset, setReset] = useState(false);
  const [location, setLocation] = useState();
  const [teste, setTeste] = useState(false);
  const [runAnimation, setRunAnimation] = useState(false);
  const [withShadow, setWithShadow] = useState(false);
  const backgroundColor = runAnimation ? '#e53935' : '#43a047';
  const viroAppProps = {
    reset,
    withShadow,
    startLoad: () => setisObjLoad(true),
    endLoad: () => setisObjLoad(false),
    clearReset: () => setReset(false),
  };

  const callLocation = () => {
    if (Platform.OS === 'ios') {
      getLocation();
    } else {
      const requestLocationPermission = async () => {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Permissão de Acesso à Localização",
            message: "Este aplicativo precisa acessar sua localização.",
            buttonNeutral: "Pergunte-me depois",
            buttonNegative: "Cancelar",
            buttonPositive: "OK"
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        } else {
          alert('Permissão de Localização negada');
        }
      };
      requestLocationPermission();
    }
  }

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const currentLatitude = JSON.stringify(position.coords.latitude);
        const currentLongitude = JSON.stringify(position.coords.longitude);
        setCurrentLatitude(currentLatitude);
        setCurrentLongitude(currentLongitude);
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    const watchID = Geolocation.watchPosition((position) => {
      const currentLatitude = JSON.stringify(position.coords.latitude);
      const currentLongitude = JSON.stringify(position.coords.longitude);
      setCurrentLatitude(currentLatitude);
      setCurrentLongitude(currentLongitude);
    });
    setWatchID(watchID);
  }

  React.useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);
    MapboxGL.locationManager.start();
  }, [])



  React.useEffect(() => {
    if (location) {
      alert(location)
    }
  }, [location])

  React.useEffect(() => {
    PermissionsAndroid.requestMultiple(
      [PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION],
      {
        title: 'Give Location Permission',
        message: 'App needs location permission to find your position.'
      }
    ).then((res) => console.log(res))
  }, [])

  const viroScene = () => {
    return (
      <ViroARSceneNavigator
        viroAppProps={viroAppProps}
        initialScene={{
          scene: DroneScene,
        }}
        style={styles.container}
      />
    );
  };

  const renderAnnotations = () => {
    return (
      <MapboxGL.PointAnnotation
        key="1"
        coordinate={[-47.05090305256928, -22.889144127991102]}
        onSelected={() => setTeste(true)}
      >
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: "red",
            borderRadius: 50,
            borderColor: "#fff",
            borderWidth: 3,
          }}
        />

      </MapboxGL.PointAnnotation>
    );
  };

  const renderAnnotations2 = () => {
    return (
      <MapboxGL.PointAnnotation
        key="2"
        coordinate={[-47.04832550482641, -22.88828932908963]}
        onSelected={() => setTeste(true)}
      >
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: "white",
            borderRadius: 50,
            borderColor: "#fff",
            borderWidth: 3,
          }}
        />
      </MapboxGL.PointAnnotation>
    );
  };

  const renderAnnotations3 = () => {
    return (
      <MapboxGL.PointAnnotation
        key="3"
        coordinate={[-47.048527150635465, -22.88926461393737]}
        onSelected={() => setTeste(true)}
      >
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: "purple",
            borderRadius: 50,
            borderColor: "#fff",
            borderWidth: 3,
          }}
        />
      </MapboxGL.PointAnnotation>
    );
  };

  const renderAnnotations4 = () => {
    return (
      <MapboxGL.PointAnnotation
        key="4"
        coordinate={[-47.04899899083915, -22.888888606230267]}
        onSelected={() => setTeste(true)}
      >
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: "black",
            borderRadius: 50,
            borderColor: "#fff",
            borderWidth: 3,
          }}
        />
      </MapboxGL.PointAnnotation>
    );
  };

  const renderAnnotations5 = () => {
    return (
      <MapboxGL.PointAnnotation
        key="5"
        coordinate={[-47.048509151441976, -22.89031140902405]}
        onSelected={() => setTeste(true)}
      >
        <View
          onPress={() => setTeste(true)}
          style={{
            height: 20,
            width: 20,
            backgroundColor: "green",
            borderRadius: 50,
            borderColor: "#fff",
            borderWidth: 3,
          }}
        />
      </MapboxGL.PointAnnotation>
    );
  };

  const renderAnnotations6 = () => {
    return (
      <MapboxGL.PointAnnotation
        key="6"
        coordinate={[-47.04988962784901, -22.891025882162467]}
        onSelected={() => setTeste(true)}
      >
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: "yellow",
            borderRadius: 50,
            borderColor: "#fff",
            borderWidth: 3,
          }}
        />
      </MapboxGL.PointAnnotation>
    );
  };

  return (
    <View style={styles.container}>
      {teste ? <View style={{ flex: 1 }}>
        {viroScene()}
        <View style={styles.buttonsContent}>
          <TouchableOpacity
            style={styles.shadowButton}
            onPress={() => setTeste(false)}>
            <Icon
              name={'map-outline'}
              size={30}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View> :
        <View style={styles.page}>
          <View style={styles.container2}>
            <MapboxGL.MapView style={styles.map} logoEnabled={false} showUserLocation={true} >
              <MapboxGL.Camera centerCoordinate={[-47.05090305256928, -22.889144127991102]} zoomLevel={15} />
              <MapboxGL.UserLocation visible={true}/>
              <TouchableOpacity>{renderAnnotations()}</TouchableOpacity>
              <TouchableOpacity>{renderAnnotations2()}</TouchableOpacity>
              <TouchableOpacity>{renderAnnotations3()}</TouchableOpacity>
              <TouchableOpacity>{renderAnnotations4()}</TouchableOpacity>
              <TouchableOpacity>{renderAnnotations5()}</TouchableOpacity>
              <TouchableOpacity>{renderAnnotations6()}</TouchableOpacity>
            </MapboxGL.MapView>
          </View>
          <View style={styles.buttonsContent}>
            <TouchableOpacity
              style={styles.shadowButton}
              onPress={callLocation}>
              <Icon
                name={'body-outline'}
                size={30}
                color="white"
              />
            </TouchableOpacity>
            <Text style={styles.text}>
              Latitude: {currentLatitude}
            </Text>
            <Text style={styles.text}>
              Longitude: {currentLongitude}
            </Text>
          </View>
        </View>
      }
    </View>
  )
}
