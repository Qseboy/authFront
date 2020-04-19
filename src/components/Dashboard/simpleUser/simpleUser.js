import React from 'react';

const SimpleUser = (props) => {
    return (
        <div className="simple__user">
            <div className="current__user__name">hi {props.currentUser.login}</div>
            <button className='btn' onClick={props.logout}>Sing out</button>
        </div>
    )
}

export { SimpleUser };
