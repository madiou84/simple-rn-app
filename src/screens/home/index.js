import React, { useState } from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Post from '../../Shared/posts/Post';
import Posts from '../../Shared/posts/Posts';
import MakePost from '../../Shared/posts/MakePost';

export default function Home () {
    const [posts, setPosts] = useState([]);
    const [content, setContent] = useState("");
    const [loader, setLoader] = useState(false);


    async function handlePressPublished () {
        setContent('');
        setLoader(true);
        
        const photo = await fetch('https://coffee.alexflipnote.dev/random.json')
            .then(res => res.json())
            .then(({file}) => file)
            .catch(console.error)

        setPosts(state => ( [  ...[{ content, photo }], ...state, ] ))
        setLoader(false);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
                animated
                transparent={true}
                animationType="slide"
                backgroundColor="#fff"
                barStyle="dark-content"
            />

            <View
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    paddingHorizontal: 25,
                    justifyContent: 'center',
                    backgroundColor: Colors.white,
                }}
            >
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
            </View>
        </SafeAreaView>
    )
}