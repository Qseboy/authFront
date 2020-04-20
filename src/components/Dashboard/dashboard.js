import React, { Component, useState, useEffect } from 'react';
import { SimpleUser } from './simpleUser/simpleUser'
import { CheckBox } from '../TheGeneralComponents/Checkbox/checkbox'
import '../Dashboard/dashboard.css'
import Cookies from 'js-cookie'

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

    // logout function  вінести в компонент
    const logout = () => {
        Cookies.remove("user_1");
        Cookies.remove("all_users");
        setCurrentUser(''); //Если поставить setCurrentUser(null) то currentUser.privileges == true не пройдет потому что юзер будет null
        props.history.push('/login');
    }

    return currentUser.privileges ? (
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
    ) : <SimpleUser currentUser={currentUser} logout={logout} />
}

export { DashBoard };
