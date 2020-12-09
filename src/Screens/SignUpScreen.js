import { Text,Input, Item, Label, Toast } from "native-base";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ButtonWithTxt from "../CommonUtils/ButtonWithTxt";
import { Colors } from "../Styles/AppStyles";

export default function SignUpScreen({ navigation }) {
 
  const [loading, setLoading] = useState(false);
  const [credential, setCredential] = useState({
    firstName:"",
    lastName:"",
    email: "",
    password: "",
  });
  const handleFirstName = (event) => {
    setCredential({
      ...credential,
      firstName: event,
    });
  };
  const handleLastName = (event) => {
    setCredential({
      ...credential,
      lastName: event,
    });
  };
  const handleEmail = (event) => {
    setCredential({
      ...credential,
      email: event,
    });
  };
  const handlePassword = (event) => {
    setCredential({
      ...credential,
      password: event,
    });
  };
  
 

  const handleSubmit = () => {
    const reg = new RegExp(
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    );

   if (credential.firstName.length === 0) {
      Toast.show({
        text: "Email is empty",
        position: "bottom",
        type: "danger",
        duration: 2000,
      });
    } else if (credential.lastName.length === 0) {
        Toast.show({
          text: "Email is empty",
          position: "bottom",
          type: "danger",
          duration: 2000,
        });
      }else if (credential.email.length === 0) {
        Toast.show({
          text: "Email is empty",
          position: "bottom",
          type: "danger",
          duration: 2000,
        });
      } else if (!reg.test(credential.email)) {
        Toast.show({
          text: "Invalid Email",
          position: "bottom",
          type: "danger",
          duration: 2000,
        });
      } else if (credential.password.length === 0) {
        Toast.show({
          text: "Password is empty",
          position: "bottom",
          type: "danger",
        });
      }
       else {
        Toast.show({
            text: "Account created succesfully",
            position: "bottom",
            type: "success",
          });
          navigation.navigate("HomeScreen")       
    }
  };


  return (
    <>
      <View style={styles.container1}>
        <Text style={styles.textStyle1}>SignUp</Text>
      </View>
      <View style={styles.container2}>
      <Item stackedLabel style={styles.lineWidth}>
          <Label style={styles.inputTextStyle1}>First Name</Label>
          <Input
            value={credential.firstName}
            defaultValue={credential.firstName}
            onChangeText={(event) => handleFirstName(event)}
          />
        </Item>
        <Item stackedLabel style={styles.lineWidth}>
          <Label style={styles.inputTextStyle1}>Last Name</Label>
          <Input
            value={credential.lastName}
            defaultValue={credential.lastName}
            onChangeText={(event) => handleLastName(event)}
          />
        </Item>
        <Item stackedLabel style={styles.lineWidth}>
          <Label style={styles.inputTextStyle1}>Email</Label>
          <Input
            value={credential.email}
            defaultValue={credential.email}
            onChangeText={(event) => handleEmail(event)}
          />
        </Item>
        <Item stackedLabel style={styles.lineWidth}>
          <Label style={styles.inputTextStyle1}>Password</Label>
          <Input
            secureTextEntry={true}
            value={credential.password}
            defaultValue={credential.password}
            onChangeText={(event) => handlePassword(event)}
          />
        </Item>
        <Text onPress={()=>navigation.navigate('LoginScreen')} style={styles.passTextStyle}>Already have an account?SignIn</Text>
        <ButtonWithTxt
          text="SignUp"
          credential={credential}
          setCredential={setCredential}
          press={handleSubmit}
          containerStyle={ styles.loginContainer }
          textUpperCase={false}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container1: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "15%",
  },
  container2: {
    marginTop: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle1: {
    fontSize: 22,
    color: Colors.primaryColor.black,
    fontWeight: "600",
  },
  inputTextStyle1: {
    fontWeight: "600",
    fontSize: 11,
    color: Colors.loginInputTextColor.lighGrey,
  },
  passTextStyle: {
    color: Colors.secondaryColor.blue,
    textDecorationLine: "underline",
    marginTop: "5%",
    fontSize: 12,
    fontWeight: "600",
  },
  buttonStyle: {
    backgroundColor: Colors.secondaryColor.blue,
    width: "50%",
    justifyContent: "center",
    alignContent: "center",
  },
  logTextStyle: {
    fontWeight: "900",
    color: Colors.whiteColor.white,
  },
  lineWidth: {
    width: "60%",
  },
  loginContainer:{
    marginTop:"30%",
    flexDirection:"row"
  }
});
