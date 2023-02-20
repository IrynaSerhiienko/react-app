import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = ( ) => {
    return (  
    <div>
        <h1 className={s.titlePost}>My posts</h1>
        <textarea className={s.textPost} name="" id="" cols="" rows="" placeholder='My news'></textarea>
        <button className={s.btn}>Add post</button>
       
        <Post message='Hi, how are you?'/>
        <Post message='It is my first post'/>
    </div>
    )
}

export default MyPosts;