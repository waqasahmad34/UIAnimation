import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Slider2 extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
					<Image
						source={require('../../assets/Walkthrough_image_2.png')}
						style={{ width: wp('60%'), height: hp('45%'), resizeMode: 'cover' }}
					/>
				</View>
				<View style={{ flex: 1, alignItems: 'center' }}>
					<Text style={{ fontSize: hp('2.5%'), fontWeight: 'bold' }}>Promote</Text>
					<Text style={{ fontSize: hp('1.8%') }}>Send or accept sponsoring request to</Text>
					<Text style={{ fontSize: hp('1.8%') }}>share your content with other creators</Text>
				</View>
			</View>
		);
	}
}

export default Slider2;
