import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';


export default function Home() {

  const [isPublicOpen, setPublicOpen] = useState(false);
  const [isPrivateOpen, setPrivateOpen] = useState(false);
  const togglePublic = () =>{
    setPublicOpen(!isPublicOpen)
  }
  const togglePrivate = () =>{
    setPrivateOpen(!isPrivateOpen)
  }

  const scrollImages = [
    {
      image: require('../assets/images/bra/lua-yoga-bra-1.png'),
      text: 'BRAS',
    },
    {
      image: require('../assets/images/leggings/leggings01.png'),
      text: 'LEGGINGS',
    },
    {
      image: require('../assets/images/sets/lua-yoga-sets-1.png'),
      text: 'SETS',
    },
    {
      image: require('../assets/images/shorts/lua-yoga-shorts-1.png'),
      text: 'SHORTS',
    },
    {
      image: require('../assets/images/tops/lua-tops-1.png'),
      text: 'TOPS',
    },
  ];

  const newSeasonStyles = [
    {
      image: require('../assets/images/bra/lua-yoga-sets-23.png'),
    },
    {
      image: require('../assets/images/sets/lua-yoga-sets-23.png'),
    },
    {
      image: require('../assets/images/tops/lua-tops-1.png'),
    },
    {
      image: require('../assets/images/tops/lua-tops-19.png'),
    },
  ];

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
    <SafeAreaView style={[styles.container, {flex: 1}]}>
      <ScrollView>
        <Text></Text>
        <Text style=
          {{backgroundColor: '#837062', 
            color: '#ffffff',
            textAlign: 'center',
            paddingTop: 20, paddingBottom: 20, paddingLeft: 0, paddingRight: 0}}> NEW HERE? RIGHT THIS WAY
          </Text>
        <Text style={{padding: 10, fontSize: 30, fontWeight: 600, textAlign: 'center', fontFamily: 'Poppins-Bold'}}>Lua Yoga</Text>
        
        <View style={{ backgroundColor: '#000000', padding: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#ffffff', flex: 1, fontFamily: 'Poppins-Regular' }}>GET REWARDS WITH LUA</Text>
            <Text style={{ color: '#f5ff58', flex: 1, textAlign: 'right', fontFamily: 'Poppins-Regular', textDecorationLine: 'underline' }}>SIGN UP</Text>
          </View>
        </View>

        <View style={styles.scrollImagesController}>
          {scrollImages.map((item, index) => (
            <View key={index}>
              <Image source={item.image} style={styles.scrollImages} />
              <Text style={{fontFamily: 'Poppins-Regular'}}>{item.text}</Text>
            </View>
          ))}
        </View>
        
        <View>
            <View>
              <Image source={require('../assets/images/bra/lua-yoga-bra-8.png')}
                style={{width: '100%', height: 450, resizeMode: 'contain', marginTop: 10}}
              />
            </View>
        </View>

        <View>
          <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center', marginTop: 20, marginBottom: 20, fontFamily: 'Poppins-Bold', fontWeight: 'bold'}}>WHAT ARE YOU LOOKING FOR?</Text>
          <View style={[styles.homeGridImagesContainer]}>
            <View style={[styles.homeGridImagesWrap]}>
              <Image source={require('../assets/images/sets/lua-yoga-sets-2.png')}
                style={[styles.homeGridImages]}
              />
              <Text style={[styles.homeGridImagesText, {fontFamily: 'Poppins-Bold'}]}>SETS</Text>
            </View> 
            <View style={[styles.homeGridImagesWrap]}>
              <Image source={require('../assets/images/leggings/leggings07.png')}
                style={[styles.homeGridImages]}
              />
              <Text style={[styles.homeGridImagesText, {fontFamily: 'Poppins-Bold'}]}>LEGGINGS</Text>
            </View>
          </View>
          <View style={[styles.homeGridImagesContainer]}>
            <View style={[styles.homeGridImagesWrap]}>
              <Image source={require('../assets/images/bra/lua-yoga-bra-4.png')}
                style={[styles.homeGridImages]}
              />
              <Text style={[styles.homeGridImagesText, {fontFamily: 'Poppins-Bold'}]}>BRAS</Text>
            </View>
            <View style={[styles.homeGridImagesWrap]}>
              <Image source={require('../assets/images/tops/lua-tops-3.png')}
                style={[styles.homeGridImages]}
              />
              <Text style={[styles.homeGridImagesText, {fontFamily: 'Poppins-Bold'}]}>TOPS</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20, marginBottom: 20, marginLeft: 20, fontFamily: 'Poppins-Bold' }}>
            NEW-SEASON STYLES
          </Text>
          <View style={styles.newSeasonStylesScroller}>
            {newSeasonStyles.map((item, index) => (
              <View style={styles.newSeasonStylesScrollerWrapper} key={index}>
                <Image source={item.image} style={styles.newSeasonStylesScrollerImage} />
              </View>
            ))}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  scrollImagesController: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    marginLeft: '2.5%',
    marginRight: '2.5%',
  },
  scrollImages: {
    width: 100,
    height: 100,
    flex: 1,
    marginBottom: 5,
  },
  homeGridImagesContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  homeGridImagesWrap:{
    flex: 1,
  },
  homeGridImages: {
    width: '100%',
    height: 250,
  },
  homeGridImagesText: {
    textDecorationLine: 'underline', 
    textAlign: 'center', 
    fontWeight: 'bold',
    marginTop: 10,
  },
  newSeasonStylesScroller: {
    flexDirection: 'row',
    gap: 10,
  },
  newSeasonStylesScrollerWrapper: {
    flex: 1,
  },
  newSeasonStylesScrollerImage: {
    width: 150,
    height: 150,
  },
  footer: {
    backgroundColor: '#000000',
  },
  card: {
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
});