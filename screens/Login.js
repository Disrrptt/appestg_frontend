import react, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Input, Text } from 'react-native-elements';
import styles from '../style/MainStyle';


export default function Login({navigation}) {
  
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  
  const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
    })
  }
  
  
  return (
    <View style={styles.container}>
      <Text h3>Entre no APP</Text>
      <Input 
       placeholder="E-mail"
       leftIcon={{ type: 'font-awsome' , name: 'person' }}
       onChangeText={value => setEmail(value)}
       keyboardType='email-address'
      />
      <Input 
       placeholder="Sua senha"
       leftIcon={{ type: 'font-awsome' , name: 'lock' }}
       onChangeText={value => setPassword(value)}
       secureTextEntry={true}
      />
      <Button
        title="Entrar"
        size={24}
        color="#f194ff"
        onPress={() => entrar()}
      />

    </View>
  );
}


