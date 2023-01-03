import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../../customButton/CustomButton'
import CustomInput from '../../../customInput/CustomInput'
import { useNavigation } from '@react-navigation/native'
import { setSignIn } from './UserAuthSlice'
import { useDispatch } from 'react-redux'

const LoggaInView = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { navigate } = useNavigation<Nav>();
    type Nav = {
      navigate: (value: string) => void;
    };

    function LoginHandle(value:string){
      const user = {
        isLoggedIn: true,
      };
      navigate(value)
      dispatch(setSignIn(user));
    }

  return (
    <View style={styles.container}>
    <View>
      <CustomInput
        placeholder=""
        value={username}
        setValue={setUsername}
        secureTextEntry={false}
      />
           <CustomInput
              placeholder=""
              value={password}
              setValue={setPassword}
              secureTextEntry={true}
            />
      <CustomButton
        text="Logga in"
        onPress={() => LoginHandle("Patienter")}
      />
    </View>
  </View>
  )
}

export default LoggaInView

const styles = StyleSheet.create({  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "aliceblue",
  },})



