import React from 'react';
import { ScrollView } from 'react-native';

export default function Posts ({ children, ...rest }: any) {
    return (
        <ScrollView {...rest}>
            {children}
        </ScrollView>
    )
}