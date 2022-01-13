import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const ListItem = ({position, name, qty, onPress, onPress2}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Text style={styles.text}>
                {position}
            </Text>
            <Text style={styles.text}>
                {name}
            </Text>
            <Text style={[styles.text, {marginRight: 0}]}>
                {qty}
            </Text>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={onPress2}
            >
                <MaterialIcons name="delete" size={28} color="black" />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: 'black',
        marginRight: 10
    },
    buttonStyle: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ListItem