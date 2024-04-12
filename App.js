import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import { COLORS, icons, images, SIZES, FONTS } from './src/constants';

const App = () => {
  return (
    <View>
      <Text style={{ fontFamily: "Poppins-Bold" }}>App</Text>
      <Image source={icons.check} />
      <Image source={images.boy} />
      <View style={{ marginTop: SIZES.h5, marginBottom: SIZES.h4 }}>
        <Text style={{ ...FONTS.body4, color: COLORS.pink }}>My name is Favour, I'm the most handsome boy in Africa.</Text>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})













































// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import MainNavigator from './screens/MainNavigator';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <MainNavigator />
//     </NavigationContainer>
//   );
// };

// export default App;

