import React, { Component } from 'react';
import { Text, View, Image, Button, TouchableOpacity, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SlidingUpPanel1 from 'rn-sliding-up-panel';

const { width, height } = Dimensions.get('window');

class Signin extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<SlidingUpPanel1
					draggableRange={{ top: height / 1.1, bottom: height / 6.2 }}
					ref={(c) => (this._panel = c)}
				>
					<View
						style={{
							flex: 1,
							backgroundColor: '#fff',
							alignItems: 'center',
							borderTopLeftRadius: 50,
							borderTopRightRadius: 50
						}}
					>
						<View
							style={{
								borderColor: '#4F4F4F',
								width: wp('5%'),
								borderRadius: 5,
								marginTop: 10,
								borderWidth: 1
							}}
						/>
						<Text style={{ marginTop: 5, fontSize: hp('2%'), fontWeight: 'bold' }}> Sign up </Text>
						{/* <Text>Here is the content inside panel</Text>
							<Button title="Hide" onPress={() => this._panel2.hide()} /> */}
					</View>
				</SlidingUpPanel1>
			</View>
		);
	}
}

export default Signin;
