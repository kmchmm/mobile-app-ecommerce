import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function Sets () {


    const [isPublicOpen, setPublicOpen] = useState(false);
    const [isPrivateOpen, setPrivateOpen] = useState(false);
    const togglePublic = () =>{
      setPublicOpen(!isPublicOpen)
    }
    const togglePrivate = () =>{
      setPrivateOpen(!isPrivateOpen)
    }

    const [fontsloaded] = useFonts({
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-BoldItalic': require('../assets/fonts/Poppins-BoldItalic.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
      });

      if(!fontsloaded){
        return undefined;
      }
    return (
        <SafeAreaView>
            <ScrollView>
                <Text style = {{textAlign: 'center', fontSize: 28, fontFamily: 'Poppins-Bold', marginTop: 15}}>SETS</Text>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '100%'}}>
                    <View style={{width: '45%'}}>
                        <TouchableOpacity style={styles.card} onPress={togglePublic}>
                            <Text style={[ styles.cardHeader ,{ fontSize: 16}]}>FILTERS</Text>
                            <View style={styles.arrowContent}>
                                <AntDesign name={isPublicOpen ? 'up' : 'down'} size ={20} ></AntDesign>
                            </View>
                        </TouchableOpacity>
                            {isPublicOpen && (
                            <View style={styles.cardContent}>
                                <Text style={{ fontSize: 16}}>sample text</Text>
                            </View>
                            )}

                    </View>
                    <View style={{width: '45%'}}>
                        <TouchableOpacity style={styles.card} onPress={togglePublic}>
                            <Text style={[ styles.cardHeader ,{ fontSize: 16}]}>SORT</Text>
                            <View style={styles.arrowContent}>
                                <AntDesign name={isPublicOpen ? 'up' : 'down'} size ={20} ></AntDesign>
                            </View>
                        </TouchableOpacity>
                            {isPublicOpen && (
                            <View style={styles.cardContent}>
                                <Text style={{ fontSize: 16}}>sample text</Text>
                            </View>
                            )}
                    </View>
                </View>
                <Text style = {{textAlign: 'center', fontSize: 14, fontFamily: 'Poppins-Regular'}}>0000 Products</Text>
                <View style= {[styles.brasGridImagesContainer, {marginTop: 20}]}>
                    <View style={[styles.brasGridImagesWrap]}>
                        <Image source={require('../assets/images/sets/lua-yoga-sets-10.png')}
                            style ={[styles.brasGridImages]}
                        />
                        <Text style={{backgroundColor: '#f2f2f2', marginBottom: 9, marginTop: 5}}>BACK IN STOCK</Text>
                        <Text style={{fontFamily: 'Poppins-Bold'}}>Lorem Ipsum is simply dummy text.</Text>
                        <Text>(Color)</Text>
                        <Text style={{fontSize: 14}}>$0.00</Text>
                    </View>
                    <View style={[styles.brasGridImagesWrap]}>
                        <Image source={require('../assets/images/sets/lua-yoga-sets-11.png')}
                            style ={[styles.brasGridImages]}
                        />
                        <Text style={{backgroundColor: '#f2f2f2', marginBottom: 9, marginTop: 5}}>BACK IN STOCK</Text>
                        <Text style={{fontFamily: 'Poppins-Bold'}}>Lorem Ipsum is simply dummy text.</Text>
                        <Text>(Color)</Text>
                        <Text style={{fontSize: 14}}>$0.00</Text>
                    </View>
                </View>

                <View style= {[styles.brasGridImagesContainer, {marginTop: 20}]}>
                    <View style={[styles.brasGridImagesWrap]}>
                        <Image source={require('../assets/images/sets/lua-yoga-sets-12.png')}
                            style ={[styles.brasGridImages]}
                        />
                        <Text style={{backgroundColor: '#f2f2f2', marginBottom: 9, marginTop: 5}}>BACK IN STOCK</Text>
                        <Text style={{fontFamily: 'Poppins-Bold'}}>Lorem Ipsum is simply dummy text.</Text>
                        <Text>(Color)</Text>
                        <Text style={{fontSize: 14}}>$0.00</Text>
                    </View>
                    <View style={[styles.brasGridImagesWrap]}>
                        <Image source={require('../assets/images/sets/lua-yoga-sets-15.png')}
                            style ={[styles.brasGridImages]}
                        />
                        <Text style={{backgroundColor: '#f2f2f2', marginBottom: 9, marginTop: 5}}>BACK IN STOCK</Text>
                        <Text style={{fontFamily: 'Poppins-Bold'}}>Lorem Ipsum is simply dummy text.</Text>
                        <Text>(Color)</Text>
                        <Text style={{fontSize: 14}}>$0.00</Text>
                    </View>
                </View>
                <View style={[styles.footer, {paddingLeft: 10, paddingRight: 10}]}>
                    <Text style={{marginTop: 20, color: '#ffffff', fontFamily: 'Poppins-Bold', fontSize: 16}}>
                    Sign up for our newsletter - enter your email below
                    </Text>
                    <TextInput style={{ height: 40, width: '80%', borderColor: '#ffffff', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
                    placeholder="Enter your email"/>
                    
                    <Text style={{marginTop: 20, color: '#ffffff', fontFamily: 'Poppins-Regular'}}>
                    By entering your email address, you agree to our Privacy Policy and will receive Alo Yoga offers, promotions and other commercial messages. You may unsubscribe at any time.
                    </Text>

                    <Text style={{marginTop: 20, color: '#ffffff', fontFamily: 'Poppins-Bold', fontSize: 16}}>
                    Get the App
                    </Text>

                    <Text style={{marginTop: 20, color: '#ffffff', fontFamily: 'Poppins-Bold', fontSize: 16}}>
                    Follow Us
                    </Text>

                    <TouchableOpacity style={styles.card} onPress={togglePublic}>
                    <Text style={[ styles.cardHeader ,{color: '#ffffff', fontSize: 16}]}>Customer Service</Text>
                    <View style={styles.arrowContent}>
                        <AntDesign name={isPublicOpen ? 'up' : 'down'} size ={20} color= '#ffffff'></AntDesign>
                    </View>
                    </TouchableOpacity>
                    {isPublicOpen && (
                    <View style={styles.cardContent}>
                        <Text style={{color: '#ffffff', fontSize: 16}}>sample text</Text>
                    </View>
                    )}

                    <TouchableOpacity style={styles.card} onPress={togglePublic}>
                    <Text style={[ styles.cardHeader ,{color: '#ffffff', fontSize: 16}]}>My Account</Text>
                    <View style={styles.arrowContent}>
                        <AntDesign name={isPublicOpen ? 'up' : 'down'} size ={20} color= '#ffffff'></AntDesign>
                    </View>
                    </TouchableOpacity>
                    {isPublicOpen && (
                    <View style={styles.cardContent}>
                        <Text style={{color: '#ffffff', fontSize: 16}}>sample text</Text>
                    </View>
                    )}

                    <TouchableOpacity style={styles.card} onPress={togglePublic}>
                    <Text style={[ styles.cardHeader ,{color: '#ffffff', fontSize: 16}]}>Information</Text>
                    <View style={styles.arrowContent}>
                        <AntDesign name={isPublicOpen ? 'up' : 'down'} size ={20} color= '#ffffff'></AntDesign>
                    </View>
                    </TouchableOpacity>
                    {isPublicOpen && (
                    <View style={styles.cardContent}>
                        <Text style={{color: '#ffffff', fontSize: 16}}>sample text</Text>
                    </View>
                    )}

                    <View style={{marginTop: 10, paddingRight: 20}}>
                    <Text style={{color: '#ffffff', fontSize: 14}}>   
                        For applicable countries, duties &amp; taxes will be automatically calculated and displayed during checkout. Depending on the country, you will have the option to choose DDP (Delivery Duty Paid) or DDU (Delivery Duty Unpaid).
                    </Text>
                    </View>

                    <View style={{marginTop: 10, paddingRight: 20}}>
                    <Text style={{color: '#ffffff', fontSize: 14}}>   
                        &copy; 2024 LuaYoga. All Rights Reserved. Terms Privacy Cookie Policy
                    </Text>
                    </View>

                </View>

                <StatusBar style="auto" />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    brasGridImagesContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
      },
    brasGridImagesWrap:{
        flex: 1,
      },
    brasGridImages: {
        width: '100%',
        height: 250,
      },

    footer: {
        backgroundColor: '#000000',
        marginTop: 20,
      },
    card: {
        marginBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        paddingBottom: 10,
        paddingLeft: 5,
      },
      cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 18,
        marginTop: 10
      },
      cardContent: {
        padding: 14
      },
      arrowContent: {
        marginRight: 10,
        marginTop: 10
      }
})