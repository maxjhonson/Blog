import React, { useContext } from 'react';
import { View,Text } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

function EditScreen({navigation,route}) {
    console.log(navigation)
    const id =   route.params.id;
    const {state, updateBlogPost} = useContext(Context);
    const {title,content} = state.find((blogPost)=> blogPost.id===id);
    return (
        <View>
            <BlogPostForm initialValues={{title,content}} onSubmit={(title,content)=>{updateBlogPost(id,title,content, ()=>navigation.pop())}}/>
        </View>
    );
}

export default EditScreen;

//defaultProps