
import React,{useState} from 'react';
import { View,StyleSheet,Text,TextInput,Button } from 'react-native';

function BlogPostForm({onSubmit, initialValues}) {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    return (
        <View>
            <Text style={styles.title}>Title:</Text>
            <TextInput
                 value={title}
                 onChangeText={(text)=>setTitle(text)}
                 style={styles.input}
            />
            <Text style={styles.title}>Content:</Text>
            <TextInput 
                value={content}
                onChangeText={(text)=>setContent(text)}
                style={styles.input}
            />
            <Button title ="Save Blog Post" onPress={()=>onSubmit(title,content)}/>
        </View>
    );
}

BlogPostForm.defaultProps={
    initialValues:{
        title:'',
        content:''
    }
}

const styles = StyleSheet.create({
    title:{
        fontSize:16,
        marginLeft:5,
        marginBottom:5
    },
    input:{
        borderColor:'grey',
        borderWidth:1,
        padding:2,
        marginHorizontal:5,
        marginBottom:10

    }
})

export default BlogPostForm;