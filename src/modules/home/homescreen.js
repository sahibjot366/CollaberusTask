import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

//data
import membersData from '../../utils/members.json';

//components
import SearchBar from '../../components/searchbar';
import CustomButton from '../../components/custombutton';
import ListItem from '../../components/listitem';

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const updateSearchTerm = newValue => {
    setSearchTerm(newValue);
  };

  const onButtonPress = () => {};

  return (
    <View style={styles.containerStyle}>
      <SearchBar
        placeholder="Search by name, email or role"
        value={searchTerm}
        callback={updateSearchTerm}
      />
      <FlatList
        data={membersData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <ListItem />;
        }}
      />
      <View style={styles.bottomBarStyle}>
        <CustomButton
          title="Delete Selected"
          callback={onButtonPress}
          containerStyle={{alignSelf: 'flex-start', marginLeft: 12}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBarStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerStyle: {
    marginHorizontal: 8,
  },
});

export default HomeScreen;
