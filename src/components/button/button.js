/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, View } from 'react-native';
import styles from './button.style';

const ButtonCustom = (props) => {
    return (
        <View style={styles.container}>
            <Button style={styles.text} onPress={props.onPress} title='Save' />
        </View>
    );
};

export default ButtonCustom;
