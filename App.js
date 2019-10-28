/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import firebase from 'react-native-firebase';

const App = () => {
  const [email, setEmail] = useState('elio.designer@hotmail.com');
  const [password, setPassword] = useState('123456');
  const [auth, setAuth] = useState(false);

  const login = async () => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      setAuth(true);
      console.log(user);
    } catch (err) {
      setAuth(false);
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.imput}
        placeholder={'Digite seu email'}
        value={email}
        onChangeText={e => setEmail(e)}
      />

      <TextInput
        style={styles.imput}
        placeholder={'Digite sua senha'}
        value={password}
        onChangeText={e => setPassword(e)}
      />
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Logar</Text>
      </TouchableOpacity>
      {auth ? <Text>Usuário logado</Text> : <Text>Erro ao se logar</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 20,
  },
  imput: {
    height: 45,
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    borderColor: '#EEE',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  button: {
    height: 45,
    backgroundColor: '#069',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
