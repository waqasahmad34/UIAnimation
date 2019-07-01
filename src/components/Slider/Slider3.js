import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Slider3 extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
					<Image
						source={require('../../assets/Walkthrough_image_3.png')}
						style={{ width: wp('60%'), height: hp('45%'), resizeMode: 'contain' }}
					/>
				</View>
				<View style={{ flex: 1, alignItems: 'center' }}>
					<Text style={{ fontSize: hp('2%'), fontWeight: 'bold' }}>Reward</Text>
					<Text style={{ fontSize: hp('1.7%') }}>you like someone's post? Let them know</Text>
					<Text style={{ fontSize: hp('1.7%') }}>with a donation or by watching an ad</Text>
				</View>
			</View>
		);
	}
}

export default Slider3;
