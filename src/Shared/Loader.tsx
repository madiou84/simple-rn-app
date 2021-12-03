import * as React from 'react';
import { ActivityIndicator } from 'react-native';

export default function Loader({ size = "small", color = "#fff" }: any) {
    return (
        <ActivityIndicator size={size} color={color} style={{ paddingRight: 5 }} />
    )
}