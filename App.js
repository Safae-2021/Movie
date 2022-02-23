import React from 'react';
import { StyleSheet,View} from 'react-native';
import Search from './Components/Search';

export default class App extends React.Component{
  render(){
  return (
    <View style={styles.container}>
      <Search/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5f4352',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});