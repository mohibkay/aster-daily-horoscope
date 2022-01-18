import React from 'react';

import { View, Text, TextInput, Button } from 'react-native';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  return (
    <View style={{ width: '500px' }}>
      <Text>Welcome to login!</Text>
      <View>
        <TextInput placeholder="Email" />
        <TextInput placeholder="password" />
        <Button title="Login" />
      </View>
    </View>
  );
}

export default Login;
