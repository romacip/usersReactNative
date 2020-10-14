import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  Dimensions,
  FlatList
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import Validation from '../utils/Validation';
import { Button } from 'react-native-paper';
import UsersApi from '../apis/UsersApi';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

class ShowUsers extends Component {
    constructor(props){
        super(props);
    }

    getDataUsers = async () => {
        const data = await UsersApi.getUsers();
        if (data === null || data.length === 0){
            return 
        }
    }

    item = ({ title }) => (
        <View>
          <Text>{title}</Text>
        </View>
    );

    renderItem = ({ item }) => (
        <Item title={item.title} />
    );
    render(){
        return(
            <View style={{ flex: 1 }}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

export default ShowUsers;