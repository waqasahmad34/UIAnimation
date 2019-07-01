import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Slider1 extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
					<Image
						source={require('../../assets/Walkthrough_image_1.png')}
						style={{ width: wp('60%'), height: hp('45%'), resizeMode: 'contain' }}
					/>
				</View>
				<View style={{ flex: 1, alignItems: 'center' }}>
					<Text style={{ fontSize: hp('2%'), fontWeight: 'bold' }}>Share</Text>
					<Text style={{ fontSize: hp('1.7%') }}>Show your content and what </Text>
					<Text style={{ fontSize: hp('1.7%') }}>you love to the world</Text>
				</View>
			</View>
		);
	}
}

export default Slider1;
