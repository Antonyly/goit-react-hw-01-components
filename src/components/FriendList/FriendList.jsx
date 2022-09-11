import PropTypes from "prop-types"
import { AllFriends } from './FriendList.styled'
import {FriendListItem} from './FriendListItem'



 const FriendList = ({ friends }) => {
    return (<AllFriends>{friends.map(friend => (
        <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            />
        ))}
    </AllFriends>
    );
}



FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        key: PropTypes.number,
    }))
}
export default FriendList;