//import liraries
import React, {Component} from "react";
import {
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
	Alert,
} from "react-native";

import styles from "./src/styles/ManipulandoStyles";

// create a component
class App extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
		};
	}

	handleEmail = (text) => {
		this.setState({email: text});
	};

	handlePassword = (text) => {
		this.setState({password: text});
	};

	pressed = () => {
		var regex = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i;
		if (regex.test(this.state.email) && this.state.password.length >= 8) {
			Alert.alert("Logando");
		} else {
			Alert.alert("Email Incorreto ou senha incorreta");
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<Image
					source={require("./src/image/reactnative.png")}
					style={styles.logo}
				/>

				<TextInput
					style={styles.input}
					onChangeText={this.handleEmail}
					placeholder='Informe seu e-mail'
				/>

				<TextInput
					style={styles.input}
					onChangeText={this.handlePassword}
					placeholder='Digite sua senha'
					secureTextEntry={true}
				/>

				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						this.pressed();
					}}
				>
					<Text style={styles.buttonText}>Acessar</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

//make this component available to the app
export default App;
