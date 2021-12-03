import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';

import PostModel from '../../models/Post';
import Post from '../../Shared/posts/Post';
import Posts from '../../Shared/posts/Posts';
import MakePost from '../../Shared/posts/MakePost';

export default function Home () {
    const [content, setContent] = useState<string>("");
    const [posts, setPosts] = useState<PostModel[]>([]);
    const [loader, setLoader] = useState<boolean>(false);

    async function handlePressPublished () {
        setLoader(true);
        const photo = await fetch('https://coffee.alexflipnote.dev/random.json')
        .then(res => res.json())
        .then(({file}) => file)
        .catch(console.error)
        
        setContent('');
        setLoader(false);
        setPosts((state: any) => ([
            ...[{ content, photo, loader }],
            ...state
        ]));
    }

    return (
        <SafeAreaView style={styles.sectionContainer}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
            <MakePost
                loader={loader}
                content={content}
                setContent={setContent}
                handlePressPublished={handlePressPublished}
            />
            <Posts>
                {posts.map((post, index) => (
                    <Post
                        {...post}
                        key={index}
                    />
                ))}
            </Posts>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        width: '100%',
        height: '100%',
        paddingTop: 32,
        paddingHorizontal: 24,
        backgroundColor: Colors.white,
    }
})