import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import LoadingButton from '../LoadingButton';

export default function MakePost ({ content, setContent, loader, handlePressPublished }: any) {
    return (
        <>
            <TextInput
                value={content}
                style={style.input}
                returnKeyType="send"
                onChangeText={setContent}
                placeholderTextColor="grey"
                placeholder="Quoi de neuf ?"
                onSubmitEditing={() => content && handlePressPublished()}
            />

            <LoadingButton
                style={style}
                loader={loader}
                disabled={!content}
                onPress={handlePressPublished}
            />
        </>
    )
}

const style = StyleSheet.create({
    input: {
        width: '100%',
        color: 'grey',
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#dcdcdc',
    },
    buttonContainer: {
        borderWidth: 0,
        minWidth: "38%",
        display: 'flex',
        borderRadius: 8,
        marginVertical: 10,
        paddingVertical: 6,
        flexDirection: 'row',
        paddingHorizontal: 8,
        alignSelf: "flex-end",
        marginHorizontal: "1%",
        justifyContent: 'center',
        backgroundColor: '#ffd700',
    },
    button: {
        fontSize: 22,
        color: "#fff",
        fontWeight: 'bold',
        textAlign: "center",
    }
})