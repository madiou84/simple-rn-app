import React from 'react';
import {
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';

export default function ({ content, setContent, loader, handlePressPublished, ...rest }) {
    return (
        <>
            <TextInput
                {...rest}
                value={content}
                style={style.input}
                returnKeyType="send"
                onChangeText={setContent}
                placeholderTextColor="grey"
                placeholder="Quoi de neuf ?"
                onSubmitEditing={() => content && handlePressPublished()}
            />

            <TouchableOpacity
                disabled={!content}
                style={style.buttonContainer}
                onPress={handlePressPublished}
            >
                {loader && <ActivityIndicator
                    size="small"
                    color="#00ff00"
                    style={style.loader}
                />}
                
                <Text style={style.button}>
                    Publier
                </Text>
            </TouchableOpacity>
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
        fontSize: 20,
        color: "#fff",
        fontWeight: "500",
        fontWeight: 'bold',
        textAlign: "center",
    },
    loader: {
        marginHorizontal: 4
    }
})