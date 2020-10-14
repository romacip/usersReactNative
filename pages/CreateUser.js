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
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import Validation from '../utils/Validation';
import { Button } from 'react-native-paper';

const windowHeight = Dimensions.get('window').height;

const CreateUser = () => {
  let [name, setName] = useState('');
  let [lastName, setLastName] = useState('');
  let [motherLastName, setMotherLastName] = useState('');
  let [email, setEmail] = useState('');

  let [infoUser, setInfoUser] = useState({
    name: 'Nombre(s)',
    lastName: 'Apellido Paterno',
    motherLastName: 'Apellido Materno',
    email: 'correo@ejemplo.com',
    birthday: '1995-07-16'
  });

  const checkUser = () => {
    console.log(infoUser);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}> 
      <View style={{ flex: 1, flexDirection: 'column' }} >
        <View style={{ height: windowHeight/2 }} >
          <Text> Nombre (s): </Text>
          <TextInput 
            style={{height: 40}} 
            placeholder={infoUser.name}
          />
          <Text> Apellido Paterno: </Text>
          <TextInput 
            style={{height: 40}} 
            placeholder={infoUser.lastName}
          />
          <Text> Apellido Materno: </Text>
          <TextInput 
            style={{height: 40}} 
            placeholder={infoUser.motherLastName} />
          <Text> Correo electrónico: </Text>
          <TextInput 
            style={{height: 40}} 
            placeholder={infoUser.email} />
          <Text> Fecha de Nacimiento: </Text>
          <DatePicker
            style={{width: 200}}
            date={infoUser.birthday}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
          />
        </View>
        <View>
          <Button style={{ height: 50, width: 200 }} mode="outlined" onPress={() => console.log('Pressed')}>
            Crear
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default CreateUser;