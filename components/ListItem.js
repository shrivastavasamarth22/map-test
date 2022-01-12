import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";

const ListItem = ({position, name, qty, onPress}) => {
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
            <Text style={[styles.text, { marginRight: 0 }]}>
                {qty}
            </Text>
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
    }
})

export default ListItem