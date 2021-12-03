import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import Loader from './Loader';

export default function LoadingButton ({ disabled, style, onPress, loader }: any) {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={style.buttonContainer}
        >
            {loader && <Loader color="#000"/>}
            
            <Text style={style.button}>
                Publier
            </Text>
        </TouchableOpacity>
    )
}