import React, { Component, useState } from 'react';
import { SimpleUser } from './simpleUser/simpleUser'
import { CheckBox } from '../TheGeneralComponents/Checkbox/checkbox'
import '../Dashboard/dashboard.css'

const DashBoard = (props) => {
    const { currentUser, setCurrentUser } = props;
    const { users } = props;

    let userList = users.map((number, counted = 0) =>
        <tr key={number.email}>
            <td>{counted++}</td>
            <td>{number.login}</td>
            <td>{number.email}</td>
            <td>{number.password}</td>
            <td>{<CheckBox privileges={number.privileges} />}</td>
        </tr>
    );

    // logout function
    const logout = () => {
        props.history.push('/login');
        setCurrentUser(null);
        console.log('logout')
    }


    //defender route Dashboard, redirect undefined users to login
    if (currentUser.privileges === undefined) {
        props.history.push('/')
    }

    return currentUser.privileges === true ? (
        <div className="parentDivDashboar">Hi {currentUser.login}
            <div>
                <div className='users__table'>
                    <table>
                        <tr>
                            <td>Number</td>
                            <td>Login</td>
                            <td>Email</td>
                            <td>Password</td>
                            <td>Status</td>
                        </tr>
                        {userList}
                    </table>
                </div>
            </div>
            <div className="logoutBlock">
                <button className='btn' onClick={logout}>Sing out</button>
            </div>
        </div >
    ) : <SimpleUser currentUser={currentUser} />
}

export { DashBoard };
