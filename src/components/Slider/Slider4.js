import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Slider4 extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
					<Image
						source={require('../../assets/4.png')}
						style={{ width: wp('65%'), height: hp('50%'), resizeMode: 'contain' }}
					/>
				</View>
				<View style={{ flex: 1, alignItems: 'center' }}>
					<Text style={{ fontSize: hp('2%'), fontWeight: 'bold' }}>Discover</Text>
					<Text style={{ fontSize: hp('1.7%') }}>Post or unlock premium content by</Text>
					<Text style={{ fontSize: hp('1.7%') }}>ssetting the amount of your choice</Text>
				</View>
			</View>
		);
	}
}

export default Slider4;
