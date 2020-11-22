 
import blogsApi from '../api/blogsApi';
import createDataContex from './createDataContex';
  
const blogPostReducer = (state, action)=>{
    switch(action.type){
        case 'get_blogpost':
            return action.payload;
        case 'add_blogpost':
            return [...state,{id: state.length+1, title:action.payload.title}]
        case 'delete_blogpost':
            return state.filter((blogPost)=>{return blogPost.id !==action.payload}) 
        case 'update_blogpost':
            return state.map((blogPost)=>{
                return blogPost.id === action.payload.id? action.payload: blogPost;
            })
        default:
            return state;
    }
}

const getBlogPost=(dispatch)=>{
    return async()=>{
        const response = await blogsApi.get('/blogs');
        console.log(response.data);
        dispatch({type:'get_blogpost',payload:response.data})
    }
     
}

const addBlogPost=(dispatch)=>{
    return async (title,content, callBack)=>{
        fetch('https://my-json-server.typicode.com/maxjhonson/blogpost_db/blogs/1', {
            method: 'DELETE',
          })
        dispatch({type:'add_blogpost', payload:{title, content}})
        callBack();
    }
};

const updateBlogPost=(dispatch)=>{
    return(id,title,content,callBack)=>{
        dispatch({type:'update_blogpost', payload:{id,title,content}})
        callBack();
    }
}

const deleteBlogPost=(dispatch) =>{
    return(id)=>{
        dispatch({type:'delete_blogpost', payload:id})
    }
}
 
export const {Context, Provider} = createDataContex(blogPostReducer,{addBlogPost, deleteBlogPost,updateBlogPost,getBlogPost},[]);