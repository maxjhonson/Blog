import React, { useState,useContext } from 'react';
import { Text, View,TextInput,StyleSheet, Button } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';
 
function CreateScreen({navigation}) {
    const {addBlogPost} = useContext(Context);

    return (
        <BlogPostForm onSubmit={(title,content)=>addBlogPost(title,content,()=>navigation.navigate('Blog'))} />
    );
}

const styles = StyleSheet.create({

});
 
export default CreateScreen;    