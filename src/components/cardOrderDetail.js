import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {vw, vh} from 'react-native-expo-viewport-units'
import { BASE_URL } from '@env'

class CardBag extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: BASE_URL + this.props.img, width: vw(30), height: 121}} style={{borderBottomLeftRadius:8, borderTopLeftRadius:8}} />
                <View style={styles.infobag}>
                    <Text
                        style={{ fontSize: 18, fontWeight: 'bold', marginBottom:5, marginTop:10 }}
                    >
                        {this.props.name}
                        </Text>
                    <Text style={{color:'gray',marginBottom:10}}></Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginRight: 16 , color:'gray'}}>Color: 
                        <Text style={{color:'black'}}>{this.props.color}</Text>
                        </Text>
                        <Text>Size: {this.props.size}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, justifyContent:'space-between' }}>
                        <Text style={{ color:'gray'}}>Unit : 
                        <Text style={{color:'black'}}>{this.props.qty}</Text>
                        </Text>
                        <View style={styles.price}>
                            <Text style={{ fontFamily: 'Metropolis-Bold',fontWeight:'bold', fontSize: 20, marginTop:-10 }}>Rp. {this.props.qty*this.props.price}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default CardBag;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height:125,
        marginBottom:10,
        borderColor:'gray',
        borderWidth:2,
        borderRadius:8
        
    },
    price: {
        marginTop: 7,
        marginLeft: 50,
    },
    infobag: {
        backgroundColor: '#fff',
        width: vw(65),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        paddingHorizontal: 5,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
    },
});