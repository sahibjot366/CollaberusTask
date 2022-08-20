import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

//data
import membersData from '../../utils/members.json';

//components
import SearchBar from '../../components/searchbar';
import CustomButton from '../../components/custombutton';
import ListItem from '../../components/listitem';

// utility functions
import {filterData} from '../../utils/functions';

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [paginatedData, setPaginatedData] = useState(membersData);

  const updateSearchTerm = newValue => {
    setSearchTerm(newValue);
  };

  const onButtonPress = () => {};

  const onSubmitEditing = () => {
    const filteredData = filterData(searchTerm, paginatedData);
    console.log(paginatedData);
    setPaginatedData(filteredData);
    setPageNumber(1);
  };

  return (
    <View style={styles.containerStyle}>
      <SearchBar
        placeholder="Search by name, email or role"
        value={searchTerm}
        callback={updateSearchTerm}
        style={{marginVertical: 18}}
        onSubmitEditing={onSubmitEditing}
      />
      <View style={styles.topBarStyle}>
        <CustomButton
          title="Delete Selected"
          callback={onButtonPress}
          disabled={selectedItems.length == 0}
        />
        <View style={styles.paginationIconsStyle}>
          <Icon
            name="angle-double-left"
            size={30}
            color={pageNumber == 1 ? '#969696' : 'black'}
            onPress={() => {
              if (pageNumber != 1) setPageNumber(pageNumber - 1);
            }}
          />
          <Text style={styles.pageNumberStyle}>{pageNumber}</Text>
          <Icon
            name="angle-double-right"
            size={30}
            color="black"
            onPress={() => setPageNumber(pageNumber + 1)}
          />
        </View>
      </View>
      <FlatList
        data={paginatedData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <ListItem item={item} />;
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 160}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topBarStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  containerStyle: {
    marginHorizontal: 12,
  },
  paginationIconsStyle: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  pageNumberStyle: {color: 'black'},
});

export default HomeScreen;
