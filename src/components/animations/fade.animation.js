import React, { useEffect, useRef } from "react";
import { StyleSheet, Animated, Text, View } from "react-native";

const FadeInView = ({ duration = 600, ...props }) => {
  const fadeAni = useRef(new Animated.Value(0)).current;
  useEffect(() => {
      Animated.timing(fadeAni,{
          toValue:1,
          duration:duration,
          useNativeDriver:true
      }).start()
  }, [fadeAni,duration])
  return (
    <Animated.View style={{ ...props.style, opacity: fadeAni }}>
      {props.children}
    </Animated.View>
  );
};

export default FadeInView;
