import React,{useContext, useEffect} from 'react';
import { View,Text, Button, StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';
import ShowScreen from './ShowScreen';


function IndexScreen({navigation}) {
    const {state, getBlogPost, deleteBlogPost} = useContext(Context);

    navigation.setOptions({
        headerRight:()=>(
            <TouchableOpacity onPress={()=>navigation.navigate('Create')}>
                <Feather name="plus"  size={30}/>
            </TouchableOpacity>
        )
    });

    useEffect(()=>{
        getBlogPost();
    },[])

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPost)=>blogPost.title}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
                            <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                                <Feather style={styles.icon} name="trash"/>
                            </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            >
            </FlatList>
        </View>
    );
}

 
const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        borderBottomWidth:1,
        borderTopColor:'gray',
        paddingHorizontal:10
    },
    title:{
        fontSize:18
    },
    icon:{
        fontSize:24
    }
})

export default IndexScreen;