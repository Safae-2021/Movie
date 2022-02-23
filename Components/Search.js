// Components/Search.js
import React from 'react'
import {StyleSheet, View, TextInput, Button , FlatList, Text} from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import {getFilmsFromApiWithSearchedText} from '../API/TMDBApi'

class Search extends React.Component {

 _loadFilms() {
    getFilmsFromApiWithSearchedText("star").then(data => console.log(data));
}

//  constructor(props) {
//     super(props)
   
//   }


  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder='Titre du film'/>
        <Button style={styles.search} color={"black"} title='Search' onPress={() => this._loadFilms()}/>
         <FlatList
        data = {films}
        keyExtractor ={(item) => item.id.toString()}
        renderItem={({item}) => <FilmItem film={item} />}
        />
{/*          
           <View style={{ flex: 1, height: 20 }}>
             <Image  source={{ require: ('./images/bk-p.jpeg' )}} />
          </View> */}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    width:'100%',
    // marginTop: 40
    
  },
  textinput: {
    marginTop:5,
    marginLeft: 5,
    marginRight: 5,
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },

  search: {
    marginTop:10,
    width:10,


  }
})

export default Search







