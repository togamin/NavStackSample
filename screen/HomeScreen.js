import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export function HomeScreen({navigation}){
    return (
      <View style={styles.container} >
        <Text style = {styles.pokeName}>ミミッキュ</Text>
        <Button
          title = "詳細へ"
          onPress={() => navigation.navigate('Detail')}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokeName:{
    fontSize:18,
    margin:18,
  }
});