import React,{useContext, useEffect, useState} from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context } from '../context/BlogContext';
import {EvilIcons} from '@expo/vector-icons'; 

function ShowScreen({navigation, route}) {
 
    const {state} = useContext(Context);
    const blogPost = state.find((blogPost)=> blogPost.id === route.params.id);
     

    navigation.setOptions({
        headerRight: ()=>(
            <TouchableOpacity onPress={()=>navigation.navigate('Edit',{id:route.params.id})}>
                <EvilIcons name="pencil" size={35}/>
            </TouchableOpacity>
    )
    });
 

    return (
        <View>
            <Text style={styles.title}>Title:</Text>
            <Text>{blogPost.title}</Text>
            <Text style={styles.title}>content:</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize:18,
    }
});


export default ShowScreen;  