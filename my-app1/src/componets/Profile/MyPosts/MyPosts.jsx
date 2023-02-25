import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post';


const MyPosts = ( props) => {

    let posts = [
        {id: 1, message: 'Hi, how are you?????', likeCount: 11},
        {id: 2, message: 'It is my first post!', likeCount: 12},
    ]

    let postsElements = posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    return (  
    <div>
        <div>
            <h1 className={s.titlePost}>My posts</h1>
            <div className={s.textPostHolder}>
                <textarea className={s.textPost} name="" id="" cols="55" rows="5" placeholder='My news'></textarea>
            </div>
            <button className={s.btn}>Add post</button>
        </div>
       <div className={s.posts}>
            {postsElements}
       </div>
    </div>
    )
}

export default MyPosts;