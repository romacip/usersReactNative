import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import Validation from '../utils/Validation';
import { Button } from 'react-native-paper';
import UsersApi from '../apis/UsersApi';
import getUsers from '../__mocks__/UsersApi/getUsers.json';
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
    <Text>{item.id}</Text>
  </TouchableOpacity>
);

const ShowUsers = () => {
  const [selectedId, setSelectedId] = useState(null);

  const textActivity = (userActivity) => {
    if (userActivity.work && userActivity.study) {
      return 'Estudia y trabaja';
    }

    if (!userActivity.work && userActivity.study) {
      return 'Estudia';
    }

    if (userActivity.work && !userActivity.study) {
      return 'Trabaja';
    }

    if (!userActivity.work && !userActivity.study) {
      return 'Es NINI';
    }
  };

  const data = getUsers.map((user) => ({
    id: user.email + '\nBirthday: ' + user.birthday + '\n' + textActivity(user.activity),
    title: user.name + ' ' + user.lastName + ' ' + user.mothersLastName,
  }));

  const renderItem = ({ item }) => {
    const borderColor = item.id === selectedId ? "#FF0000" : "#000000";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{borderColor, borderWidth: 3 }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    height: 'auto',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 'auto',
  },
  title: {
    fontSize: 20,
  },
});

export default ShowUsers;
