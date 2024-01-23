import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {

    const ring1padding = useSharedValue(0);
    const ring2padding = useSharedValue(0);

    const navigation = useNavigation();

    useEffect(() => {
      ring1padding.value = 0;
      ring2padding.value = 0;
      setTimeout(() => ring1padding.value = withSpring(ring1padding.value+hp(5)),300);
      setTimeout(() => ring2padding.value = withSpring(ring2padding.value+hp(5)),500);

      setTimeout(() => navigation.navigate('Home'), 3200)
    })
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar style="light"/>

      {/* Logo image */}
      <Animated.View className="bg-white/20 rounded-full" style={{padding: ring2padding}}>
        <Animated.View className="bg-white/20 rounded-full" style={{padding: ring1padding}}>
          <Image source={require('../../assets/images/welcome.png')}
            style={{width: hp(20), height: hp(20)}} />
        </Animated.View>
      </Animated.View>

      {/* App Title and Slogan */}
      <View className="flex items-center space-y-2">
        <Text style={{fontSize: hp(7)}} className="font-bold text-white tracking-widest">
          Foodie
        </Text>
        <Text style={{fontSize: hp(2)}} className="font-medium text-white tracking-widest">
          Food is always right
        </Text>
      </View>
    </View>
  )
}