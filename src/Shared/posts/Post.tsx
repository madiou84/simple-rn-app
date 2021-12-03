import React from 'react';
import { StyleSheet, View, Text, Image, } from 'react-native';

import Loader from '../Loader';
import PostModel from '../../models/Post';

export default function Post ({ photo, content, loader }: PostModel) {
    return (
        <View style={style.postContainer}>
            <Text style={style.postTitle}>
                {content}
            </Text>
            {loader ? <Loader/> : (
                <Image
                    resizeMode="cover"
                    source={{ uri: photo }}
                    style={style.postImage}
                />
            )}
        </View>
    )
}

const style = StyleSheet.create({
    postContainer: {
        width: 360,
        height: 250,
        marginBottom: 60,
    },
    postTitle: {
        color: '#000',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    postImage: {
        width: '100%',
        height: '100%',
    }
})