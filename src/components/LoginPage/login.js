import React, { Component, useState } from 'react';
import Cookies from 'js-cookie'
import './login.css'


const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const users = props.users;

    //defender route login, when auth user try to connect. Redirect  users to dashboard
    if (props.currentUser) {
        props.history.push('/dashboard')
    }

    let authenticationUser = () => {
        const user = users.find((element) =>
            element.email === email && element.password === password
        )

        let setUserCookies = JSON.stringify(user);
        Cookies.set("user_1", setUserCookies);

        if (user) {
            props.setCurrentUser(user);
            props.history.push('/dashboard')
        }
        else {
            alert('user not found')
        }
    }

    return (
        <div className="reg">
            <h1 className="reg__h"> Sing in</h1>
            <input className="reg__form" type="email" name="email" placeholder="Login" value={email} onChange={e => setEmail(e.target.value)}></input>
            <input className="reg__form" type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} ></input>
            <div className="login__buttons">
                <button className="log__button" onClick={authenticationUser}>sing in</button>
            </div>
            <div>

            </div>
        </div>
    );
}

export { Login };
