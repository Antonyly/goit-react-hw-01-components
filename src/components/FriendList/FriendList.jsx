import React from 'react';
import propTypes from 'prop-types';
import css from './friendList.module.css';

const FriendList = ({ friends }) => (
    <ul className={css.friend_list}>
        {friends.map(friend => (
            <li className={css.item} key={friend.id}>
                <span className={friend.isOnline ? css.statusOnline : css.statusOffline}></span>
                <img className={css.avatar} src={friend.avatar} alt={friend.avatar} width="50" />
                <p className={css.name}>{friend.name}</p>
            </li>
        ))}
    </ul>
);

FriendList.propTypes = {
    friends: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            avatar: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            isOnline: propTypes.bool.isRequired,
        }),
    ),
};

export default FriendList;