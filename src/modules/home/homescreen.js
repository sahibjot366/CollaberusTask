import React, {useState, useEffect} from 'react';
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
  const [data, setData] = useState(membersData);
  const [paginatedData, setPaginatedData] = useState(data);

  const updateSearchTerm = newValue => {
    setSearchTerm(newValue);
    if (newValue == '') setData(membersData);
  };

  const onButtonPress = () => {
    const filteredData = data.filter(item => {
      if (!selectedItems.includes(item.id)) {
        return true;
      }
      return false;
    });
    setData(filteredData);
    setSelectedItems([]);
  };

  const deleteItem = id => {
    const filteredData = data.filter(item => item.id != id);
    setData(filteredData);
  };

  const onSubmitEditing = () => {
    const filteredData = filterData(searchTerm, data);
    setData(filteredData);
    setPageNumber(1);
  };

  const selectDeselectItem = (id, addOrRemove) => {
    let newSelectedItems;
    if (addOrRemove) {
      newSelectedItems = [...selectedItems, id];
      setSelectedItems(newSelectedItems);
    } else {
      newSelectedItems = selectedItems.filter(item => item != id);
    }
    setSelectedItems(newSelectedItems);
  };

  const updateData = (id, name, email, role) => {
    const updatedData = data.map(item => {
      if (item.id == id) {
        item.name = name;
        item.email = email;
        item.role = role;
      }
      return item;
    });
    setData(updatedData);
  };

  const paginateData = () => {
    const lowerBound = (pageNumber - 1) * 10;
    let upperBound = pageNumber * 10;
    if (upperBound > data.length) upperBound = data.length;

    setPaginatedData(data.slice(lowerBound, upperBound));
  };
  useEffect(() => {
    paginateData();
  }, [data, pageNumber]);

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
            color={pageNumber * 10 >= data.length ? '#969696' : 'black'}
            onPress={() => {
              if (pageNumber * 10 < data.length) setPageNumber(pageNumber + 1);
            }}
          />
        </View>
      </View>
      <FlatList
        data={paginatedData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <ListItem
              item={item}
              selectDeselectItem={selectDeselectItem}
              deleteItem={deleteItem}
              updateData={updateData}
            />
          );
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
