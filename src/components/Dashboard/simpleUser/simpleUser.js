import React from 'react';

const SimpleUser = (props) => {
    return (
        <div className="simple__user">
            <div className="current__user__name">hi {props.currentUser.login}</div>
        </div>
    )
}

export { SimpleUser };
