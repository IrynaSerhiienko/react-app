import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
   
    return (  
    <div className={s.item}>
        <div className={s.avatarHolder}><img className={s.avatar} src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000" alt="avatar" /></div>
        <div className={s.newPost}><p>{props.message}</p></div>
        <span>Like</span>
    </div>
    )
}

export default Post;