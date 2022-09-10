import React from 'react';
// import propTypes from 'prop-types';
import css from './friendList.module.css';

const FriendList = ({ friends }) => (
    <ul className={css.friend_list}>
        {friends.map(friend => (
            <li className={css.item} key={friend.id}>
                <span className={friend.isOnline ? css.statusOnline : css.statusOffline}></span>
                <img className={css.avatar} src={friend.avatar} alt={friend.avatar} width="48" />
                <p className={css.name}>{friend.name}</p>
            </li>
        ))}
    </ul>
);

export default FriendList;