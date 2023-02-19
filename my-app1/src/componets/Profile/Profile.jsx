import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';


const Profile = ( ) => {
    return (   <div className={s.content}>
<div className={s.heroHolder}></div>

    <div className={s.avatarHolder}>
      <img
        src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000"
        alt=""
      />
    </div>
    <div className={s.avatarDescription}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Cumque officiis nesciunt iste atque. Sapiente cum nam quas
      ducimus suscipit autem maxime aperiam perferendis, corporis
      voluptatem ab accusantium sequi repudiandae qui?
    </div>

    {/* <div className={s.titlePost}>my post</div>
    <div className={s.newPost}>new post</div>
    <div className={s.postShow}>postN</div>
    <div className={s.postShow}>postN</div> */}

    <MyPosts />
  </div>)
}

export default Profile;