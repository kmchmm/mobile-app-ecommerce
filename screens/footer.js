import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { useFonts } from 'expo-font';

export default function Footer () {
    return (
        <View style={[styles.footer, {paddingLeft: 10, paddingRight: 10}]}>
            <Text style={{marginTop: 20, color: '#ffffff', fontFamily: 'Poppins-Bold'}}>
              Sign up for our newsletter - enter your email below
            </Text>
            <TextInput style={{ height: 40, width: '80%', borderColor: '#ffffff', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
            placeholder="Enter your email"/>
        </View>
    )
}
