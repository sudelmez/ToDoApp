/* eslint-disable prettier/prettier */
import styles from './card.styles';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CardComponent = (props) => {
    const [show, setShow] = useState(true);

    const handleCardPress = () => {
        setShow(!show);
    };

    return (
        <TouchableOpacity onPress={handleCardPress}>
            <View style={show ? styles.container : styles.deletedcontainer}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CardComponent;
