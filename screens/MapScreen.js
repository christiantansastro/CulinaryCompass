import { View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon2 from "react-native-vector-icons/Ionicons";
import color from "../config/color";

const MapScreen = ({ route, navigation }) => {
  const { latitude, longitude, latitudeDelta, longitudeDelta } = route.params;

  const [mapRegion, setMapRegion] = useState({
    latitude: latitude,
    latitudeDelta: latitudeDelta,
    longitude: longitude,
    longitudeDelta: longitudeDelta,
  });

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: color.bg_100 }}></SafeAreaView>
      <View style={{ backgroundColor: color.bg_100 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomePage")}
          style={{ padding: 5, width: "10%" }}
        >
          <Icon2 name="arrow-back" size={30} />
        </TouchableOpacity>
      </View>
      <MapView style={{ width: "100%", height: "100%" }} region={mapRegion}>
        <Marker coordinate={mapRegion} title="Marker" />
      </MapView>
    </View>
  );
};

export default MapScreen;
