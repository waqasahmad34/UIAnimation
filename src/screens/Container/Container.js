import React, { Component } from 'react';
import { Text, View, Image, Button, TouchableOpacity, Dimensions, Modal, KeyboardAvoidingView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { Item, Input, Label, Icon } from 'native-base';
import FBIcon from 'react-native-vector-icons/FontAwesome';
import GoogleIcon from 'react-native-vector-icons/AntDesign';
import TwitterIcon from 'react-native-vector-icons/AntDesign';
import Swiper from 'react-native-swiper';
import Slider1 from '../../components/Slider/Slider1';
import Slider2 from '../../components/Slider/Slider2';
import Slider3 from '../../components/Slider/Slider3';
import Slider4 from '../../components/Slider/Slider4';

import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

const { width, height } = Dimensions.get('window');

class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFocusedEmail: false,
			isFocusedPassword: false,
			isFocusedPasswordConfirm: false,
			modalVisible: false,
			myText: "I'm ready to get swiped!",
			gestureName: 'none',
			backgroundColor: '#fff'
		};
	}

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

	onSwipeUp(gestureState) {
		this.setState({ modalVisible: true });
	}

	onSwipeDown(gestureState) {
		this.setState({ modalVisible: false });
	}

	onSwipeLeft(gestureState) {
		this.setState({ myText: 'You swiped left!' });
	}

	onSwipeRight(gestureState) {
		this.setState({ myText: 'You swiped right!' });
	}

	onSwipe(gestureName, gestureState) {
		const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
		this.setState({ gestureName: gestureName });
		switch (gestureName) {
			case SWIPE_UP:
				this.setState({ backgroundColor: 'red' });
				break;
			case SWIPE_DOWN:
				this.setState({ backgroundColor: 'green' });
				break;
			case SWIPE_LEFT:
				this.setState({ backgroundColor: 'blue' });
				break;
			case SWIPE_RIGHT:
				this.setState({ backgroundColor: 'yellow' });
				break;
		}
	}

	handleFocus1 = () => {
		this.setState({ isFocusedEmail: true });
	};
	handleBlur1 = () => {
		this.setState({ isFocusedEmail: false });
	};
	handleFocus2 = () => {
		this.setState({ isFocusedPassword: true });
	};
	handleBlur2 = () => {
		this.setState({ isFocusedPassword: false });
	};

	handleFocus3 = () => {
		this.setState({ isFocusedPasswordConfirm: true });
	};
	handleBlur3 = () => {
		this.setState({ isFocusedPasswordConfirm: false });
	};
	render() {
		const config = {
			velocityThreshold: 0.3,
			directionalOffsetThreshold: 80
		};
		return (
			<View style={{ flex: 1 }}>
				<View style={{ flex: 2 }}>
					<Swiper
						activeDotColor="#828282"
						dotColor="#C0C0C0"
						loop={true}
						index={0}
						autoplay={true}
						autoplayTimeout={5}
						bounces={true}
						activeDotStyle={{ width: 13, height: 13, borderRadius: 20 }}
						dotStyle={{ width: 10, height: 10, borderRadius: 20 }}
					>
						<Slider1 />
						<Slider2 />
						<Slider3 />
						<Slider4 />
					</Swiper>
				</View>
				<View style={{ flex: 1, justifyContent: 'center' }}>
					{/* <TouchableOpacity
						onPress={() => this._panel.show()}
						style={{
							flex: 1,
							backgroundColor: '#B2BEEB',
							alignItems: 'center',
							borderTopLeftRadius: 50,
							borderTopRightRadius: 50
						}}
					>
						
					</TouchableOpacity> */}

					<SlidingUpPanel
						draggableRange={{ top: height / 1.077, bottom: height / 3.3 }}
						ref={(i) => (this._panel = i)}
					>
						<View
							style={{
								flex: 1,
								backgroundColor: '#B2BEEB',
								borderTopLeftRadius: 50,
								borderTopRightRadius: 50
							}}
						>
							<View
								style={{
									flex: 0.14,
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<View
									style={{
										borderColor: '#4F4F4F',
										borderRadius: 5,
										width: wp('5%'),
										marginTop: 10,
										borderWidth: 1
									}}
								/>
								<Text style={{ marginTop: 5, fontSize: hp('2%'), fontWeight: 'bold', color: 'white' }}>
									{' '}
									Sign in{' '}
								</Text>
							</View>

							<View
								style={{
									flex: 2
								}}
							>
								<View
									style={{
										flex: 1,
										marginHorizontal: '10%',
										justifyContent: 'space-evenly'
									}}
								>
									<View>
										<Item
											floatingLabel
											style={[
												this.state.isFocusedEmail
													? { borderBottomWidth: 1, borderBottomColor: 'white' }
													: {
															borderBottomWidth: 1,
															borderBottomColor: 'rgba(232,232,232,0.33)'
														}
											]}
										>
											<Label
												style={{
													fontSize: hp('2%'),
													color: 'white'
												}}
											>
												E-mail
											</Label>
											<Input
												style={{ color: 'white' }}
												onBlur={this.handleBlur1}
												onFocus={this.handleFocus1}
												underlineColorAndroid="transparent"
											/>
											<Icon name="ios-at" style={{ color: '#fff' }} />
										</Item>
									</View>

									<View>
										<Item
											floatingLabel
											style={[
												this.state.isFocusedPassword
													? { borderBottomWidth: 1, borderBottomColor: 'white' }
													: {
															borderBottomWidth: 1,
															borderBottomColor: 'rgba(232,232,232,0.33)'
														}
											]}
										>
											<Label
												style={{
													fontSize: hp('2%'),
													color: 'white'
												}}
											>
												Password
											</Label>
											<Input
												style={{ color: 'white' }}
												onBlur={this.handleBlur2}
												onFocus={this.handleFocus2}
												underlineColorAndroid="transparent"
												secureTextEntry={true}
											/>

											<Icon name="ios-key" style={{ color: '#fff' }} />
										</Item>
									</View>

									<TouchableOpacity
										style={{
											alignItems: 'center',
											justifyContent: 'center'
										}}
									>
										<Text
											style={{
												fontSize: hp('2%'),
												fontWeight: 'bold',
												color: 'white',
												textAlign: 'center'
											}}
										>
											Forgot password?
										</Text>
									</TouchableOpacity>

									<TouchableOpacity
										style={{
											alignItems: 'center',
											justifyContent: 'center',
											backgroundColor: 'white',
											borderRadius: 30,
											backgroundColor: 'white',
											padding: 18
										}}
									>
										<Text
											style={{
												fontSize: hp('2%'),
												fontWeight: 'bold',
												color: '#B2BEEB'
											}}
										>
											Login
										</Text>
									</TouchableOpacity>
								</View>

								<View
									style={{
										flex: 1,
										flexDirection: 'row',
										justifyContent: 'space-evenly'
									}}
								>
									<TouchableOpacity>
										<GoogleIcon name="google" size={hp('7%')} color="white" />
									</TouchableOpacity>

									<TouchableOpacity>
										<FBIcon name="facebook" size={hp('7%')} color="white" />
									</TouchableOpacity>

									<TouchableOpacity>
										<TwitterIcon name="twitter" size={hp('7%')} color="white" />
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</SlidingUpPanel>

					<GestureRecognizer
						onSwipe={(direction, state) => this.onSwipe(direction, state)}
						onSwipeUp={(state) => this.onSwipeUp(state)}
						onSwipeDown={(state) => this.onSwipeDown(state)}
						onSwipeLeft={(state) => this.onSwipeLeft(state)}
						onSwipeRight={(state) => this.onSwipeRight(state)}
						config={config}
						style={{
							width: '100%',
							height: '58%',
							position: 'absolute',
							bottom: 0,
							alignItems: 'center',
							borderTopLeftRadius: 50,
							borderTopRightRadius: 50,
							backgroundColor: 'white'
						}}
					>
						<View>
							<View
								style={{
									alignSelf: 'center',
									borderColor: '#4F4F4F',
									width: wp('5%'),
									borderRadius: 5,
									marginTop: 10,
									borderWidth: 1
								}}
							/>
							<Text style={{ marginTop: 5, fontSize: hp('2%'), fontWeight: 'bold' }}> Sign up </Text>
						</View>
					</GestureRecognizer>

					{this.state.modalVisible ? (
						<KeyboardAvoidingView style={{ position: 'absolute', bottom: 0 }}>
							<View
								style={{
									backgroundColor: '#B2BEEB',
									width: width,
									height: height / 1.09,
									borderTopLeftRadius: 50,
									borderTopRightRadius: 50
								}}
							>
								<TouchableOpacity
									onPress={() => this.setState({ modalVisible: !this.state.modalVisible })}
									style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}
								>
									<View
										style={{
											borderColor: '#4F4F4F',
											borderRadius: 5,
											width: wp('5%'),
											marginTop: 10,
											borderWidth: 1
										}}
									/>
									<Text
										style={{ marginTop: 5, fontSize: hp('2%'), fontWeight: 'bold', color: 'white' }}
									>
										{' '}
										Create account{' '}
									</Text>
								</TouchableOpacity>
								<View style={{ flex: 2 }}>
									<View
										style={{
											flex: 1,
											marginHorizontal: '10%',
											justifyContent: 'space-evenly'
										}}
									>
										<View>
											<Item
												floatingLabel
												style={[
													this.state.isFocusedEmail
														? { borderBottomWidth: 1, borderBottomColor: 'white' }
														: {
																borderBottomWidth: 1,
																borderBottomColor: 'rgba(232,232,232,0.33)'
															}
												]}
											>
												<Label
													style={{
														fontSize: hp('2%'),
														color: 'white'
													}}
												>
													E-mail
												</Label>
												<Input
													style={{ color: 'white' }}
													onBlur={this.handleBlur1}
													onFocus={this.handleFocus1}
													underlineColorAndroid="transparent"
												/>
												<Icon name="ios-at" style={{ color: '#fff' }} />
											</Item>
										</View>

										<View>
											<Item
												floatingLabel
												style={[
													this.state.isFocusedPassword
														? { borderBottomWidth: 1, borderBottomColor: 'white' }
														: {
																borderBottomWidth: 1,
																borderBottomColor: 'rgba(232,232,232,0.33)'
															}
												]}
											>
												<Label
													style={{
														fontSize: hp('2%'),
														color: 'white'
													}}
												>
													Password
												</Label>
												<Input
													style={{ color: 'white' }}
													onBlur={this.handleBlur2}
													onFocus={this.handleFocus2}
													underlineColorAndroid="transparent"
													secureTextEntry={true}
												/>

												<Icon name="ios-key" style={{ color: '#fff' }} />
											</Item>
										</View>

										<View>
											<Item
												floatingLabel
												style={[
													this.state.isFocusedPasswordConfirm
														? { borderBottomWidth: 1, borderBottomColor: 'white' }
														: {
																borderBottomWidth: 1,
																borderBottomColor: 'rgba(232,232,232,0.33)'
															}
												]}
											>
												<Label
													style={{
														fontSize: hp('2%'),
														color: 'white'
													}}
												>
													Confirm Password
												</Label>
												<Input
													style={{ color: 'white' }}
													onBlur={this.handleBlur2}
													onFocus={this.handleFocus2}
													underlineColorAndroid="transparent"
													secureTextEntry={true}
												/>

												<Icon name="ios-key" style={{ color: '#fff' }} />
												<Icon name="ios-key" style={{ color: '#fff' }} />
											</Item>
										</View>

										<TouchableOpacity
											style={{
												alignItems: 'center',
												justifyContent: 'center',
												backgroundColor: 'white',
												borderRadius: 30,
												backgroundColor: 'white',
												padding: 18
											}}
										>
											<Text
												style={{
													fontSize: hp('2%'),
													fontWeight: 'bold',
													color: '#B2BEEB'
												}}
											>
												Sign up
											</Text>
										</TouchableOpacity>
									</View>
								</View>
								<View
									style={{
										flex: 1,
										flexDirection: 'row',
										justifyContent: 'space-evenly'
									}}
								>
									<TouchableOpacity>
										<GoogleIcon name="google" size={hp('7%')} color="white" />
									</TouchableOpacity>

									<TouchableOpacity>
										<FBIcon name="facebook" size={hp('7%')} color="white" />
									</TouchableOpacity>

									<TouchableOpacity>
										<TwitterIcon name="twitter" size={hp('7%')} color="white" />
									</TouchableOpacity>
								</View>
							</View>
						</KeyboardAvoidingView>
					) : null}

					{/* <SlidingUpPanel
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
							<Text>Here is the content inside panel</Text>
							<Button title="Hide" onPress={() => this._panel2.hide()} />
						</View>
					</SlidingUpPanel> */}
				</View>
			</View>
		);
	}
}

export default Container;
