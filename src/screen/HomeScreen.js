import React from 'react';
import { Text, View, Button} from 'react-native';
import { commonStyles } from '../styles/commonStyles';

export function HomeScreen({navigation}){
    return (
      <View style={commonStyles.container} >
        <Text style = {commonStyles.text}>ミミッキュ</Text>
        <Button
          title = "詳細へ"
          onPress={() => navigation.navigate('Detail')}
        />
      </View>
    );
}
