/**
 * Created by hesham on 1/29/2018.
 */
import React from 'react';
import {View} from 'react-native';
const CardSection=(props)=>{
    return <View style={[styles.containerStyle, props.style]}>
        {props.children}
      </View>;

};
const styles = {
    containerStyle: {
        borderWidth: 1,
        padding: 10,
        elevation:5,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',

         borderWidth: 1,
        borderRadius: 4,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        justifyContent: 'space-between',
        marginRight: 5,
        padding: '10%',
        marginTop: 10
    }
};
export  {CardSection};