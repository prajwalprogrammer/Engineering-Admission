import React, { useState, useEffect, useRef, useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { Text } from "../../components/typography/text.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
const CameraScreen = ({navigation}) => {
  const cameraRef = useRef(null);
  const {user} = useContext(AuthenticationContext)
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`,photo.uri)
      navigation.goBack()
    }
  };
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <>
      <Camera
        ref={(camera) => (cameraRef.current = camera)}
        style={{ width: "100%", height: "100%" }}
        type={type}
      />
      <TouchableOpacity
        onPress={snap}
        style={{
          backgroundColor: "white",
          height: 80,
          width: 80,
          borderRadius: 40,
          position: "absolute",
          bottom: 20,
          left: 150,
          alignItems:'center',
          justifyContent:'center'
        }}
      />
    </>
  );
};

export default CameraScreen;
