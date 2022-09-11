import PropTypes from "prop-types"
import { Friend, Status, Name, FriendHover } from './FriendListItem.styled'


export const FriendListItem = ({ avatar, name, isOnline }) => {
    return <Friend>
                <Status isOnline={isOnline} />
                <img src={avatar} alt="User avatar" width="48" />
                <Name>{name}</Name>
            </Friend>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}