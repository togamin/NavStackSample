import React from 'react';
import { Text, View, Image} from 'react-native';
import { commonStyles } from '../styles/commonStyles';

export function DetailScreen(){
    return (
      <View style={commonStyles.container} >
        <Text style={commonStyles.text} >ミミッキュ詳細</Text>
        <Image
          source={require('../../assets/mmk.png')}
          resizeMode='contain'
          style={{ width: 200, height: 200 }}
        />
        <Text style={commonStyles.text} >ピカチュウに化けていたことをばらしたヤツは容赦しない。刺し違えてでもかならず倒す。</Text>
      </View>
    );
}

