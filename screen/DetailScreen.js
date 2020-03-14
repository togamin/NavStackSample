import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export function DetailScreen(){
    return (
      <View style={styles.container} >
        <Text style={styles.text} >ミミッキュ詳細</Text>
        <Image
          source={require('../assets/mmk.png')}
          resizeMode='contain'
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.text} >ピカチュウに化けていたことをばらしたヤツは容赦しない。刺し違えてでもかならず倒す。</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:18,
    margin:18,
  }
});