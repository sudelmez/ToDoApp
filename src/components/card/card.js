/* eslint-disable prettier/prettier */
import styles from './card.styles';
import React from 'react';
import { View, Text } from 'react-native';

const CardComponent = (props) => 
<View style={styles.container}>
    <Text>{props.title}</Text>
</View>;

export default CardComponent;
